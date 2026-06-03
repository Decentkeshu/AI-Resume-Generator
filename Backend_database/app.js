require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const userrouter = require('./routes/userroute');
const resumerouter = require('./routes/resumeroute');

const PORT = process.env.PORT || 3001; 

app.use(cors({
    origin: [
        "http://localhost:3000",
        "https://ai-resume-generator-53p2.vercel.app" ,
        "https://ai-resume-generator-8.vercel.app"
    ],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.json({ message: "Backend is running" }); 
});

app.use("/api/user", userrouter);
app.use("/api/resume",resumerouter);
mongoose.connect(process.env.MONGO_URI, {
    tls: true,
    tlsAllowInvalidCertificates: false,
}).then(() => {
    app.listen(PORT, () => {
        console.log(`The server is running at http://www.localhost:${PORT}`);
    });
}).catch(err => {
    console.log("DB error:", err.message);
});