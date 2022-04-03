let i =0;
let value=setInterval(function(){
    i++;
    console.log("Number:",i);
},1000);
document.getElementById("btn").addEventListener("click",function(){
    clearInterval(value);
});