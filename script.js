
// ***************************         INDEX HTML       *************************

// --- DROPDOWN MENU ---

// fonction pour display menu dropdown
function toggleDropdown() {
    document.getElementById("DropdownMenu").classList.toggle("button-dropdown-affichage");
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
    console.log(dropdownItems)
    dropdownItems.forEach(item => {
        const link = document.createElement('a');
        link.href = item.href;
        link.textContent = item.name;
        dropdown.appendChild(link);
    });
}

// -----   H1 ----
let displayElement = document.getElementById('h1-accueil');
let h1Content = 'Actualités des jeux vidéo';

// if element exists
if (displayElement) {
    displayElement.innerHTML = h1Content;
}
/*
// --- FEED ---
function loadFeed() {
    const feedContainer = document.querySelector('.feed');
    feedContainer.innerHTML = '';

    gamesFeed.forEach(post => {
        const postElement = document.createElement('div');
        postElement.className = 'div-de-feed';
        postElement.innerHTML = `
            <div class="images-feed">
                <img src="${post.image}" alt="${post.nomDeJeu}" />
            </div>
            <div class="feed-contenu">
                <h2>${post.nomDeJeu}</h2>
                <p>${post.description}</p>
            </div>
        `;
        feedContainer.appendChild(postElement);
    });
}
*/

// --- IINITIALISATION + REFRECH BUTTON ---
toggleDropdown();
setupDropdown();
//loadFeed();

fetch('feedData.json')
    .then(reponse => reponse.json())
    .then(data => {
        // 50/50 chance
        const shuffled = data.sort(() => Math.random() - 0.5);

        const feedContainer = document.querySelector('.feed');
        feedContainer.innerHTML = '';

        shuffled.forEach(post => {
            const postElement = document.createElement('div');
            postElement.className = 'div-de-feed';
            postElement.innerHTML = `
                <div class="images-feed">
                    <img src="${post.image}" alt="${post.nomDeJeu}" />
                </div>
                <div class="feed-contenu">
                    <h2>${post.nomDeJeu}</h2>
                    <p>${post.description}</p>
                </div>
            `;
            feedContainer.appendChild(postElement);
        });
    })
    .catch(error => console.error('Erreur lors du chargement du JSON :', error)
);

