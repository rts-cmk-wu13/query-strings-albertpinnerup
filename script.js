const body = document.querySelector("body");

let root = document.createElement("div");
root.id = "root"

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
                    <button class="destinations__favorite"><i class="fa-solid fa-heart"></i></button>
                    <a href="details.html?id=${destination.id}" class="destinations__details">MORE</a>
                </div>
            </div>
        `
        ).join("")

        let heart = document.querySelector(".destinations__favorite")

        console.log(heart);
        

        root.append(sectionElm)
        body.append(root)
    })


