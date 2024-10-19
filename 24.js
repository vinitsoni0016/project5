const mainButton=document.querySelector("button");
//console.log(mainButton);
const body =document.body;
const currentColor =document.querySelector(".current-color");
console.log(currentColor);

function randomColorGenerator(){
     const red =Math.floor(Math.random()*256);
     const green =Math.floor(Math.random()*256);  
     const blue =Math.floor(Math.random()*256);
     const randomcolor=`rgb(${red},${green},${blue})`;
     return randomcolor;
}
 mainButton.addEventListener("click",()=>{
    const randomcolor =randomColorGenerator();
   // console.log(randomcolor);
    body.style.backgroundColor=randomcolor;
    currentColor.textContent=randomcolor;
 })