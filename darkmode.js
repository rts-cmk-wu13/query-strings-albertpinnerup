let rootElm = document.documentElement;
let switchElm = document.querySelector("#switch");
let isDarkMode = readFromLocalStorage("isDarkMode")
let userPref =  window.matchMedia("(prefers-color-scheme: dark)").matches
let moon = document.querySelector(".fa-moon");
let sun = document.querySelector(".fa-sun")
let darkTxt = document.querySelector(".dark")
let ligthTxt = document.querySelector(".light")


let darkState = null

if(isDarkMode == null || isDarkMode == undefined) {
    darkState = userPref;
} else {
    darkState = isDarkMode;
}

if (darkState) {
    switchElm.checked = true
    rootElm.setAttribute("data-dark", switchElm.checked)
    moon.style.display = "none"
    ligthTxt.style.display = "inline"
    darkTxt.style.display = "none"
} else {
    switchElm.checked = false
    rootElm.setAttribute("data-dark", switchElm.checked)
    sun.style.display = "none"
    darkTxt.style.display = "inline"
    ligthTxt.style.display = "none"
}

console.log(switchElm);




switchElm.addEventListener("change", () => {
    console.log(switchElm.checked);
    if (switchElm.checked) {
        rootElm.setAttribute("data-dark", switchElm.checked)
        saveTolocalStorage("isDarkMode", switchElm.checked)
        moon.style.display = "none"
        sun.style.display = "inline"
        darkTxt.style.display = "none"
        ligthTxt.style.display = "inline"
    } else {
        saveTolocalStorage("isDarkMode", switchElm.checked)
        rootElm.setAttribute("data-dark", switchElm.checked)
        sun.style.display = "none"
        moon.style.display = "inline"
        darkTxt.style.display = "inline"
        ligthTxt.style.display = "none"
    } 
})
console.log(rootElm);

