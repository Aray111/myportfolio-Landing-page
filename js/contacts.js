const form = document.getElementById("contactForm");
const emailInput = document.getElementById("email");
const emailError = document.querySelector(".error-text");
const successMsg = document.querySelector(".form-success");
const errorMsg = document.querySelector(".form-error");
const btn = form.querySelector(".btn");
const btnText = btn.querySelector(".btn-text");

// EMAIL REGEX
function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email);
}

// LIVE EMAIL VALIDATION
emailInput.addEventListener("input", () => {
    if (!validateEmail(emailInput.value)) {
        emailInput.classList.add("error");
        emailError.textContent = "Please enter a valid email address";
    } else {
        emailInput.classList.remove("error");
        emailError.textContent = "";
    }
});

// FORM SUBMIT
form.addEventListener("submit", async(e) => {
    e.preventDefault();

    // reset messages
    emailError.textContent = "";
    successMsg.hidden = true;
    errorMsg.hidden = true;

    // EMAIL CHECK
    if (!validateEmail(emailInput.value)) {
        emailInput.classList.add("error");
        emailError.textContent = "Invalid email format";
        emailInput.focus();
        return;
    }

    // LOADER
    btn.classList.add("loading");
    btnText.textContent = "Sending...";
    btn.disabled = true;

    try {
        const response = await fetch(form.action, {
            method: "POST",
            body: new FormData(form),
            headers: { Accept: "application/json" },
        });

        if (response.ok) {
            form.reset();
            successMsg.hidden = false;
        } else {
            throw new Error();
        }
    } catch (error) {
        errorMsg.hidden = false;
    } finally {
        btn.classList.remove("loading");
        btnText.textContent = "Send Message";
        btn.disabled = false;
    }
});