
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

        const link1 = document.createElement('a');
        link1.href = item.href;
        link1.textContent = item.name;

        const link2 = document.createElement('a');
        link2.href = item.href;
        link2.textContent = item.name;

        if (dropdown) dropdown.appendChild(link);
        if (dropdownJeux) dropdownJeux.appendChild(link1);
        if (dropdownGallery) dropdownGallery.appendChild(link2);
    });
}

// load
window.addEventListener("DOMContentLoaded", addDropdownItems);