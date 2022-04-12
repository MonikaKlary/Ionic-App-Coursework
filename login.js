const usernameInput = document.getElementById('userName');
const passwordInput = document.getElementById('userPassword');
const loginButton = document.getElementById('btn-login');

loginButton.addEventListener('click', login);

function login()
{
    let storedUsername = localStorage.getItem('Username');
    let storedPassword = localStorage.getItem('Password');
    
    if ( usernameInput.value == storedUsername && passwordInput.value == storedPassword )
    { 
        window.location.href = "gratitudeLog.html";
    }
    else
    {
        if ( usernameInput.value != storedUsername && passwordInput.value != storedPassword )
        {
            alert("Incorrect username and password");
        }
        else if ( usernameInput.value != storedUsername )
        {
            alert("Incorrect username");
        }
        else
        {
            alert("Incorrect password");
        }
    }
}