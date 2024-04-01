// node server.js
const express = require('express');
const multer = require('multer');
const path = require('path');

const app = express();
const PORT = 5500;

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname);
    }
});
const upload = multer({ storage: storage });

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.post('/upload', upload.array('fileInput'), (req, res) => {
    if (req.files.length > 0) {
        res.send("<script>alert('Files uploaded successfully.')</script>");
    } else {
        res.status(400).send('No files were uploaded.');
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});