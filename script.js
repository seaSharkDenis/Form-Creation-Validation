// Wrap entired script in a DOMContentLoaded event listener
document.addEventListener("DOMContentLoaded", function () {
  // Form Selection
  const form = document.getElementById("registration-form");
  // Feedback division selection
  const feedbackDiv = document.getElementById("form-feedback");

  // Form submission and event prevention
  form.addEventListener("submit", function (event) {
    event.preventDefault();

    // Retrieve User Inputs
    const username = document.getElementById("username").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    // Validation Logic
    // Initialize validation variables
    let isValid = true; // Track the overall validation status
    let messages = []; // Array that stores validation error messages

    // Username Validation
    if (username.length < 3) {
      isValid = false;
      messages.push("Username length is less than 3");
    }
    // Email validation
    if (!/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(email)) {
      isValid = false;
      messages.push(`Email does not contain "@" or "." characters.`);
    }

    // Password validation
    if (password.length <= 8) {
      isValid = false;
      messages.push(`Your password is less than 8 characters.`);
    }

    feedbackDiv.style.display = "block";
    if(messages.length > 0){ 
        feedbackDiv.style.color = "#dc3545";
        feedbackDiv.innerHTML = messages.join("<br>");
    }else{
        feedbackDiv.style.color = "#28a745";
        feedbackDiv.innerHTML = "Registration successful!"
        setTimeout(function(){
            form.submit();
        },3000);
    }
  });
});
