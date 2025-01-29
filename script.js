// alert("Welcome, Do Some Mathematical Calculation");


const paragraphs = document.querySelectorAll('.input-number-feilds p');
const input = document.querySelector(".input");
let string = "";

paragraphs.forEach(function(p) {
    p.addEventListener('click', function() {
      let container = document.querySelector('.container');
      container.innerHTML = "";
        const text = this.innerText;
      //   console.log(text);
      
       string = string + text;
       input.value = string;
    });
});

let clearButton  = document.querySelector(".clear-botton");
clearButton.addEventListener('click', ()=>{
    let container = document.querySelector(".container");
    string = "";
    input.value = "";
    container.innerHTML = "";
    
});

let addtionButton = document.querySelector('.Addition');
addtionButton.addEventListener('click', ()=>{
    let additionText  = input.value;
     if(!additionText.includes("+")){
       alert("the + operator is not present ");
       return 0;
     }
    let additionArray = additionText.trim().split("+");
    let result = 0;
    for(let i=0;i<additionArray.length;i++){
        result = result + parseInt(additionArray[i]);
    }
    
    let para = document.createElement("p");
     
    let textNode = document.createTextNode(`Addition: ${result}`);

    para.append(textNode);
    
    let container = document.querySelector(".container");
    container.innerText = "";
    container.appendChild(para);
     
    string = "";
})

let Substraction = document.querySelector('.Substraction');
Substraction.addEventListener('click', ()=> {
    let substractioText = input.value;
    if(!substractioText.includes("-")){
        alert("the - operator is not present ");
        return 0;
      }
    let substractionArray = substractioText.trim().split("-");
    let firstNumber = parseInt(substractionArray[0]);
    let result = firstNumber;
    for(let i=1;i<substractionArray.length;i++){
         result = result - parseInt(substractionArray[i]);
    }
   
    let para = document.createElement("p");
    para.innerText = `Substraction : ${result}`;
    
    let container = document.querySelector('.container');
    container.appendChild(para);

    string = "";
})

let Multiplication = document.querySelector('.Multiplication');
Multiplication.addEventListener('click', ()=> {
    let multiplicationText = input.value;
    if(!multiplicationText.includes("*")){
        alert("the * operator is not present ");
        return 0;
      }
    let multiplicationArray = multiplicationText.trim().split("*");
    let firstNumber = parseInt(multiplicationArray[0]);
    let result = firstNumber;
    for(let i=1;i<multiplicationArray.length;i++){
         result = result * parseInt(multiplicationArray[i]);
    }

    let para = document.createElement("p");
    para.innerText = `Multiplication : ${result}`;
    
    let container = document.querySelector('.container');
    container.appendChild(para);

    string = "";
})

let Division = document.querySelector('.Division');
Division.addEventListener('click', ()=> {
    let divisionText = input.value;
    if(!divisionText.includes("/")){
        alert("the - operator is not present ");
        return 0;
      }
    let divisionArray = divisionText.trim().split("/");
    let firstPart = parseInt(divisionArray[0]);
    let secondPart = parseInt(divisionArray[1]);

    let result = Math.floor(firstPart / secondPart);
    console.log(result);

    let para = document.createElement("p");
    para.innerText = `Division : ${result}`;
    
    let container = document.querySelector('.container');
    container.appendChild(para);

    string = "";
})









