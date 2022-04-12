const usernameInput = document.getElementById('userName');
const passwordInput = document.getElementById('userPassword');
const createUserButton = document.getElementById('btn-new-user');

createUserButton.addEventListener('click', createNewUser);

function createNewUser(){
    
    //clear any old user stored data
    localStorage.clear();
    
    localStorage.setItem('Username', usernameInput.value);
    localStorage.setItem('Password', passwordInput.value);

    window.location.href = "gratitudeLog.html";
}