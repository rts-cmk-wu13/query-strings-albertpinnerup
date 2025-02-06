const body = document.querySelector("body");

let root = document.createElement("div");
root.id = "root"

fetch("/data/destinations.json")
    .then(response => response.json())
    .then(data => {

        root.innerHTML = `
        
        <main>
            <section class="destinations">
                ${data.destinations.map(destination => ` 
                <a href="details.html?id=${destination.id}" class="destinations__wrapper">
                    <div class="destinations__card">
                        <div class="destinations__img">
                            
                        </div>
                    </div>
                </a>
                        `
        ).join("")}
            </section>
        </main>
    `

        body.append(root)
    })


