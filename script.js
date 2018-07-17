var color1 = document.getElementById("first");
var color2 = document.getElementById("second");
var css = document.querySelector("h3");
var body = document.getElementById("background");
console.log(color1);
console.log(color2);
console.log(css);

color1.addEventListener("input", function(){

	body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")"; 

})

color2.addEventListener("input", function(){

	body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")"; 

})