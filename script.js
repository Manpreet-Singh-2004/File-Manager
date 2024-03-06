function submitForm() {
    var usernameInput = document.getElementById("username");
    var passwordInput = document.getElementById("password");

    // Hardcoded hashed credentials
    // var hashus = "d94977d0b49cc13e20b2a6557bbe197a57f4d91d6cefc7e2d45ce67eb459fabe";
    // var hashpas = "03ac674216f3e15c761ee1a5e255f067953623c8b388b4459e13f978d7c846f4";
    var hashus = "9123e358b1e29c15f6a19df44daa9edf0255313876b80bed2ec8c8ff7ea7f596";
    var hashpas = "756bc47cb5215dc3329ca7e1f7be33a2dad68990bb94b76d90aa07f4e44a233a";

    // Hash both the username and password using SJCL
    var hashedUsername1 = sjcl.codec.hex.fromBits(sjcl.hash.sha256.hash(usernameInput.value));
    var hashedPassword1 = sjcl.codec.hex.fromBits(sjcl.hash.sha256.hash(passwordInput.value));

    var hashedUsername = sjcl.codec.hex.fromBits(sjcl.hash.sha256.hash(hashedUsername1));
    var hashedPassword = sjcl.codec.hex.fromBits(sjcl.hash.sha256.hash(hashedPassword1));

    // Check if the hashed username and password match the hardcoded credentials
    if (hashedUsername === hashus && hashedPassword === hashpas) {

        localStorage.setItem("username", usernameInput.value);
        window.open("dashboard.html");

    } else {
        alert("Login failed. Please try again.");
    }
}
