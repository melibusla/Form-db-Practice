function validate() {
	var firstName, lastName, email, user, pass, phone, expression, alertText;
	firstName = document.getElementById("firstName").value;
	lastName = document.getElementById("lastName").value;
	email = document.getElementById("email").value;
	user = document.getElementById("user").value;
	pass = document.getElementById("pass").value;
	phone = document.getElementById("phone").value;
	expression = /\w+@\w+\.+[a-z]/;
	//expression2 = /\w+@\w+\.+[a-z]+\.+[a-z]/;
	/*alertText = document.getElementById("alert-text").value;*/


	if(firstName === "" || lastName === "" || email === "" || user === "" || pass === "" || phone === ""){
		/*alertText.innerHTML = "All fields are required";*/
		alert("All fields are required");
		return false;
	}
	else if (firstName.length>30){
		alert("First Name is too long");
		return false;
	}
	else if (lastName.length>80){
		alert("Last Name is too long");
		return false;
	}
	else if (email.length>100){
		alert("Email is too long");
		return false;
	}
	else if(!expression.test(email)){
		alert("You didn't enter a valid email format");
		return false;
	}
	else if (user.length>20 || user.length<3 || pass.length>20 || pass.length<3){
		alert("User and Pass must be between 3 and 20 characters");
		return false;
	}
	else if (phone.length>20 || phone.length<10){
		alert("Phone Number must be between 10 and 20 digits");
		return false;
	}
	else if (isNaN(phone)){
		alert("Enter a valid Phone Number");
		return false;
	}
}