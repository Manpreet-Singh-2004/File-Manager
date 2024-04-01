function submitForm() {
    var usernameInput = document.getElementById("username");
    var passwordInput = document.getElementById("password");

    var hashus = "9123e358b1e29c15f6a19df44daa9edf0255313876b80bed2ec8c8ff7ea7f596"; //Manpreet
    var hashpas = "756bc47cb5215dc3329ca7e1f7be33a2dad68990bb94b76d90aa07f4e44a233a"; //1234

    // Convert 2 time

    var hashedUsername1 = sjcl.codec.hex.fromBits(sjcl.hash.sha256.hash(usernameInput.value));
    var hashedPassword1 = sjcl.codec.hex.fromBits(sjcl.hash.sha256.hash(passwordInput.value));

    var hashedUsername = sjcl.codec.hex.fromBits(sjcl.hash.sha256.hash(hashedUsername1));
    var hashedPassword = sjcl.codec.hex.fromBits(sjcl.hash.sha256.hash(hashedPassword1));

    if (hashedUsername === hashus && hashedPassword === hashpas) {

        localStorage.setItem("username", usernameInput.value);
        window.open("dashboard.html");
        window.close();

    } else {
        alert("Login failed. Please try again.");
    }
}
