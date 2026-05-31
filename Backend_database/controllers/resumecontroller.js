const User = require('../models/usermodel');
const Resume = require('../models/resumemodel');
const { check, validationResult } = require('express-validator');
exports.userlogged = [
    check('user')
        .notEmpty().withMessage('User name is required')
        .trim()
        .isLength({ min: 2 }).withMessage('User name must be at least 2 characters'),

    check('email')
        .notEmpty().withMessage('Email is required')
        .isEmail().withMessage('Enter a valid email'),

    check('password')
        .notEmpty().withMessage('Password is required')
        .isLength({ min: 6 }).withMessage('Password must be at least 6 characters'),

    check('cpassword').custom((value, { req }) => {
        if (value !== req.body.password) {
            throw new Error('Passwords do not match');
        }
        return true;
    }),

    async(req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(422).json({ errors: errors.array() });
        }
        const { user, email, password, cpassword } = req.body;
        const users = new User({ user, email, password, cpassword });
        await users.save();
        res.status(200).json(users);
    }
];

exports.loggeduser = async(req, res, next) => {
    const { identifier, password } = req.body;
    const users = await User.findOne({
        $or: [{ user: identifier }, { email: identifier }],
        password: password
    });
    if (!users) return res.status(401).json({ message: "User not found." });
    res.status(200).json(users);
}


exports.builderdata = async(req, res, next) => {
    try {
        const resume = new Resume({ ...req.body, userId: req.body.userId });
        const saved = await resume.save();
        res.status(201).json({ success: true, id: saved._id });
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
}

exports.resumedata = async(req, res, next) => {
    try {
        console.log("Looking for ID:", req.params.id); // ← debug
        const resume = await Resume.findById(req.params.id);
        if (!resume) return res.status(404).json({ success: false, message: "Not found" });
        res.json({ success: true, resume }); // ← add success: true
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
}

exports.updatedata = async(req,res,next)=>{
    try {
        const updated = await Resume.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true } // returns updated document
        );
        if (!updated) return res.status(404).json({ success: false, message: "Resume not found" });
        res.json({ success: true, resume: updated });
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
}