// element targeted by id
var result=document.getElementById("text")
result.innertext="the text is changed"
console.log(result)
//element is targeted bt name 
function clikme(){
    var result=getElementsbyTagName("h1")
    result.innertext="this is new heading";
}
//element targeted by class
var result=document.getElementsByClassName("box")
result.innerText="hello word";
console.log(result);


function clickedme(){
    var result=document.getElementById("textchanged")
    result.innerText="Hello word"
    console.log|(result)
}

function changedirection(){
 var result=document.getElementById("box container").style.flexDirection="column;
 console.log(result)
}


function clikedme(){
    document.getElementById("helllo word").style.color="red"
}

function replace(){
    document.getElementById("textchanging").innerText="welcome to Acadamy"
}


function clock(){
    var hours=document.getElementById("time2");
    var minutes=document.getElementById("time3");
    var seconds=document.getElementById("time4");
    var am=document.getElementById("time5");
    var time=new Date();

    var hrs=time.getHours();
    var mins=time.getminutes();
    var sec=time.getSeconds();
    var am_pm="Am"

    if(hrs==0){
        hrs=12;
    }

    if(hrs>12){
        hrs=hrs-12;
        am_pm="pm";
    }    
     if(hrs<10){
         hrs=0+hrs;
     }
     
     if(mins<10){
         hrs=0+hrs;
     }

    if(sec<10){
        hrs=0+hrs;
    } 
    
}
hours.innertext=hrs;
minutes.innertext=mins;
seconds.innertext=sec;
am.innertext="pm";
}
setinterval(clock,1000);

function clickmetoo(){
    var result=document.getElementById("selected")
    var result1=result.ariaValue;
    document.getElementById("submitted").innertext=result1
}
