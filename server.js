// node server.js
const express = require('express');
const multer = require('multer');
const path = require('path');

const app = express();
const PORT = 5500;

// Set up multer storage for file uploads
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        // Store uploaded files in the 'uploads' directory
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        // Rename uploaded files to avoid naming conflicts
        cb(null, Date.now() + '-' + file.originalname);
    }
});
const upload = multer({ storage: storage });

// Serve the dashboard.html file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});


// Handle file uploads
app.post('/upload', upload.array('fileInput'), (req, res) => {
    // Check if files were uploaded
    if (req.files.length > 0) {
        // Respond with a success message
        res.send("<script>alert('Files uploaded successfully.')</script>");
        // -----------------------------------------------------------------------------------
    } else {
        // Respond with an error message
        res.status(400).send('No files were uploaded.');
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});