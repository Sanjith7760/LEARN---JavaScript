document.getElementById("submitBtn").addEventListener("click", function () {
    // Get the password input value
    const passwordInput = document.getElementById("passwordInput");
    const passwordValue = passwordInput.value.trim();
    const feedback = document.getElementById("passwordFeedback");

    // Regular expression to validate password criteria
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    // Reset feedback message
    feedback.textContent = "";

    // Check if password is valid
    if (!passwordPattern.test(passwordValue)) {
        // Add error class and feedback
        passwordInput.classList.add("error");
        passwordInput.classList.remove("success");
        feedback.textContent = "Password must be at least 8 characters long, include uppercase and lowercase letters, a number, and a special character.";
        feedback.style.color = "red";
    } else {
        // Add success class and feedback
        passwordInput.classList.remove("error");
        passwordInput.classList.add("success");
        feedback.textContent = "Password is valid!";
        feedback.style.color = "green";
    }
});