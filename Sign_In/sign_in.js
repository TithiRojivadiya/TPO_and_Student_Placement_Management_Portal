let pwd = document.getElementById("pwd");
let submit = document.getElementById("submit");
let email = document.getElementById("email");
let studentRadio = document.getElementById("student");
let staffRadio = document.getElementById("staff");

function isValidEmail(emailValue) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailValue);
}

submit.addEventListener('click', (e) => {
    e.preventDefault();

    if (!studentRadio.checked && !staffRadio.checked) {
        alert("Select Student or Staff");
    }
    else if (email.value.trim() === "") {
        alert("Fill email");
    }
    else if (!isValidEmail(email.value.trim())) {
        alert("Enter a valid email");
    }
    else if (pwd.value.trim() === "") {
        alert("Fill password");
    }
    else {
        alert("Signed In !!!");
        document.querySelector("form").reset();
    }
});
