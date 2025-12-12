let nameField = document.getElementById("name");
let emailField = document.getElementById("email");
let phoneField = document.getElementById("phone");
let pwdField = document.getElementById("pwd");
let confirmPwdField = document.getElementById("confirmPwd");
let studentIdField = document.getElementById("studentId");
let departmentField = document.getElementById("department");
let cgpaField = document.getElementById("cgpa");
let submitBtn = document.getElementById("submit");

function isValidEmail(emailValue) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailValue);
}

function isValidPhone(phoneValue) {
    // Basic phone validation: 10 digits, optional country code
    return /^\+?\d{10,15}$/.test(phoneValue.replace(/\s|-/g, ''));
}

submitBtn.addEventListener('click', (e) => {
    e.preventDefault();

    let name = nameField.value.trim();
    let email = emailField.value.trim();
    let phone = phoneField.value.trim();
    let pwd = pwdField.value.trim();
    let confirmPwd = confirmPwdField.value.trim();
    let studentId = studentIdField.value.trim();
    let department = departmentField.value;
    let cgpa = parseFloat(cgpaField.value);

    if (name === "") {
        alert("Fill in your full name");
    } else if (email === "") {
        alert("Fill in your email");
    } else if (!isValidEmail(email)) {
        alert("Enter a valid email");
    } else if (phone === "") {
        alert("Fill in your phone number");
    } else if (!isValidPhone(phone)) {
        alert("Enter a valid phone number (10 - 12 digits)");
    } else if (pwd === "") {
        alert("Fill in your password");
    } else if (confirmPwd === "") {
        alert("Confirm your password");
    } else if (pwd !== confirmPwd) {
        alert("Passwords do not match");
    } else if (studentId === "") {
        alert("Fill in your student ID");
    } else if (department === "") {
        alert("Select your department");
    } else if (isNaN(cgpa) || cgpa < 0 || cgpa > 10) {
        alert("Enter a valid CGPA (0.0 to 10.0)");
    } else {
        alert("Account Created Successfully!");
        document.querySelector("form").reset();
    }
});