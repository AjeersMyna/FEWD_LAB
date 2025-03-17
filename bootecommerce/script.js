// Login Validation
function validateLoginForm() {
    let loginEmail = document.getElementById("loginEmail");
    let loginPassword = document.getElementById("loginPassword");
    let loginMessage = document.getElementById("loginMessage");
    let valid = true;

    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(loginEmail.value)) {
        loginEmail.classList.add("is-invalid");
        valid = false;
    } else {
        loginEmail.classList.remove("is-invalid");
    }

    if (loginPassword.value.length < 6) {
        loginPassword.classList.add("is-invalid");
        valid = false;
    } else {
        loginPassword.classList.remove("is-invalid");
    }

    if (valid) {
        loginMessage.innerText = "Thank you for logging in!";
        setTimeout(() => {
            loginMessage.innerText = "";
            let modal = document.getElementById("loginModal");
            let modalInstance = bootstrap.Modal.getInstance(modal);
            modalInstance.hide();
        }, 2000);
    }

    return false; // Prevent form submission
}
