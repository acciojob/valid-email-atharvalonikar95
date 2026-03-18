function validEmail(str) {
  //your JS code here.
	const regex = /^[a-z]+@[a-z]+\.[a-z]+$/
	return regex.test(str)? true : false
}   

// Do not change the code below.
const str = prompt("Enter an email address.");
alert(validEmail(str));
