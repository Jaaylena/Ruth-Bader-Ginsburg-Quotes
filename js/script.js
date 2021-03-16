/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * create an array of quotes 
***/
let randomQuote;
const quoteButton = document.getElementById('load-quote');
//create a variable that holds an array of quotes with sources and citation at least one has a tag
const ruthQuotes = [
  {Quote: "Don't be distracted by emotions like anger, envy, resentment. These just zap energy and waste time",
source: "Ruth Bader Ginsburg", citation: "My Own Words"},
  {Quote: "Woman will have achieved true equality when men share with them the responsibility of bringing up the next generation.",
source: "Ruther Bader Ginsburg", citation: "an interview with the New York City Bar Associations",
year: 2001},
  {Quote: "Fight for the things you care about, but do it in a way that will lead others to join you.",
source: "Ruther Bader Ginsburg", citation: "Luncheon at Harvard",
year: 2015},
{Quote:"If you want to be a true professional, you must do something outside yourself.",
source: "Ruther Bader Ginsburg", citation:"My own words", },
{Quote: "Real change, enduring change, happens one step at a time.", 
source: "Ruth Bader Ginsburg"}
];
//not sure how to create a tag. 

/***
 *  a function that pulls the above quotes at random
***/
function randomRuthQuote () {
  const quoteIndex = Math.floor(Math.random() * ruthQuotes.length);
  randomQuote = ruthQuotes[quoteIndex];
    return randomQuote;
}

/***
 * a `printQuote` function that selects each quote to display
***/
function printQuote () {
  let HTML = '';
  //call randomRuthQuote function
  randomRuthQuote(); 
  //display the quote from the array ruthQuotes using the randomRuthQuote function
  HTML += '<p class="quote">' + randomQuote.Quote;
  //display the source from the array ruthquotes using the randomRuthQuote function
  HTML += '<p class="source">' + randomQuote.source;
  //a conditional statement that checks if the quote includes a year 
  if(randomQuote.year) {
  HTML += '<span class="year">' + randomQuote.year + '</span>'; 
  }
  // a conditional statement that check if the quote includes source
  if(randomQuote.citation) {
  HTML += '<span class="citation">' + randomQuote.citation + '</span>';
  '</p>';
  }
  //displays the HTML in the quote box 
  document.getElementById('quote-box').innerHTML = HTML;
  changeBackgroundColor();
} 
  //creating a funtion that changes the background color when the button is clicked
  function changeBackgroundColor(){
    let randomRGB = [];
    const quoteBox = document.querySelector('.quote-box');
    for(let i = 0; i < 3; i++) {
      let randomValue = Math.floor(Math.random() * 256);
      randomRGB.push(randomValue);
    }
    quoteBox.style.backgroundColor = `rgb(${randomRGB[0]}, ${randomRGB[1]}, ${randomRGB[2]})`
  }

  function randomImg() {
    
  }

//create a variable that holds the setInterval timer for 20 seconds 
let timeOut = 10000;
let timer;
//creating a a function that automatically updates with a 2 second timing function
function startTimer() {
  timer = window.setInterval(printQuote, timeOut);
}
function endTimer() {
  window.clearInterval(timer);
  timer = setInterval(printQuote, timeOut);
}
startTimer();/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/
document.getElementById('load-quote').addEventListener("click", printQuote, false);
document.getElementById('load-quote').addEventListener("click", endTimer,false);
