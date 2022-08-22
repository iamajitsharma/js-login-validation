const username = document.getElementById('username');
const password = document.getElementById('password');
const form = document.getElementById('form');
const error_name = document.getElementById('error_name');


form.addEventListener('submit', (e) =>{
	e.preventDefault()

	if(username.value === '' || username.value == null || username.length <= 6) {
		
		username.value = "Please enter correct name";
		username.style.color = "red"
	}

	if(password.value === '' || password === null) {
		password.value = "Password cannot be blank"
		password.style.color = "red"
	} else if(password.value.length < 6 ) {
		password.value = "Password is too short";
		password.style.color = "red";
	} else {
		window.location.href = 'dashboard.html'
	}
	


})