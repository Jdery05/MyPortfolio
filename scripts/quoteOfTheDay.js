var dailyQuote = document.querySelector("#quote-line")
var quoteCitation = document.querySelector("#citation")
var image = document.querySelector("#carousel-image")
var textOfImage = document.querySelector("#carousel-caption")

var imageList = [
    "images/Checkers.png",
    "images/Checkers-code.png",
    "images/Checkers-code2.png"
]

var textList = [
    "A simple program I made that lets you play Checkers! Here is what it looks like.",
    "An excerpt of code from the checkers program. Mostly setup here.",
    "Another code excerpt, this one is the movement logic, or part of it!"
]



fetch('https://animechan.xyz/api/random').then(response => { 
    response.json().then(quote => {
        console.log(quote);
        var obj = quote
        console.log(Object.keys(obj));
        dailyQuote.textContent = quote.quote;
        quoteCitation.textContent = "-" + quote.character;
    })
})


var i = 1;
setInterval(() => {
    image.src = imageList[i];
    textOfImage.textContent = textList[i];
    i++;
    if(i > imageList.length - 1){
        i = 0;
    }

}, 5000);