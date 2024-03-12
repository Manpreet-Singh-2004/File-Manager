// Function to set the welcome message
var storedUsername = localStorage.getItem("username");
function setWelcomeMessage() {

    if (storedUsername === null) {
        // Redirect to the verification HTML if there is no stored username
        window.location.href = "Verification.html";
    } else {
        // Set the welcome message if the username is present
        document.getElementById("welcome").textContent = "Welcome " + storedUsername;
    }
    
}

function logout() {
    localStorage.removeItem("username");
    window.location.href = "verification.html";
}

// Profile Side-Bar
function openSidebar() {
    document.getElementById("mySidebar").style.width = "250px";
}

function closeSidebar() {
    document.getElementById("mySidebar").style.width = "0";
}



// Left Div

// document.addEventListener('DOMContentLoaded', async function() {
//     const foldersContainer = document.getElementById('foldersContainer');

//     // Request user permission to access the directory
//     try {
//         const directoryHandle = await window.showDirectoryPicker();

//         // Read the contents of the directory
//         for await (const entry of directoryHandle.values()) {
//             if (entry.kind === 'directory') {
//                 // Create a folder item
//                 const folderItem = document.createElement('div');
//                 folderItem.classList.add('FolderItem');

//                 // Create a folder icon
//                 const folderIcon = document.createElement('div');
//                 folderIcon.classList.add('FolderIcon');
//                 folderIcon.innerHTML = '<i class="gg-folder"></i>';
//                 folderItem.appendChild(folderIcon);

//                 // Create a folder name
//                 const folderName = document.createElement('div');
//                 folderName.classList.add('FolderName');
//                 folderName.textContent = entry.name;
//                 folderItem.appendChild(folderName);

//                 // Add the folder item to the container
//                 foldersContainer.appendChild(folderItem);
//             }
//         }
//     } catch (error) {
//         console.error('Error accessing directory:', error);
//     }
// });

// Files Upload

// Not working 
// -->
// const myForm = document.getElementById("formjs");
// const inpFile = document.getElementById("inpFile");
// myForm.addEventListener("submit", e => {
//     e.preventDefault();
//     const endpoint = "files.php";
//     const formData = new FormData();

//     formData.append("inpFile", inpFile.files[0]);
//     fetch(endpoint, {
//         method: "get",
//         body: formData
//     }).catch(console.error);
// });
// -->

document.getElementById("file").addEventListener("submit", function(e){
    e.preventDefault();
    const userFile = document.getElementById("files").files[0];
    
    const formData = new FormData();
    formData.append("user-file", userFile, "user-file.jpg");

    fetch("https://httpbin.org/post", {
        method: "POST",
        body: formData,
    })
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.log(err))
})

setWelcomeMessage();