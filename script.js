var css = document.querySelector(".copy-code-input");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.querySelector(".gradient");
var copyButton = document.querySelector(".copy-css-button");

function setGradient()
{
    body.style.background = "linear-gradient(60deg, " + color1.value + "," + color2.value + ")fixed";
    css.value = "background : " + body.style.background + ";";
}

setGradient();
color1.addEventListener("input",setGradient);
color2.addEventListener("input",setGradient); 

//RANDOM GENERATOR
let hexString = "0123456789abcdef";
let generateBtn = document.getElementById("generate-btn");

let randomColor = () => {
    let hexCode = "#";
    for( i=0; i<6; i++){
        hexCode += hexString[Math.floor(Math.random() * hexString.length)];
    }
    return hexCode;
}

let generateGradient = () => {
    let colors1 = randomColor();
    let colors2 = randomColor();
    let angle = Math.floor(Math.random() * 360);

    color1.value = colors1;
    color2.value = colors2;
    
    body.style.background = `linear-gradient(${angle}deg, ${colors1}, ${colors2})fixed`;
    css.value = "background : " + body.style.background + ";";
}

generateBtn.addEventListener("click", generateGradient); 
// window.onload = generateGradient;

//COPY CODE
let copyGradient = () => {
    const text = css.value;
    css.select();
    navigator.clipboard.writeText(text);

    css.value = "Copied !";
    setTimeout(() => (css.value = text), 1000);
}

copyButton.addEventListener("click", copyGradient); 
css.addEventListener("focus", () => css.select());
