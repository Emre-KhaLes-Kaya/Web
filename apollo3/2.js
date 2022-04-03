var buton=document.getElementById("btn");
var c1=document.getElementsByClassName("card1");
eventListeners();
function eventListeners(){
    buton.addEventListener("click",boom);
}
function boom(){
    window.open('https://en.wikipedia.org/wiki/Desert', '_blank');
};
