// retrieve the form from the DOM and print out the result


// This stores the location, not the content of the location, as a constant.
const form = document.getElementById("fsyForm");

// Display or hide note contained when travel range is updated.
form.addEventListener("change", updateTravelNotesHidden);
form.addEventListener("mouseover", updateTravelNotesHidden);

function updateTravelNotesHidden() {
  const travelRange = document.getElementById("travelRange");
  const notesContainer = document.getElementById("notesContainer");
  if (travelRange.value === "many") {
    notesContainer.hidden = false;
  }
  else {
    notesContainer.hidden = true;
  }
}

// What to do when subitting form.
form.addEventListener("submit", event => {
  event.preventDefault();
  const firstName = form.firstName.value;
  const lastName = form.lastName.value;
  const email = form.email.value;
  const numberOfCampuses = form.travelRange.value;
  const availableDate = form.availableDate.value;
  let notes = form.notes.value;

  const manyCampuses = numberOfCampuses === "many";
  const oneCampus = numberOfCampuses === "one";

  // Determine notes based on travel range.
  if (oneCampus) {
    notes = "";
  }

  // Functions to perform when submitting the form.
  function howManyDaysAwayFromToday(dateValue) {
    const today = new Date();
    const date = new Date(dateValue);
    const timeDifference = date - today;
    const daysDifference = Math.ceil(timeDifference / (1000 * 3600 * 24));
    return daysDifference;
    // Source: https://www.geeksforgeeks.org/javascript/how-to-calculate-the-number-of-days-between-two-dates-in-javascript/
  }
  const campuses = form.campus;
  function getCheckedCampuses() {
    return Array.from(campuses)
        .filter(campus => campus.checked)
        .map(campus => campus.value);
  }

  const outputResult = document.getElementById("output");

  // Parameters that determine if the submission has errors.
  // Erraneous parameters will be listed from last in input order to first.
  const manyCampusesButNotManyChecked = manyCampuses && 
      getCheckedCampuses().length <= 1;
  const noCampusesChecked = getCheckedCampuses().length <= 0;
  const dateWasNotMoreThanTwoDaysOut = howManyDaysAwayFromToday(availableDate) < 2;
  
  // If errors found within the submission.
  if (manyCampusesButNotManyChecked) {
    outputResult.innerText = "Please select at least two campuses."
  }
  else if (noCampusesChecked) {
    outputResult.innerText = "Please select at least one campus.";
  }
  else if (dateWasNotMoreThanTwoDaysOut) {
    outputResult.innerText = "Please choose a later date.";
  }
  // When no errors found in the submission.
  else {
    let result = `
      <h2>Preference Submitted</h1>
      <h3>${firstName} ${lastName}</h2>
      <h3>Email: ${email}</h3>
      <h3>Availablity: ${availableDate}</h3>
      <h3>Campuses: ${getCheckedCampuses().join(", ")}</h3>
      <h3>Preference Level: ${numberOfCampuses}</h3>
    `;
    if (manyCampuses) {
      result += `
        <h3>Notes: ${notes}</h3>
      `
    }
    outputResult.innerHTML = result;
  }

  form.reset();
});