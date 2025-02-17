let search = window.location.search;
let params = new URLSearchParams(search);
let id = params.get("id");

fetch(`/data/${id}.json`)
    .then(response => response.json())
    .then(data => {
        let sectionElm = document.createElement("section")
        sectionElm.classList.add("details")

        sectionElm.innerHTML = `
        
        `
    })