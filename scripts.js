var equ=" ";
var ul = document.querySelector("ul");

function btnIN(btnVal) {
    equ=document.getElementById("display").value; 
    var z="";
    equ+=btnVal
    if(btnVal == "(") {
        z=equ.charAt(equ.indexOf("(")-1);
        if(z=="0"||z=="1"||z=="2"||z=="3"||z=="4"||z=="5"||z=="6"||z=="7"||z=="8"||z=="9"){
            equ=equ.substring(0,equ.indexOf('('));
            btnVal="*(";
            equ+=btnVal;
        }
    }
    document.getElementById("display").value=equ;
} 

function solve() { 
    let equ = document.getElementById("display").value;
    let ans = eval(equ);
    if(equ.includes("/0")){ans="ERR: cannot divide by 0";}
    document.getElementById("display").value = " " + ans;
    createHistoryElement(equ, ans);
} 
  
function clr() {
    equ=" "; 
    document.getElementById("display").value = equ;
}

function backSpace(){
    equ=document.getElementById("display").value;
    if(equ!==" "){
        equ=equ.substring(0,equ.length-1);
        document.getElementById("display").value = equ;
    }
}

function createHistoryElement(equ, ans){
    var li = document.createElement("li");
    var dBtn = document.createElement("button");
    var eBtn = document.createElement("button");
    var aBtn = document.createElement("button");
    eBtn.setAttribute("value", equ);
    aBtn.setAttribute("value", ans);
    li.appendChild(eBtn);
    li.appendChild(document.createTextNode("="));
    li.appendChild(aBtn);
    li.appendChild(dBtn);
    dBtn.setAttribute("id","btnXli");
    eBtn.setAttribute("id","li");
    aBtn.setAttribute("id","li");
    dBtn.appendChild(document.createTextNode("X"));
    eBtn.appendChild(document.createTextNode(equ));
    aBtn.appendChild(document.createTextNode(ans));
    ul.appendChild(li);
    document.getElementById("noH").innerHTML="";
    dBtn.addEventListener("click", deleteHistoryItem);
    eBtn.addEventListener("click",()=>{postHistory(equ);});
    aBtn.addEventListener("click",()=>{postHistory(ans);});

    function deleteHistoryItem(){
        li.remove();
        replaceHistoryMarker();
    }
}

function replaceHistoryMarker(){
    var liCount = (document.getElementById("history").getElementsByTagName("li")).length;
    if(liCount==0){document.getElementById("noH").innerHTML="No History";}
}

function clearHistory(){
    while(ul.firstChild){ul.removeChild(ul.firstChild);}
    document.getElementById("noH").innerHTML="No History";
}

function postHistory(historyElement){
    historyElement=historyElement.toString();
    if(historyElement.substring(0,1) !== " "){historyElement=" "+historyElement;}
    clr();
    document.getElementById("display").value=historyElement;
}




