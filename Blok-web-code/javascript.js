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




var sterimagerecept = document.querySelector(".starsrecept");
var sterbuttonrecept = document.querySelector('.sterknoprecept');


sterbuttonrecept.addEventListener('click', function(){
     var selectrecept = document.querySelector('.sterselectrecept').value;   
    sterimagerecept.setAttribute("src","images/" + selectrecept + "stars.jpg");
});


var sterimagejob = document.querySelector(".starsjob");
var sterbuttonjob = document.querySelector('.sterknopjob');


sterbuttonjob.addEventListener('click', function(){
     var selectjob = document.querySelector('.sterselectjob').value;   
    sterimagejob.setAttribute("src","images/" + selectjob + "stars.jpg");
});


var sterimagealzheimer = document.querySelector(".starsalzheimer");
var sterbuttonalzheimer = document.querySelector('.sterknopalzheimer');


sterbuttonalzheimer.addEventListener('click', function(){
     var selectalzheimer = document.querySelector('.sterselectalzheimer').value;   
    sterimagealzheimer.setAttribute("src","images/" + selectalzheimer + "stars.jpg");
});


var sterimageinterview = document.querySelector(".starsinterview");
var sterbuttoninterview = document.querySelector('.sterknopinterview');


sterbuttoninterview.addEventListener('click', function(){
     var selectinterview = document.querySelector('.sterselectinterview').value;   
    sterimageinterview.setAttribute("src","images/" + selectinterview + "stars.jpg");
});
