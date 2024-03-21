const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");
const signInForm = document.querySelector(".sign-in-form");

// Define the predefined username and password
const predefinedUsername = "Grocery";
const predefinedPassword = "1234";

// Function to handle login form submission
signInForm.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent the form from submitting

    // Get the entered username and password from the form
    const username = signInForm.querySelector('input[type="text"]').value;
    const password = signInForm.querySelector('input[type="password"]').value;

    // Check if the entered username and password match the predefined values
    if (username === predefinedUsername && password === predefinedPassword) {
        // If the credentials match, redirect the user to the dashboard or perform any other action
        alert("Login successful! Redirecting to the dashboard...");
        window.location.href = "Landing page/index.html"
        // Redirect or perform any other action here
    } else {
        // If the credentials are incorrect, display an error message to the user
        alert("Invalid username or password. Please try again.");
    }
});

sign_up_btn.addEventListener("click", () => {
    container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
    container.classList.remove("sign-up-mode");
});