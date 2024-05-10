//buttons
btnNum =document.getElementsByClassName("btnNum");
btnResult=document.getElementById("btnResult");
btnSum=document.getElementById("btnSum");
btnMin=document.getElementById("btnMin");
btnPer=document.getElementById("btnPer");
btnDiv=document.getElementById("btnDiv");
const display=document.getElementById("display");
btnCanc=document.getElementById("btnCanc");
//variables
var inputOne=String;
var inputTwo=String;
var isFirst=true;

// btnNum.addEventListener('click',addNum(btnNum))
// function addNum(numb){
//     if(isFirst){
//         inputOne=inputOne+numb;
//         console.log(inputOne);
//     }else{
//         inputTwo.push(btnNum.value);
//         console.log(inputTwo);
//     }
// }

function appendToDisplay(input){
    display.value+=input;
}
function clearDisplay(){
    display.value=="";
}