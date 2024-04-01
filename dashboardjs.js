var username = localStorage.getItem("username");
function setWelcomeMessage() {

    if (username === null) {
        window.location.href = "Verification.html";
    } else {
        document.getElementById("welcome").textContent = "Welcome " + username;
    }
    
}

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

// File
function openFile() {
    const fileNameInput = document.getElementById("fileName");
    const fileName = fileNameInput.value.split("\\").pop(); // Extract file name without path
    const filePath = "uploads/" + fileName;
    const fileContentsDiv = document.getElementById('fileContents');

    fileContentsDiv.innerHTML = `
        <div class="PDF">
            <object data="${filePath}" type="application/pdf" width="750" height="600">
                alt : <a href="${filePath}">${fileName}</a>
            </object>
        </div>
    `;
}
// Left Div
function uploadFiles() {
    window.open("http://localhost:5500")
    
}

var darkMode = 1;

var icon = document.querySelector('.dark-mode-icon');
icon.textContent = " Switch to Dark Mode";
function DarkMode(){
    var body = document.body;
    var addDiv = document.querySelector('.Add');
    var addDiv2 = document.querySelector('.profile-icon');
    if (!darkMode) {
        body.style.backgroundImage = 'url("wal/dark.jpg")'; // Apply background image
        body.style.color = 'white'; // Dark mode text color
        addDiv.style.backgroundColor = 'rgba(15, 15,15, 0.8';
        addDiv2.style.backgroundColor = 'rgba(255, 255, 255)';
        icon.textContent = " Switch to Light Mode";
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    } else {
        body.style.backgroundImage = 'url("wal/dashboardbackground.avif")'; // Remove background image
        body.style.color = 'black'; // Light mode text color
        addDiv.style.backgroundColor = 'rgba(255, 255, 255, 0.8';
        icon.textContent = " Switch to Dark Mode";
        addDiv2.style.backgroundColor = ""; 
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    }
    darkMode = !darkMode;
}

setWelcomeMessage();