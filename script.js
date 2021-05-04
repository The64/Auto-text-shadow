let body = document.querySelector(".body");

let text = document.querySelector(".text");
let number = document.querySelector(".number");
let color = document.querySelector(".color");
let button = document.querySelector(".submit");

let h1 = document.querySelector(".h1");


button.addEventListener("click" , function () {

    let numberValue = parseInt(number.value);
    let colorValue = color.value;
    h1.textContent = text.value;
    let textStyle = "";

    for (let i = 1; i <= numberValue; i++) {

    
        if (i == numberValue) {
            textStyle += ` ${i}px ${i}px ${colorValue}`;
        }
        else{
            textStyle += ` ${i}px ${i}px ${colorValue},`; 
        }
        
        h1.style.textShadow = textStyle;
    }

    h1.style.webkitTextStrokeColor = colorValue;
 
})