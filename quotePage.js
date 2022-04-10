const quoteWelcome = document.getElementById('quote-hello');
const quoteDisplay = document.getElementById('quote-display');

const api_url = "https://api.quotable.io/random";

//fetch response from API in JSON
function getJson(aResponse)
{
    return aResponse.json();
}

function displayQuoteData( quoteData )
{
    quoteWelcome.textContent = "Hello " + localStorage.getItem('Username');
    //quoteDisplay.textContent = quoteData.content;

    quoteDisplay.textContent = quoteData.content + " - " + quoteData.author;
}

fetch(api_url).then(getJson).then(displayQuoteData);