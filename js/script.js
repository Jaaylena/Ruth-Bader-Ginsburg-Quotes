/******************************************
Random Ruth Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * create an array of quotes 
***/
let randomQuote;
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
source: "Ruther Bader Ginsburg", citation:"My own words"}
];


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
  //call randomRuthQuote function
  randomRuthQuote(); 
  let HTML = '';
  HTML += '<p class="quote">' + randomQuote.Quote + '</p>';
  HTML += '<p class="source">' + randomQuote.source + '</p>';
  //a conditional statement that checks if the quote includes a year 
  if(randomQuote.year) {
  HTML += '<span class="year">' + randomQuote.year + '</span>'; 
  }
  // a conditional statement that check if the quote includes source
  if(randomQuote.citation) {
    
  HTML += '<span class="citation">' + randomQuote.citation + '</span>';
  console.log(randomQuote.citation);
  }
  document.getElementById('quote-box').innerHTML = HTML;
} 
/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);
