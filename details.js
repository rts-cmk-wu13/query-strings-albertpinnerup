let search = window.location.search;
let params = new URLSearchParams(search);
let id = params.get("id");

const root = document.querySelector("#root");


// let favorite = readFromLocalStorage("favorites") 

fetch(`/data/${id}.json`)
    .then(response => response.json())
    .then(data => {
        let sectionElm = document.createElement("section")
        sectionElm.classList.add("details")

        sectionElm.innerHTML = `
            <div class="details__img">
                <img src="img/${data.image}" alt="">
                <button class="details__favorite"><i class="fa-solid fa-heart" data-favid="${data.id}"></i> <span class="details__favorite--text">FAVORIT</span></button>
            </div>
            <section class="details__info">
                <h3 class="details__destination">${data.destination}</h3>
                <h2 class="details__title">${data.title}</h2>
                <p class="details__subtitle">${data.subtitle}</p>
                <p class="details__text">${data.text}</p>
                <ul class="details__facilities">

                </ul>
            </section>

        `;

        let facilitesList = sectionElm.querySelector(".details__facilities")

        data.facilities.forEach(facility => {
            let li = document.createElement("li");
            li.textContent = facility;
            facilitesList.appendChild(li)
        });
        
        let favoriteIcon = sectionElm.querySelector(".details__favorite .fa-heart");
        let currentId = favoriteIcon.dataset.favid

        if (favorites.includes(currentId)) {
            favoriteIcon.classList.add("favorited")
        } 
        
        sectionElm.querySelector(".details__favorite").addEventListener("click", () => {

            if (favorites.includes(currentId)) {
                newFavorites = favorites.filter(id => id != currentId)
                favorites = newFavorites
                favoriteIcon.classList.remove("favorited")
            } else {
                favorites.push(currentId)
                favoriteIcon.classList.add("favorited")
            }
            saveTolocalStorage("favorites", favorites)
        })


        root.append(sectionElm)
    })