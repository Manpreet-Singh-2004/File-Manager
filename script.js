function submitForm() {
    var usernameInput = document.getElementById("username");
    var passwordInput = document.getElementById("password");

    // Hash both the username and password
    var hashedUsername = sha256(usernameInput.value);
    var hashedPassword = sha256(passwordInput.value);

    // Read credentials from "check.txt" using Fetch API
    fetch('check.txt')
        .then(response => response.json())
        .then(credentials => {
            // Check if the hashed username and password match the loaded credentials
            if (hashedUsername === credentials.username && hashedPassword === credentials.password) {
                // Redirect to another HTML document after successful login
                window.location.href = "dashboard.html";
            } else {
                alert("Login failed. Please try again.");
            }
        })
        .catch(error => console.error('Error fetching credentials:', error));
}
