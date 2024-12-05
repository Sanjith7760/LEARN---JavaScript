document.getElementById("phoneInput").addEventListener("input", function () {
    // Get the phone input value
    const phoneInput = document.getElementById("phoneInput");
    const phoneValue = phoneInput.value.trim();
    const feedback = document.getElementById("phoneFeedback");

    // Regular expression to validate phone number format (e.g., 123-456-7890)
    //const phonePattern = /^\d{3}-\d{3}-\d{4}$/;
    const phonePattern = /^\d{10}$/;

    // Reset feedback message
    feedback.textContent = "";

    // Check if phone number is valid
    if (!phonePattern.test(phoneValue)) {
        // Add error class and feedback
        phoneInput.classList.add("error");
        phoneInput.classList.remove("success");
        feedback.textContent = "Please enter a valid phone number in the format: 123-456-7890.";
        feedback.style.color = "red";
    } else {
        // Add success class and feedback
        phoneInput.classList.remove("error");
        phoneInput.classList.add("success");
        feedback.textContent = "Phone number is valid!";
        feedback.style.color = "green";
    }
});