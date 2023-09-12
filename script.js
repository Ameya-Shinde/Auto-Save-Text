const textarea = document.getElementById("myTextarea");
const clrBtn = document.getElementById("clrBtn");


function saveToLocalStorage() {
    localStorage.setItem("savedText", textarea.value);
}

if (localStorage.getItem("savedText")) {
    textarea.value = localStorage.getItem("savedText");
}

textarea.addEventListener("input", saveToLocalStorage);

clrBtn.addEventListener("click", ()=>{
    localStorage.removeItem("savedText");
    textarea.value = "";
});