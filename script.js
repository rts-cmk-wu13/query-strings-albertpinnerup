const root = document.querySelector("#root");

let favorites = readFromLocalStorage("favorites") || []


fetch("/data/destinations.json")
    .then(response => response.json())
    .then(data => {

        let sectionElm = document.createElement("section")
        sectionElm.classList.add("destinations")

        sectionElm.innerHTML = 
        data.destinations.map(destination => `
            <div class="destinations__card">
                <div class="destinations__img">
                    <img src="img/${destination.image}">
                </div>
                <div class="destinations__more">
                    <button class="destinations__favorite ${favorites.includes(destination.id.toString()) ? "favorited" : ""}" data-favid="${destination.id}"><i class="fa-solid fa-heart"></i></button>
                    <a href="details.html?id=${destination.id}" class="destinations__details">MORE</a>
                </div>
            </div>
        `
        ).join("")

console.log( sectionElm.querySelectorAll(".destinations__favorite"));


        sectionElm.querySelectorAll(".destinations__favorite").forEach(function(button) {

            button.addEventListener("click", function(e) {
                let currentId = e.target.dataset.favid;

                console.log(e.target.getAttribute("data-favid"));
                
                
                if (favorites.includes(currentId)) {
                    let newFavorites = favorites.filter(id => id != currentId);
                    favorites = newFavorites;
                    e.target.classList.remove("favorited")
                    console.log(favorites);
                } else {
                    favorites.push(currentId);
                    e.target.classList.add("favorited")
                    console.log(favorites);
                }
                saveTolocalStorage("favorites", favorites); 
            })
        })

        root.append(sectionElm)
    })


