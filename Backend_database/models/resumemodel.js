const mongoose = require('mongoose');

const ResumeSchema = new mongoose.Schema({
    Name: String,
    Profession: String,
    Email: String,
    Phone: String,
    Add: String,
    summary: String,
    skills: [String],
    projects: [String],
    projectDescriptions: [String],
    languages: [String],
    experience: String,
    role: String,
    experiencedescription: String,
    template: String,
    imageData: {
        data: String,
        mediaType: String
    },
    Total_10: Number,
    Get_10: Number,
    Percent_10: Number,
    Total_12: Number,
    Get_12: Number,
    Percent_12: Number,
    Total_btech: Number,
    Get_btech: Number,
    Percent_btech: Number,
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
}, { timestamps: true });

module.exports = mongoose.model('Resume', ResumeSchema);