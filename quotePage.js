const quoteWelcome = document.getElementById('quote-hello');

quoteWelcome.textContent = "Hello " + localStorage.getItem('Username');