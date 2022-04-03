/*function process1(callback){
    setTimeout(function(){
        console.log("Process1");
        callback();
    },3000);
}
function process2(){
    setTimeout(function(){
        console.log("Process2");
    },2000);
}
process1(process2);*/
//-------------------------------------------------------------

const langs= ["python","java","c++"];
function addlang(lang,callback){
    setTimeout(function(){
        langs.push(lang);
        console.log("Added");
        callback();
    },2000);
}
function getalllangs(){
    setTimeout(function(){
        langs.forEach(function(lang){
            console.log(lang);
        });
    },1000);
}
addlang("javascript",getalllangs);
