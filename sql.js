// Import required modules
const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const path = require('path');

// Create Express app
const app = express();

// Create MySQL connection
const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "filemanager"
});

// Connect to MySQL
con.connect(function(error) {
    if (error) {
        console.log("Error:", error); 
    } else {
        console.log("Connected successfully");
    }
});

// Middleware to parse request bodies
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files from the directory
app.use(express.static(path.join(__dirname)));

// Serve login page on root path
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'Verification.html'));
});

// Serve registration page on /register path
app.get('/register', (req, res) => {
    res.sendFile(path.join(__dirname, 'RegistrationPage.html'));
});

// Handle login requests
app.post('/login', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    const email = req.body.email;

    // Check users table
    con.query('SELECT * FROM users WHERE (username = ? OR email = ?) AND password = ?', [username, email, password], (err, userResult) => {
        if (err) {
            res.status(500).send('Error during login');
            return console.error(err);
        }

        // If user exists in users table
        if (userResult.length > 0) {
            // Redirect to dashboard with username
            res.redirect(`/dashboard.html?username=${username}`);
        } else {
            // No user found
            res.send('Invalid username, email, or password');
        }
    });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
