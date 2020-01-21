var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var horiz = document.querySelector(".horizontal");
/*
console.log(body);
console.log(color1);
console.log(color2);*/
//body.style.background="red"

color1.addEventListener("input", setGradient)
color2.addEventListener("input", setGradient)
horiz.addEventListener("change", setGradient)
function setGradient(){
    console.log(horiz.value);
    console.log(color1.value);
    console.log(color2.value);
    body.style.background="linear-gradient(to " +
    horiz.value + ", " +
    color1.value + ", " +
    color2.value + ")";

    css.textContent = body.style.background+ ";"
}

//setGradient();