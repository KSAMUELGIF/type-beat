

let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');

const quotes = [{
    quote: `"It takes two people to ruin a relationship, so blame her and
    her mother for raisng her that way."`,
    person: ` Future `  
}, {
    quote: `"Trust me, at the top it isn't lonely."`,
    person: ` Drizzy Drake `  
}, {
    quote: `"If young metro don't trust
    you, am gon shoot you."`,
    person: ` Future `  
}, {
    quote: `"Can't diss my skater flow."`,
    person: ` Nemzzz `  
}, {
    quote: `"who told you bad man don't dance?."`,
    person: ` J.hus `  
}, {
    quote: `"The early bird gets the thickest gyal."`,
    person: ` Abraham Lincoln `  
}, {
    quote: `"I like the ones that get the bag but don't even want to brag."`,
    person: ` Nemzzz `  
}, {
    quote: `"Life is like toilet paper, you're either on a roll or
    taking shit from some asshole."`,
    person: ` Drizzy Drake `  
}, ];

btn.addEventListener('click', function(){

    let random = Math.floor(Math.random() * quotes.length);

    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;

})

