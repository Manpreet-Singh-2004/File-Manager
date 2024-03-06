function submitForm() {
    var usernameInput = document.getElementById("username");
    var passwordInput = document.getElementById("password");

    // Hardcoded hashed credentials
    var hashus = "d94977d0b49cc13e20b2a6557bbe197a57f4d91d6cefc7e2d45ce67eb459fabe";
    var hashpas = "03ac674216f3e15c761ee1a5e255f067953623c8b388b4459e13f978d7c846f4";

    // Hash both the username and password using SJCL
    var hashedUsername = sjcl.codec.hex.fromBits(sjcl.hash.sha256.hash(usernameInput.value));
    var hashedPassword = sjcl.codec.hex.fromBits(sjcl.hash.sha256.hash(passwordInput.value));

    // Check if the hashed username and password match the hardcoded credentials
    if (hashedUsername === hashus && hashedPassword === hashpas) {
        // Redirect to another HTML document after successful login
        // window.location.href("dashboard.html");
        window.open("dashboard.html");

    } else {
        alert("Login failed. Please try again.");
    }
}
