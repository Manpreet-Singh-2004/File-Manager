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

function openSidebar() {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("mySidebar").style.display = "block";
}

function closeSidebar() {
    document.getElementById("mySidebar").style.display = "none";
}

function openFile() {
    const fileNameInput = document.getElementById("fileName");
    const fileName = fileNameInput.value.split("\\").pop();
    const filePath = "uploads/" + fileName;
    const fileContentsDiv = document.getElementById('fileContents');

    fileContentsDiv.innerHTML = `
        <div class="file-preview">
            <iframe src="${filePath}" width="100%" height="600" frameborder="0"></iframe>
        </div>
    `;
}

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
        body.style.backgroundImage = 'url("wal/dark.jpg")';
        body.style.color = 'white';
        addDiv.style.backgroundColor = 'rgba(15, 15,15, 0.8';
        addDiv2.style.backgroundColor = 'rgba(255, 255, 255)';
        icon.textContent = " Switch to Light Mode";
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    } else {
        body.style.backgroundImage = 'url("wal/dashboardbackground.avif")';
        body.style.color = 'black';
        addDiv.style.backgroundColor = 'rgba(255, 255, 255, 0.8';
        icon.textContent = " Switch to Dark Mode";
        addDiv2.style.backgroundColor = ""; 
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    }
    darkMode = !darkMode;
}

setWelcomeMessage();