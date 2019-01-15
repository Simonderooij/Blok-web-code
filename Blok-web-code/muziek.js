/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console':0*/
var button = document.querySelector('button');

button.addEventListener('click', function () {
new Audio('images/Aurora.mp3').play();
});