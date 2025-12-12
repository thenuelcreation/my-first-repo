console.log("Hello, Tinyuka!");

function registerUser() {
  let fullName = prompt("Enter your username:");

  if (fullName.length < 3) {
    alert("Full Name must be at least 3 characters long.");
    return;
  }

  let email = prompt("Enter your email:");
  if (!email.includes("@")) {
    alert("Please enter a valid email address.");
    return;
  }

  let password = prompt("Enter your password:");
  while (!password || password.length < 8) {
    alert("Password must at least be 8 characters long.");
    return;
  }

  let confirmPassword = prompt("Confirm your password:");
  while (confirmPassword !== password) {
    alert("Password do not match. Try Again.");
    return;
  }

  let age = prompt("Enter your age:");
  while (isNaN(age) || age < 18) {
    alert("You must be 18 years or older.");
    return;
  }
}

alert("Registration Successful!");

registerUser();
