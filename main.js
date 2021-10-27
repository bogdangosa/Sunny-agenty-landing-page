let Hamburger = document.getElementById("hamburger");
let Nav = document.getElementById("nav");

Hamburger.addEventListener('click',()=>{
    if(Nav.style.opacity=="0")Nav.style.opacity="1";
    else Nav.style.opacity="0";
})