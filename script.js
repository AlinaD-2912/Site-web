/*-- DROPDOWN MENU --*/

function toggleDropdown() {
    document.getElementById("DropdownMenu").classList.toggle("show");
}

function addDropdownItems() {
    const dropdown = document.getElementById("DropdownMenu");

    const items = [
        { name: "Feed", href: "index.html" },
        { name: "Jeux", href: "jeux.html" },
        { name: "Gallery", href: "gallery.html" },
    ];

    items.forEach(item => {
        const link = document.createElement('a');
        link.href = item.href;
        link.textContent = item.name;
        if (dropdown) dropdown.appendChild(link);
    });
}

// Load event
window.addEventListener("DOMContentLoaded", () => {
    const button = document.getElementById("dropdownButton");
    if (button) {
        button.innerHTML = `
            <div style="display: flex; align-items: center; justify-content: space-between; width: 100%; gap: 10px;">
                <div style="display: flex; align-items: center;">
                    <img src="images/left-align.png" alt="Dropdown menu" style="height:30px;">
                    <span style="margin-left: 8px;">StraySpawn</span>
                </div>
                <img src="images/cat.png" alt="Site Logo" style="height:30px; ">
            </div>
        `;
    }
    addDropdownItems();

    //fetch feed
    loadFeed();

    // boutton refraichir
    const refreshButton = document.getElementById("refreshButton");
    if (refreshButton) {
        refreshButton.addEventListener("click", loadFeed);
    }
});

/*-- FEED --*/
function loadFeed() {
    const feedContainer = document.querySelector('.feed');
    feedContainer.innerHTML = '';  // Clear current feed

    // fetch en utilisant le data de data.js
    gamesFeed.forEach(post => {
        createPost(post, feedContainer);
    });
}

// creation dynamique de contenu
function createPost(postData, feedContainer) {
    const postElement = document.createElement('div');
    //changer les classes 
    postElement.classList.add('post'); 

    postElement.innerHTML = `
        <div class="post-image">
            <img src="${postData.image}" alt="${postData.nomDeJeu}" />
        </div>
        <div class="post-content">
            <h3>${postData.nomDeJeu}</h3>
            <p>${postData.description}</p>
        </div>
    `;

    feedContainer.appendChild(postElement);
}
