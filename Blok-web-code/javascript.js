/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console':0*/

var button = document.querySelector('button');
var form = document.querySelector('form');
button.addEventListener('click', function () {


    if (form.style.display === "none") {
        form.style.display = "block";
    } else {
        form.style.display = "none";
    }

});
