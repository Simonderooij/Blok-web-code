/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console':0*/

var button = document.querySelector('button');
var formulier = document.querySelector('form div:nth-child(2)');

button.addEventListener('click', function() {
formulier.classList.toggle("closedformulier");
});

var searchbar = document.querySelector('input:nth-child(1)');
var searchbutton = document.querySelector('input:nth-child(5)');

searchbutton.addEventListener('click', function(){
   if (searchbar.value == 0) {
       searchbar.classList.toggle("errors");
   }
});

var download1 = document.querySelector("section:nth-of-type(1) article:nth-of-type(1) div i");
var download1popup = document.querySelector("section:nth-of-type(1) article:nth-of-type(1) div span");
download1.addEventListener('click', function(){
    download1.style.color = "lime";
            download1popup.classList.remove("show");
    
});
download1.addEventListener('dblclick', function(){
    download1.style.color = "red";
    download1popup.style.marginLeft = "2.5em";
            download1popup.classList.add("show");
});

var download2 = document.querySelector("section:nth-of-type(1) article:nth-of-type(2) div i");
var download2popup = document.querySelector("section:nth-of-type(1) article:nth-of-type(2) div span");
download2.addEventListener('click', function(){
    download2.style.color = "lime";
            download2popup.classList.remove("show");
    
});
download2.addEventListener('dblclick', function(){
    download2.style.color = "red";
    download2popup.style.marginLeft = "2.5em";
            download2popup.classList.add("show");
});

var download3 = document.querySelector("section:nth-of-type(1) article:nth-of-type(3) div i");
var download3popup = document.querySelector("section:nth-of-type(1) article:nth-of-type(3) div span");
download3.addEventListener('click', function(){
    download3.style.color = "lime";
            download3popup.classList.remove("show");
    
});
download3.addEventListener('dblclick', function(){
    download3.style.color = "red";
    download3popup.style.marginLeft = "2.5em";
            download3popup.classList.add("show");
});

var download4 = document.querySelector("section:nth-of-type(1) article:nth-of-type(4) div i");
var download4popup = document.querySelector("section:nth-of-type(1) article:nth-of-type(4) div span");
download4.addEventListener('click', function(){
    download4.style.color = "lime";
            download4popup.classList.remove("show");
    
});
download4.addEventListener('dblclick', function(){
    download4.style.color = "red";
    download4popup.style.marginLeft = "2.5em";
            download4popup.classList.add("show");
});

var sterimagerecept = document.querySelector(".starsrecept");
var sterbuttonrecept = document.querySelector('.sterknoprecept');
var popup1 = document.querySelector("section:nth-of-type(1) article:nth-of-type(1) span");
var popup2 = document.querySelector("section:nth-of-type(1) article:nth-of-type(2) span");
var popup3 = document.querySelector("section:nth-of-type(1) article:nth-of-type(3) span");
var popup4 = document.querySelector("section:nth-of-type(1) article:nth-of-type(4) span");


sterbuttonrecept.addEventListener('click', function(){
    var selectrecept = document.querySelector('.sterselectrecept').value;  
    if(selectrecept >= 1){
    sterimagerecept.setAttribute("src","images/" + selectrecept + "stars.jpg");
        popup1.classList.remove("show");
        popup1.classList.add("popup");
    }
    else {
        sterimagerecept.setAttribute("src","images/" + selectrecept + "stars.jpg");
        popup1.classList.toggle("show");
    }
});


var sterimagejob = document.querySelector(".starsjob");
var sterbuttonjob = document.querySelector('.sterknopjob');


sterbuttonjob.addEventListener('click', function(){
     var selectjob = document.querySelector('.sterselectjob').value; 
     if(selectjob >= 1){
    sterimagejob.setAttribute("src","images/" + selectjob + "stars.jpg");
         popup2.classList.remove("show");
        popup2.classList.add("popup");
     }
    else {
        sterimagejob.setAttribute("src","images/" + selectjob + "stars.jpg");
        popup2.classList.toggle("show");
    }
});


var sterimagealzheimer = document.querySelector(".starsalzheimer");
var sterbuttonalzheimer = document.querySelector('.sterknopalzheimer');


sterbuttonalzheimer.addEventListener('click', function(){
     var selectalzheimer = document.querySelector('.sterselectalzheimer').value; 
     if(selectalzheimer >= 1){
    sterimagealzheimer.setAttribute("src","images/" + selectalzheimer + "stars.jpg");
         popup3.classList.remove("show");
        popup3.classList.add("popup");
     }
    else {
        sterimagealzheimer.setAttribute("src","images/" + selectalzheimer + "stars.jpg");
        popup3.classList.toggle("show");
    }
});


var sterimageinterview = document.querySelector(".starsinterview");
var sterbuttoninterview = document.querySelector('.sterknopinterview');


sterbuttoninterview.addEventListener('click', function(){
        var selectinterview = document.querySelector('.sterselectinterview').value; 
     if(selectinterview >= 1){
    sterimageinterview.setAttribute("src","images/" + selectinterview + "stars.jpg");
         popup4.classList.remove("show");
        popup4.classList.add("popup");
     }
    else {
        sterimageinterview.setAttribute("src","images/" + selectinterview + "stars.jpg");
        popup4.classList.toggle("show");
    }
});
