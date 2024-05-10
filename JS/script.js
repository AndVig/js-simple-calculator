//buttons
btnNum =document.getElementsByClassName("btnNum");
const btnResult=document.getElementById("btnResult");
const display=document.getElementById("display");
btnCanc=document.getElementById("btnCanc");
//variables
var inputOne=0;
var inputTwo=0;
let sum=0;
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

btnResult.addEventListener('click',result());

function result(){
    if(isFirst){
        display.value="Inserire operatore prima, ricomincia da capo"
    }else{
        inputTwo=parseInt(display.value);
        switch(op){
            case 'plus':
                sum=inputOne+inputTwo;
                break;
            case 'min':
                sum=inputOne-inputTwo;
                display.value=sum;
                break;
            case 'per':
                sum=inputOne*inputTwo;
                display.value=sum;
                break;
            case 'div':
                sum=inputOne/inputTwo;
                display.value=sum;
                break;
        }

    }

}