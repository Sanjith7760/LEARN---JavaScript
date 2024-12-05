//document.getElementById("submitBtn").addEventListener("submit", function () {
document.getElementById("ageInput").addEventListener("input", function () {
    // Get the age input value
    const ageInput = document.getElementById("ageInput");
    const ageValue = parseInt(ageInput.value.trim(), 10);
    const feedback = document.getElementById("ageFeedback");

    // Reset feedback message
    feedback.textContent = "";

    // Check if age is valid
    if (isNaN(ageValue) || ageValue < 18 || ageValue > 100) {
        // Add error class and feedback
        ageInput.classList.add("error");
        ageInput.classList.remove("success");
        feedback.textContent = "Please enter a valid age between 0 and 120.";
        feedback.style.color = "red";
    } else {
        // Add success class and feedback
        ageInput.classList.remove("error");
        ageInput.classList.add("success");
        feedback.textContent = "Age is valid!";
        feedback.style.color = "green";
    }
});