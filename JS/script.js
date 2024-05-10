//buttons
btnNum =document.getElementsByClassName("btnNum");
btnResult=document.getElementById("btnResult");
const display=document.getElementById("display");
btnCanc=document.getElementById("btnCanc");
//variables
var inputOne=0;
var inputTwo=0;
var isFirst=true;
var op="";
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


//aggiunge valori alla stringa
function appendToDisplay(input){
    display.value+=input;
}

//cancella la stringa
function clearDisplay(){
    display.value="";
}

//operazioni
function operation(operation){
    if (isFirst){
        inputOne=parseInt(display.value);
        clearDisplay()
        isFirst=false;
        op=operation;
        console.log("input= "+inputOne+" 1st "+isFirst+" operazione: "+op);
    }
}

//
//resetta tutto
function canc(){
    clearDisplay();
    isFirst=true;
    op="";
    console.log("input= "+inputOne+" 1st "+isFirst+" operazione: "+op);
}