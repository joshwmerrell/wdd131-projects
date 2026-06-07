// retrieve the form from the DOM and print out the result

// access code \/
const ACCESS_CODE = "EVENT131";

// This stores the location, not the content of the location, as a constant.
const form = document.getElementById("eventForm");

// Display or hide passcode when user type is updated.
form.addEventListener("change", updateUserType);
form.addEventListener("mouseover", updateUserType);

function updateUserType() {
    const userType = document.getElementById("user-type");
    const userIsStudent = userType.value === "student";
    const userIsGuest = userType.value === "guest";

    const studentIdContainer = document.getElementById("student-id-container");
    const accessCodeContainer = document.getElementById("access-code-container");

    const studentIdInput = document.getElementById("student-id");
    const accessCodeInput = document.getElementById("access-code");

    if (userIsStudent) {
        studentIdContainer.hidden = false;
        accessCodeContainer.hidden = true;
        accessCodeInput.value = "";
    }
    else if (userIsGuest) {
        accessCodeContainer.hidden = false;
        studentIdContainer.hidden = true;
        studentIdInput.value = "";
    }
    else {
        studentIdContainer.hidden = true;
        studentIdInput.value = "";
        accessCodeContainer.hidden = true;
        accessCodeInput.value = "";
    }
}

// What to do when subitting form.
form.addEventListener("submit", event => {
    event.preventDefault();
    const firstName = form.firstName.value;
    const lastName = form.lastName.value;
    const userType = form.userType.value;
    const date = form.eventDate.value;
    const studentId = form.studentId.value;
    const accessCode = form.accessCode.value.toUpperCase();

    const userIsStudent = userType === "student";
    const userIsGuest = userType === "guest";

    // Parameters that determine if the submission has errors.
    // Erraneous parameters will be listed from last in input order to first.
    // Student ID must be 9 digits.
    const studentIdWrongLength = studentId.length !== 9 && userIsStudent;
    // // Student ID must be all numbers.
    // const studentIdNotAllNumbers = isNan(studentId) && userIsStudent;
    // Access Codes must by 'EVENT131'. Will create a constant above.
    const wrongAccessCode = accessCode !== ACCESS_CODE && userIsGuest;
    // // Date needs to be the same day or later.
    // function incorrectDate() {
    //     const today = new Date();
    //     const enteredDate = new Date(date);
    //     const timeDifference = enteredDate - today;
    //     const daysDifference = Math.ceil(timeDifference / (1000 * 3600 * 24));
    //     if (daysDifference >= 0) {
    //         return false;
    //     }
    //     else {
    //         return true;
    //     }
    // }

    const outputResult = document.getElementById("output");
    // If errors with submittion.
    if (studentIdWrongLength) {
        outputResult.innerText = "Student ID must be 9 digits long.";
    }
    // else if (studentIdNotAllNumbers) {
    //     outputResult.innerText = "Student ID must be all numbers.";
    // }
    else if (wrongAccessCode) {
        outputResult.innerText = "Access Code is Incorrect.";
    }
    // else if (incorrectDate) {
    //     outputResult.innerText = "Enter a date as soon as today.";
    // }
    // If no errors with submission.
    else {
        outputResult.innerHTML = `
            <h2>Ticket Created</h2>
            <h3>${firstName} ${lastName}</h3>
            <h3>${userType}</h3>
            <h3>${date}</h3>
        `;
        // form.reset();
    }

});