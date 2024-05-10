//buttons
btnNum =document.getElementsByClassName("btnNum");
const btnResult=document.getElementById("btnResult");
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

//btnResult.addEventListener('click',result());

function result(){
    let sum=0;
    console.log(isFirst+op);
    if(isFirst){
        console.log(isFirst+op);
        display.value="press c"
    }else{
        
        inputTwo=parseInt(display.value);
        console.log(isFirst+op+inputTwo);
        switch(op){
            case 'plus':
                sum=inputOne+inputTwo;
                display.value=sum;
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
                if(inputTwo==0){
                    display.value="impossibru";
                }else{
                    sum=inputOne/inputTwo;
                    display.value=sum;
                    break;
                }
                
        }

    }

}