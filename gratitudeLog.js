const usernameLabel = document.getElementById('lbl-username');

usernameLabel.textContent = "Hello " + localStorage.getItem('Username');