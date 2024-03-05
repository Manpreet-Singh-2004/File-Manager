<?php
session_start();

// Function to read the hashed credentials from the "check.txt" file
function getStoredCredentials() {
    $fileContent = file_get_contents("check.txt");
    return json_decode($fileContent, true);
}

$storedCredentials = getStoredCredentials();

if (isset($_POST["hashedPassword"])) {
    $userHashedPassword = $_POST["hashedPassword"];

    // Check if the hashed password matches the stored credentials
    if ($userHashedPassword === $storedCredentials['password']) {
        // Create a session upon successful login
        $_SESSION["authenticated"] = true;
        echo "success";
    } else {
        echo "failure";
    }
} else {
    echo "Invalid request";
}
?>
