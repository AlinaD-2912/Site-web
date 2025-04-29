
/*-- DROPDOWN MENU --*/

function toggleDropdown() {
    //prend le boutton du dropdown par son id
    document.getElementById("DropdownMenu").classList.toggle("show");
}

function addDropdownItems() {
    const dropdown = document.getElementById("DropdownMenu");
    const dropdownJeux = document.getElementById("DropdownMenuJeux");
    const dropdownGallery = document.getElementById("DropdownMenuGallery");

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
// load
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
});

/*-- FEED --*/
const gamesFeed = [
    {
        nomDeJeu: 'Subnautica 2',
        description: 'Un nouveau monde vous attend, aux côtés d’une histoire totalement inédite. Vous êtes un pionnier voyageant vers un monde lointain, mais quelque chose ne tourne pas rond. ',
        image: ''
    }
]