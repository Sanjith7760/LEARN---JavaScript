//This is to get the value of form
/*form = document.querySelector('form');
form.addEventListener('submit', function(event){
    event.preventDefault();
    username = document.querySelector('#username').value;
    // console.log("User Name:",username);
    alert("User Name: "+username);

    email = document.querySelector('#email').value;
    // console.log("Email:",email);
    alert("Email: "+email);

    password = document.querySelector('#password').value;
    // console.log("Password:",password);
    alert("Password: "+password);
    
    
}); */



document.getElementById("submitBtn").addEventListener("click", function () {
    // Get the email input value
    const emailInput = document.getElementById("emailInput");
    const emailValue = emailInput.value.trim();
    const feedback = document.getElementById("emailFeedback");

    // Regular expression to validate email format
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    // Reset feedback message
    feedback.textContent = "";

    // Check if email is valid
    if (!emailPattern.test(emailValue)) {
        // Add error class and feedback
        emailInput.classList.add("error");
        emailInput.classList.remove("success");
        feedback.textContent = "Invalid email address.";
        feedback.style.color = "red";
    } else {
        // Add success class and feedback
        emailInput.classList.remove("error");
        emailInput.classList.add("success");
        feedback.textContent = "Email is valid!";
        feedback.style.color = "green";
    }
});
