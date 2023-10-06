// Function to check if a string is a palindrome
function isPalindrome(str) {
    // Remove spaces and convert to lowercase for case-insensitive comparison
    const cleanStr = str.replace(/\s/g, "").toLowerCase();
    // Reverse the string and compare it to the original
    const reversedStr = cleanStr.split("").reverse().join("");
    return cleanStr === reversedStr;
}
document.addEventListener("DOMContentLoaded", function () {
    // Function to check if a string is a palindrome and display the result
    const inputString = document.getElementById("inputString");
    const checkButton = document.getElementById("checkButton");
    const resultMessage = document.getElementById("resultMessage");
    const retryButton = document.getElementById("retryButton");

    checkButton.addEventListener("click", function () {
        const str = inputString.value;
        //String to enter the palindrome

        if (str.trim() === "") {
            resultMessage.textContent = "Please enter a valid string.";
        } else if (isPalindrome(str)) {
            resultMessage.textContent = "It's a palindrome!";
        } else {
            resultMessage.textContent = "It's not a palindrome.";
        }

        inputString.value = ""; // Clear the input field
        checkButton.style.display = "none";
        retryButton.style.display = "block";
    });

    retryButton.addEventListener("click", function () { // exit the loop
        resultMessage.textContent = "";
        retryButton.style.display = "none";
        checkButton.style.display = "block";
    });
});


// Function to validate input and access the secret message
function validateAndAccessSecretMessage() {
    // Get input values
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const zipCode = document.getElementById("zipCode").value;

    // Combine first name and last name
    const fullName = `${firstName} ${lastName}`;

    // Validate full name length
    if (fullName.length > 20) {
        document.getElementById("errorMessage").textContent = "Full name is too long (more than 20 characters).";
        return; // Stop execution if invalid
    }

    // Validate zip code format (5 digits)
    if (!/^\d{5}$/.test(zipCode)) {
        document.getElementById("errorMessage").textContent = "Invalid zip code format (must be 5 digits).";
        return; // Stop execution if invalid
    }

    // If inputs are valid, show the secret message
    document.getElementById("errorMessage").textContent = "";
    document.getElementById("secretMessage").style.display = "block";
}


