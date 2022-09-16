const $ = require('jquery')
const sayHello = require("./say-hello");
const helloWorld = () => console.log("Hello World");

helloWorld();

$('#codeup').click(function() {
    alert('h2 with id "codeup" was clicked');
});

$('#codeup').hover(
    function() {
    $(this).css('background-color', "#FF0");
    },
    function() {
    $(this).css('background-color', "#FFF");
    }
);

console.log(sayHello());
