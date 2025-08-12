// script.js

document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form from submitting by default

    // Clear previous error messages
    document.getElementById("nameError").innerText = "";
    document.getElementById("emailError").innerText = "";
    document.getElementById("messageError").innerText = "";

    // Get form values
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();

    let isValid = true;

    // Name validation
    if (name === "") {
        document.getElementById("nameError").innerText = "Name is required";
        isValid = false;
    }

    // Email validation
    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (email === "") {
        document.getElementById("emailError").innerText = "Email is required";
        isValid = false;
    } else if (!emailPattern.test(email)) {
        document.getElementById("emailError").innerText = "Enter a valid email";
        isValid = false;
    }

    // Message validation
    if (message.length < 10) {
        document.getElementById("messageError").innerText = "Message must be at least 10 characters";
        isValid = false;
    }

    // If all fields are valid, submit the form or show success
    if (isValid) {
        alert("Form submitted successfully!");
        document.getElementById("contactForm").reset();
    }
});
