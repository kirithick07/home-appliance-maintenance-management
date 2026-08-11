/* =========================================
   HOMEFIX LOGIN JAVASCRIPT
   ========================================= */

// Get elements
const loginForm = document.getElementById("loginForm");

const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");

const loginMessage = document.getElementById("loginMessage");

const togglePassword = document.getElementById("togglePassword");

const rememberMe = document.getElementById("rememberMe");

const forgotPassword = document.getElementById("forgotPassword");

const loginBtn = document.getElementById("loginBtn");


// =========================================
// DEMO ACCOUNT
// =========================================

const DEMO_EMAIL = "demo@homefix.com";
const DEMO_PASSWORD = "HomeFix@123";


// =========================================
// PAGE LOAD
// =========================================

document.addEventListener("DOMContentLoaded", function () {

    // Check if email was previously remembered
    const savedEmail = localStorage.getItem("homefixEmail");

    if (savedEmail) {
        emailInput.value = savedEmail;
        rememberMe.checked = true;
    }

});


// =========================================
// SHOW / HIDE PASSWORD
// =========================================

togglePassword.addEventListener("click", function () {

    if (passwordInput.type === "password") {

        passwordInput.type = "text";

        togglePassword.textContent = "Hide";

    } else {

        passwordInput.type = "password";

        togglePassword.textContent = "Show";

    }

});


// =========================================
// EMAIL VALIDATION
// =========================================

function validateEmail() {

    const email = emailInput.value.trim();

    const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


    if (email === "") {

        emailError.textContent =
            "Email address is required.";

        emailInput.classList.add("input-error");
        emailInput.classList.remove("input-success");

        return false;
    }


    if (!emailPattern.test(email)) {

        emailError.textContent =
            "Please enter a valid email address.";

        emailInput.classList.add("input-error");
        emailInput.classList.remove("input-success");

        return false;
    }


    emailError.textContent = "";

    emailInput.classList.remove("input-error");
    emailInput.classList.add("input-success");

    return true;
}


// =========================================
// PASSWORD VALIDATION
// =========================================

function validatePassword() {

    const password = passwordInput.value;


    if (password === "") {

        passwordError.textContent =
            "Password is required.";

        passwordInput.classList.add("input-error");
        passwordInput.classList.remove("input-success");

        return false;
    }


    if (password.length < 8) {

        passwordError.textContent =
            "Password must contain at least 8 characters.";

        passwordInput.classList.add("input-error");
        passwordInput.classList.remove("input-success");

        return false;
    }


    passwordError.textContent = "";

    passwordInput.classList.remove("input-error");
    passwordInput.classList.add("input-success");

    return true;
}


// =========================================
// REAL-TIME VALIDATION
// =========================================

emailInput.addEventListener("blur", validateEmail);

passwordInput.addEventListener("blur", validatePassword);


// Clear error when typing

emailInput.addEventListener("input", function () {

    emailError.textContent = "";

    emailInput.classList.remove("input-error");

});


passwordInput.addEventListener("input", function () {

    passwordError.textContent = "";

    passwordInput.classList.remove("input-error");

});


// =========================================
// LOGIN FORM
// =========================================

loginForm.addEventListener("submit", function (event) {

    // Prevent page refresh
    event.preventDefault();


    // Clear previous message
    loginMessage.textContent = "";


    // Validate fields
    const validEmail = validateEmail();
    const validPassword = validatePassword();


    if (!validEmail || !validPassword) {

        loginMessage.textContent =
            "Please correct the errors above.";

        loginMessage.style.color = "#e53935";

        return;
    }


    const email = emailInput.value.trim();
    const password = passwordInput.value;


    // =====================================
    // DEMO LOGIN
    // =====================================

    if (
        email === DEMO_EMAIL &&
        password === DEMO_PASSWORD
    ) {

        loginMessage.textContent =
            "Login successful! Redirecting...";

        loginMessage.style.color = "#2e9d68";


        // Remember email
        if (rememberMe.checked) {

            localStorage.setItem(
                "homefixEmail",
                email
            );

        } else {

            localStorage.removeItem(
                "homefixEmail"
            );

        }


        // Disable button
        loginBtn.disabled = true;

        loginBtn.textContent = "Logging in...";


        // Demo redirect
        setTimeout(function () {

            window.location.href =
                "dashboard.html";

        }, 1200);


    } else {

        // Invalid login

        loginMessage.textContent =
            "Invalid email or password.";

        loginMessage.style.color = "#e53935";


        passwordInput.classList.add(
            "input-error"
        );

    }

});


// =========================================
// FORGOT PASSWORD
// =========================================

forgotPassword.addEventListener("click", function (event) {

    event.preventDefault();

    const email = emailInput.value.trim();


    if (email === "") {

        loginMessage.textContent =
            "Enter your email address first.";

        loginMessage.style.color = "#e53935";

        emailInput.focus();

        return;
    }


    if (!validateEmail()) {

        emailInput.focus();

        return;
    }


    loginMessage.textContent =
        "Password reset link will be sent to your email.";

    loginMessage.style.color = "#2f80ed";

});


// =========================================
// ENTER KEY SUPPORT
// =========================================

passwordInput.addEventListener("keydown", function (event) {

    if (event.key === "Enter") {

        loginForm.requestSubmit();

    }

});