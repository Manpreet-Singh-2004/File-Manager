function submitForm() {
    var usernameInput = document.getElementById("username");
    var passwordInput = document.getElementById("password");

    // Hash both the username and password using SJCL
    var hashedUsername = sjcl.codec.hex.fromBits(sjcl.hash.sha256.hash(usernameInput.value));
    var hashedPassword = sjcl.codec.hex.fromBits(sjcl.hash.sha256.hash(passwordInput.value));

    // Read credentials from "check.txt" using Fetch API
    fetch('check.txt')
        .then(response => response.json())
        .then(credentialsArray => {
            // Iterate through each pair in the credentials array
            for (let i = 0; i < credentialsArray.length; i++) {
                const credentials = credentialsArray[i];

                // Hash the stored username and password
                const storedHashedUsername = sjcl.codec.hex.fromBits(sjcl.hash.sha256.hash(credentials.username));
                const storedHashedPassword = sjcl.codec.hex.fromBits(sjcl.hash.sha256.hash(credentials.password));

                // Check if the hashed username and password match the stored credentials
                if (hashedUsername === storedHashedUsername && hashedPassword === storedHashedPassword) {
                    // Redirect to another HTML document after successful login
                    window.open("dashboard.html");
                    return; // Stop further iterations once a match is found
                }
            }

            // If no match is found after checking all credentials
            alert("Login failed. Please try again.");
        })
        .catch(error => console.error('Error fetching credentials:', error));
}
