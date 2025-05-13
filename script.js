
// ***************************     INDEX HTML       *************************

// --- DROPDOWN MENU ---

// fonction pour display menu dropdown
function toggleDropdown() {
    document.getElementById("DropdownMenu").classList.toggle("button-dropdown-affichage");
}

function setupDropdown() {
    const button = document.getElementById("dropdownButton")
    const dropdown = document.getElementById("DropdownMenu")

    if (!button || !dropdown) return

    //ajouter le contenu dans boutton
    button.innerHTML = `
        <div class="button-wrapper">
            <div class="button-left">
                <img src="images/left-align.png" alt="Dropdown menu" class="icon">
                <span class="site-title">StraySpawn</span>
            </div>
            <img src="images/cat.png" alt="Site Logo" class="icon">
        </div>
    `

    // importer les elements de data.js
    console.log(dropdownItems)
    dropdownItems.forEach(item => {
        const link = document.createElement('a')
        link.href = item.href
        link.textContent = item.name
        dropdown.appendChild(link)
    });
}

// -----   H1 ----
let displayElement = document.getElementById('h1-accueil');
let h1Content = 'Actualités des jeux vidéo';

// if element exists
if (displayElement) {
    displayElement.innerHTML = h1Content;
}

// --- IINITIALISATION + REFRECH BUTTON ---
setupDropdown();
chargementDeLaPage();
//loadFeed();

function chargementDeLaPage() {
    fetch('feedData.json')
        .then(reponse => reponse.json())
        .then(data => {
            // 50/50 chance
            const shuffled = data.sort(() => Math.random() - 0.5)

            const feedContainer = document.querySelector('.feed')
            feedContainer.innerHTML = ''

            shuffled.forEach(post => {
                const postElement = document.createElement('div')
                postElement.className = 'div-de-feed'
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
}


// ----- FORMULAIRE -----------
const h2Formulaire = document.getElementById("h2-formulaire");
if (h2Formulaire) {
    h2Formulaire.innerHTML = "Pour ajouter un nouvel article à notre site, remplissez le formulaire"
}

const formulaire = document.getElementById("formulaireDynamique")
//ajouter le contenu dans boutton
if (formulaire) {
    formulaire.innerHTML = `

        <div>
            <label for="nom-de-jeu" class="fontTextDeFormulaire">Nom de jeu:</label>
        </div>
        <div>
            <input type="text" id="nom-de-jeu" name="Nom" required>
        </div>
        <div>
        <label for="msg" class="fontTextDeFormulaire">Description de jeu&nbsp;:</label>
        </div>
        <div>
        <textarea id="msg" name="user_message"></textarea>
        </div>
        <div>
        <input type="file" id="imageInput" name="imageInput" accept="image/png, image/jpeg" />
        </div>

`;
}


const buttonFromulaire = document.getElementById("formulaireButton")
if (buttonFromulaire) {
    buttonFromulaire.innerHTML = "Envoyer"
}

// --------- AJOUTER LES ARTICLE DANS LE FEED ------------
function ajouterDesArcticles() {
    const nom = document.getElementById("nom-de-jeu").value.trim()
    const msg = document.getElementById("msg").value.trim()
    const feed = document.querySelector(".feed")
    const imageInput = document.getElementById("imageInput")
    const imgDansImageInput = imageInput.files[0]

    if (!nom || !msg) {
        alert("Veuillez remplir tous les champs.")
        return;
    }

    const article = document.createElement("div")
    article.classList.add("article-post")

    if (imgDansImageInput) {
        const reader = new FileReader()
        reader.onload = function (f) {
            article.innerHTML = `
        <div class="div-de-feed">
            <div class="images-feed">
                <img src="${f.target.result}" alt="image de jeu vidéo correspondant">
            </div>
            <div class="feed-contenu">
                <h2>${nom}</h2>
                <p>${msg}</p>
            </div>
        </div>
        `;
            feed.appendChild(article)
        }
        reader.readAsDataURL(imgDansImageInput)
    }
    else {
        article.innerHTML = `
            <div class="div-de-feed">
                <div class="feed-contenu">
                    <h2>${nom}</h2>
                    <p>${msg}</p>
                </div>
            </div>
        `;
        feed.appendChild(article)
    }
    document.getElementById("formulaireDynamique").reset()

}

// ***************************         GALLERY       *************************

const h1Gallery = document.getElementById("h1-gallery")
if (h1Gallery) {
    h1Gallery.innerHTML = "Peintures célèbres de femmes"
}

// ----- AJOUTER LES IMAGES DANS LE GALLERY ------------
function chargerGallery() {
    const gallery = document.querySelector(".gallery-images")
    gallery.innerHTML = ''

    imagesGallery.forEach(item => {
        const imageWrapper = document.createElement('div')
        imageWrapper.classList.add('image-wrapper')

        const img = document.createElement('img')
        img.src = item.name
        img.alt = 'image de gallery'
        img.classList.add('img-gallery')

        imageWrapper.appendChild(img)
        gallery.appendChild(imageWrapper)
    })
}


if (document.querySelector(".gallery-images")) {
    chargerGallery()
}

// ---- FONCTIONEMENT DE BOUTTONS MOSAIC ET COLUMN ---------
function setGalleryLayout(layout) {
    const gallery = document.querySelector('.gallery-images')

    // supprimer les class existant
    gallery.classList.remove('column', 'mosaique')

    // ajouter le class selectionné
    gallery.classList.add(layout)
}

// ----- DES IMAGES POUR LES ICONES DES BOUTTONS ---------
function chargerImages() {
    const columnBtn = document.getElementById("buttonColumn")
    const mosaiqueBtn = document.getElementById("buttonMosaic")
    const ajouter = document.getElementById("buttonAjouterGallery")

    if (columnBtn) {
        columnBtn.innerHTML = `<img class="layout-icon" src="images/columns.png" alt="Colonne" class="layout-icon">`
    }

    if (mosaiqueBtn) {
        mosaiqueBtn.innerHTML = `<img class="layout-icon" src="images/mosaic.png" alt="Mosaïque" class="layout-icon">`
    }
    if (ajouter) {
        ajouter.innerHTML = `<img class="layout-icon" src="images/plus.png" alt="Mosaïque" class="layout-icon">`
    }
}
chargerImages()


// ------- FOCNTIONNEMENT DE BOUTTON AJOUTER -----------
function ajouterDesImagesGaleery() {
    const form = document.getElementById("formPourLInputAjouter")

    if (!document.getElementById("imageAjoute")) {
        form.innerHTML = `
            <input type="file" id="imageAjoute" name="imageAjoute" accept="image/png, image/jpeg" />
            <button type="button" id="ajouterImageBtn">Ajouter l’image</button>
        `;

        // attendre jusqu'a la bouton est cliqué
        document.getElementById("ajouterImageBtn").addEventListener("click", () => {
            const imageInput = document.getElementById("imageAjoute")
            const file = imageInput.files[0]
            if (!file) {
                alert("Veuillez sélectionner une image.")
                return
            }
            const reader = new FileReader()
            reader.onload = function (event) {
                const gallery = document.querySelector(".gallery-images")

                const imageWrapper = document.createElement("div")
                imageWrapper.classList.add("image-wrapper")

                const img = document.createElement("img")
                img.src = event.target.result
                img.alt = "image ajoutée"
                img.classList.add("img-gallery")

                const deleteBtn = document.createElement("button")
                deleteBtn.innerHTML = `<img class="closeIcon" src="images/close.png" alt="Mosaïque" class="layout-icon">`
                deleteBtn.classList.add("delete-button")
                deleteBtn.addEventListener("click", () => {
                    gallery.removeChild(imageWrapper)
                })

                imageWrapper.appendChild(img)
                imageWrapper.appendChild(deleteBtn)
                gallery.appendChild(imageWrapper)
            }

            reader.readAsDataURL(file)
        })
    }
}

let currentIndex = 0;

function ajouterLesElementDansLeSlides() {
    const slidesContainer = document.querySelector(".slides");
    const divCarousel = document.querySelector(".carousel");

    // Clear existing slides
    slidesContainer.innerHTML = "";

    // Create all slides
    publiciteItems.forEach((item, index) => {
        const divSlide = document.createElement("div");
        divSlide.classList.add("slide");

        const img = document.createElement("img");
        img.src = "images/" + item.img;
        img.alt = item.h3;
        img.classList.add("imgDansLesSlides")

        const h3 = document.createElement("h3");
        h3.textContent = item.h3;

        const p = document.createElement("p");
        p.textContent = item.p;

        divSlide.appendChild(img);
        divSlide.appendChild(h3);
        divSlide.appendChild(p);

        slidesContainer.appendChild(divSlide);
    });

    // creation des bouttons
    const prevBtn = document.createElement("button");
    prevBtn.id = "prev-btn";
    prevBtn.textContent = "←";
    prevBtn.classList.add("carousel-btn");

    const nextBtn = document.createElement("button");
    nextBtn.id = "next-btn";
    nextBtn.textContent = "→";
    nextBtn.classList.add("carousel-btn");

    // Append buttons
    divCarousel.appendChild(prevBtn);
    divCarousel.appendChild(nextBtn);

    
    prevBtn.addEventListener("click", () => {
        showSlide((currentIndex - 1 + publiciteItems.length) % publiciteItems.length);
    });

    nextBtn.addEventListener("click", () => {
        showSlide((currentIndex + 1) % publiciteItems.length);
    });
}

function showSlide(index) {
    const slides = document.querySelectorAll(".slide");
    slides.forEach((slide, i) => {
        slide.style.display = i === index ? "block" : "none";
    });
    currentIndex = index;
}


document.addEventListener("DOMContentLoaded", () => {
    ajouterLesElementDansLeSlides();
});