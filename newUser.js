const usernameInput = document.getElementById('userName');
const createUserButton = document.getElementById('btn-new-user');

createUserButton.addEventListener('click', createNewUser);

function createNewUser(){
    localStorage.setItem('Username', usernameInput.value);
}