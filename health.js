
    // ****** OPAN CLOSS BUTTON ******

let opanList = document.querySelector("#opanList");
let clossList = document.querySelector("#clossList");
let nav = document.querySelectorAll(".nav");
opanList.addEventListener('click', ()=>{
    nav.forEach(nav_el=>nav_el.classList.add('visible'));
})
clossList.addEventListener('click', ()=>{
    nav.forEach(nav_el=>nav_el.classList.remove('visible'));
})