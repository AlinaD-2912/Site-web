// --- DROPDOWN MENU ---

function toggleDropdown() {
    document.getElementById("DropdownMenu").classList.toggle("show");
}

function setupDropdown() {
    const button = document.getElementById("dropdownButton");
    const dropdown = document.getElementById("DropdownMenu");

    if (!button || !dropdown) return;

    //ajouter le contenu dans boutton
    button.innerHTML = `
        <div class="button-wrapper">
            <div class="button-left">
                <img src="images/left-align.png" alt="Dropdown menu" class="icon">
                <span class="site-title">StraySpawn</span>
            </div>
            <img src="images/cat.png" alt="Site Logo" class="icon">
        </div>
    `;

    // importer les elements de data.js
    dropdownItems.forEach(item => {
        const link = document.createElement('a');
        link.href = item.href;
        link.textContent = item.name;
        dropdown.appendChild(link);
    });
}


// --- FEED ---

function loadFeed() {
    const feedContainer = document.querySelector('.feed');
    feedContainer.innerHTML = '';

    gamesFeed.forEach(post => {
        const postElement = document.createElement('div');
        postElement.className = 'post';
        postElement.innerHTML = `
            <div class="images-feed">
                <img src="${post.image}" alt="${post.nomDeJeu}" />
            </div>
            <div class="post-content">
                <h3>${post.nomDeJeu}</h3>
                <p>${post.description}</p>
            </div>
        `;
        feedContainer.appendChild(postElement);
    });
}

// --- INITIALIZE EVERYTHING ---

function init() {
    setupDropdown();
    loadFeed();

    const refreshButton = document.getElementById("refreshButton");
    if (refreshButton) {
        refreshButton.addEventListener("click", loadFeed);
    }
}

// actualiser la page
document.addEventListener("DOMContentLoaded", init);
