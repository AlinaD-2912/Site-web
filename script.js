
// Dropdown menu

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
window.addEventListener("DOMContentLoaded", addDropdownItems);