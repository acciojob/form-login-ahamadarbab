function getFormvalue() {

	// prevent form from refreshing the page
	event.preventDefault();

	// get input values and remove extra space
	let firstName = document.querySelector('input[name="fname"]').value.trim();
	let lastName = document.querySelector('input[name="lname"]').value.trim();

	// display full name
	alert(firstName + " " + lastName);
}
