// Function to set the welcome message
var username = localStorage.getItem("username");
function setWelcomeMessage() {

    if (username === null) {
        // Redirect to the verification HTML if there is no stored username
        window.location.href = "Verification.html";
    } else {
        // Set the welcome message if the username is present
        document.getElementById("welcome").textContent = "Welcome " + username;
    }
    
}

// ------------Folder
// var name = localStorage.getItem('username');

// Send an HTTP request to the server to create a folder with the name
// ------------Folder

function logout() {
    localStorage.removeItem("username");
    window.location.href = "verification.html";
}

// Profile Side-Bar
function openSidebar() {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("mySidebar").style.display = "block";
}

function closeSidebar() {
    document.getElementById("mySidebar").style.display = "none";
}

// Left Div
function uploadFiles() {
    window.open("http://localhost:5500")
    
}
// Node dosent have the capability to use localStorage to store user name 💀

function openSmallWindow(url) {
    // Set window dimensions
    const width = 400;
    const height = 300;
    // Calculate the position of the window to center it on the screen
    const left = (window.innerWidth - width) / 2;
    const top = (window.innerHeight - height) / 2;
    // Specify window features
    const features = `width=${500},height=${500},left=${500},top=${500},resizable=yes,scrollbars=yes`;

    // Open the new window with the specified URL and features
    window.open(url, '_blank', features);
}
var LSDarkMode = localStorage.getItem("darkmode");
var darkMode = LSDarkMode === "1";
function DarkMode(){
    var body = document.body;
    var addDiv = document.querySelector('.Add');
    var addDiv2 = document.querySelector('.profile-icon');
    if (!darkMode) {
        // Switch to dark mode
        localStorage.setItem("darkmode", "1")
        body.style.backgroundImage = 'url("wal/dark.jpg")'; // Apply background image
        body.style.color = 'white'; // Dark mode text color
        addDiv.style.backgroundColor = 'rgba(15, 15,15, 0.8';
        addDiv2.style.backgroundColor = 'rgba(255, 255, 255)';
    } else {
        // Switch to light mode
        localStorage.setItem("darkmode", "0")
        body.style.backgroundImage = 'url("dashboardbackground.avif")'; // Remove background image
        body.style.color = 'black'; // Light mode text color
        addDiv.style.backgroundColor = 'rgba(255, 255, 255, 0.8';
    }
    darkMode = !darkMode;
}

function fetchFiles() {
    fetch('/list-files') // Endpoint to fetch the list of files
        .then(response => response.json())
        .then(files => {
            const foldersContainer = document.getElementById('foldersContainer');
            foldersContainer.innerHTML = ''; // Clear previous content
            
            files.forEach(file => {
                const fileElement = document.createElement('div');
                fileElement.textContent = file;
                foldersContainer.appendChild(fileElement);
            });
        })
        .catch(error => console.error('Error fetching files:', error));
}
// ----

setWelcomeMessage();