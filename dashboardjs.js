// Function to set the welcome message
var storedUsername = localStorage.getItem("username");
function setWelcomeMessage() {
    // Access the stored username from localStorage
    // var storedUsername = localStorage.getItem("username");
    // document.getElementById("welcome").textContent = "Welcome " + storedUsername;
    // if (storedUsername == null) {
    //     window.location.href("Validation.html");
    // }

    if (storedUsername === null) {
        // Redirect to the verification HTML if there is no stored username
        window.location.href = "Verification.html";
    } else {
        // Set the welcome message if the username is present
        document.getElementById("welcome").textContent = "Welcome " + storedUsername;
    }
    
}

function logout() {
    // Remove the stored username from localStorage
    localStorage.removeItem("username");
    
    // Redirect to the verification HTML or another appropriate page
    window.location.href = "verification.html";
}

// Call the setWelcomeMessage function
setWelcomeMessage();

