var sum=0
function lk40(){
    sum=sum+40;
}
function lk30(){
    sum=sum+30;
}
function lk20(){
    sum=sum+20;
}
function lk10(){
    sum=sum+10;
}
function display(){
    switch(sum){
        case 50:document.getElementById("lk").style.backgroundColor="red";
                document.getElementById("lk").innerHTML="RED";
        break;
        case 60:document.getElementById("lk").innerHTML="BLUE";
                document.getElementById("lk").style.backgroundColor="blue";
        break;
        case 70:document.getElementById("lk").innerHTML="YELLOW";
                document.getElementById("lk").style.backgroundColor="yellow";
        break;
        case 100:document.getElementById("lk").innerHTML="PINK";
                 document.getElementById("lk").style.backgroundColor="pink";
        break;
        case 30:document.getElementById("lk").innerHTML="WHITE";
                document.getElementById("lk").style.backgroundColor="white";
        break;
       case 40:document.getElementById("lk").innerHTML="GREEN";
               document.getElementById("lk").style.backgroundColor="green";
        break;
    }
}
