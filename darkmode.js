let rootElm = document.documentElement;
let switchElm = document.querySelector("#switch");
let isDarkMode = readFromLocalStorage("isDarkMode")
let userPref =  window.matchMedia("(prefers-color-scheme: dark)").matches
let isItChecked = rootElm.setAttribute("data-dark", switchElm.checked)

let darkState = null

if(isDarkMode == null || isDarkMode == undefined) {
    darkState = userPref;
} else {
    darkState = isDarkMode;
}

if (darkState) {
    switchElm.checked = true
    isItChecked
} else {
    switchElm.checked = false
    isItChecked
}

switchElm.addEventListener("change", () => {
    if (switchElm.checked) {
        isItChecked
        saveTolocalStorage("isDarkMode", switchElm.checked)
    } else {
        saveTolocalStorage("isDarkMode", switchElm.checked)
        isItChecked
    } 
})
console.log(rootElm);

