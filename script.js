
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
    })
}

// -----   H1 ----
let displayElement = document.getElementById('h1-accueil')
let h1Content = 'Actualités des jeux vidéo'

// if element exists
if (displayElement) {
    displayElement.innerHTML = h1Content
}

// --- IINITIALISATION + REFRECH BUTTON ---
setupDropdown()
chargementDeLaPage()

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
            `
                feedContainer.appendChild(postElement)
            })
        })
        .catch(error => console.error('Erreur lors du chargement du JSON :', error)
        )
}


// ----- FORMULAIRE -----------
const h2Formulaire = document.getElementById("formulaire");
if (h2Formulaire){
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

// CHANGEMENT DES DONNES DANS LA PUB
let index = 0
let intervalId

function showSlide(i) {
    const slides = document.querySelectorAll(".slide")

    index += i;

    if (index >= slides.length) index = 0
    if (index < 0) index = slides.length - 1

    slides.forEach(slide => slide.style.display = "none")
    slides[index].style.display = "block"
}

function startCarousel() {
    intervalId = setInterval(() => {
        showSlide(1)
    }, 3500) // changer chaque 3 secondes
}

// AFICHAGE DES DONNES DANS LA PUB
function ajouterLesElementDansLeSlides() {
    const slidesContainer = document.querySelector(".slides")

    // creation des elements dans le div slides
        publiciteItems.forEach((item, index) => {
        const divSlide = document.createElement("div")
        divSlide.classList.add("slide")

        const img = document.createElement("img")
        img.src = "images/" + item.img
        img.alt = item.h3
        img.classList.add("imgDansLesSlides")

        const h3 = document.createElement("h3")
        h3.textContent = item.h3

        const p = document.createElement("p")
        p.textContent = item.p

        const a = document.createElement("a")
        a.href = "#"
        a.textContent = "Visiter maintenant !"
        a.classList.add("href-pub")

        divSlide.appendChild(img)
        divSlide.appendChild(h3)
        divSlide.appendChild(p)
        divSlide.appendChild(a)

        if(slidesContainer) {
            slidesContainer.appendChild(divSlide)
        }
       

    })

    const allSlides = document.querySelectorAll(".slide")
    allSlides.forEach(slide => slide.style.display = "none")
    if (allSlides.length > 0) {
        allSlides[0].style.display = "block"
    }

    startCarousel();

}

ajouterLesElementDansLeSlides()

// ***************************       JEUX       *************************
//verifier que les elements existent avant les fetch
window.addEventListener("DOMContentLoaded", () => {
    const select = document.getElementById("difficulty")
    const label = document.getElementById("labelDifficulty")

    // 1. Define API URLs for each difficulty
    const apiUrls = {
        facile: "https://mocki.io/v1/11111111-aaaa-bbbb-cccc-111111111111",
        moyen: "https://mocki.io/v1/22222222-aaaa-bbbb-cccc-222222222222",
        difficile: "https://mocki.io/v1/33333333-aaaa-bbbb-cccc-333333333333"
    };

    // 2. Update label
    if (label) {
        label.textContent = "Choisissez le niveau :"
    }

    // 3. Manually add options
    if (select) {
        Object.keys(apiUrls).forEach(niveau => {
            const option = document.createElement("option")
            option.value = niveau
            option.textContent = niveau.charAt(0).toUpperCase() + niveau.slice(1)
            select.appendChild(option)
        });

        // 4. Add change event listener
        select.addEventListener("change", async () => {
            const selectedNiveau = select.value
            const url = apiUrls[selectedNiveau]

            try {
                const response = await fetch(url)
                const data = await response.json()
                console.log("Données du jeu sélectionné :", data)

                // 👉 You can now use data.nom, data.images, data.nbDePaires, etc.
            } catch (error) {
                console.error("Erreur lors du chargement des données :", error)
            }
        });
    }
});
window.addEventListener("DOMContentLoaded", () => {
    const select = document.getElementById("difficulty")
    const label = document.getElementById("labelDifficulty")

    // 1. Define API URLs for each difficulty
    const apiUrls = {
        facile: "https://mocki.io/v1/068f61c6-6b2c-4b6d-85dd-3e30281a019f",
        moyen: "https://mocki.io/v1/9463dec6-6f9d-4bf4-8baf-a607c3273510",
        difficile: "https://mocki.io/v1/bbfa819b-29f7-4847-9170-f921b099b83f"
    }

    // 2. Update label
    if (label) {
        label.textContent = "Choisissez le niveau :"
    }

    // 3. Manually add options
    if (select) {

        select.innerHTML = ""

        Object.keys(apiUrls).forEach(niveau => {
            const option = document.createElement("option")
            option.value = niveau
            option.textContent = niveau.charAt(0).toUpperCase() + niveau.slice(1)
            select.appendChild(option)
        })

        // 4. Add change event listener
        select.addEventListener("change", async () => {
            const selectedNiveau = select.value
            const url = apiUrls[selectedNiveau]

            try {
                const response = await fetch(url)
                const data = await response.json()
                console.log("Données du jeu sélectionné :", data)

                // 👉 You can now use data.nom, data.images, data.nbDePaires, etc.
            } catch (error) {
                console.error("Erreur lors du chargement des données :", error)
            }
        })
    }
})

