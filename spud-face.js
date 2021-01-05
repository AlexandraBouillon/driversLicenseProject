window.addEventListener("DOMContentLoaded", (event) => {
  //1A: Get form values and display on driver’s license
  const licenseForm = document.getElementById("drivers-license-form");
  const licenseCardFields = document.querySelectorAll(".license__info");
  const submitButton = document.querySelector(".form__submit");

  // ** Phase 1B: Update license with event delegation and event.target **
  licenseForm.addEventListener('input', event => {
    // iterate over the LC fields and match ids to event.target.id
    licenseCardFields.forEach(field => {
      if (field.id.includes(event.target.id)) {
        field.innerHTML = event.target.value;
      };
    });
  });

  // ** Phase 2: Add focus and blur events to form inputs **
  licenseForm.addEventListener("focus", event => {
    event.target.style.backgroundColor = 'lightgreen';
  },true);
  // change back to intial state on blur
  licenseForm.addEventListener('blur', event =>  {
   event.target.style.backgroundColor = "";
  },true);

  // ** Phase 3: Check that license numbers match **
  licenseForm.addEventListener('submit', event => {
    // get values from the license number field and confirm
    const licenseNumber = document.getElementById('license-num').value;
    const licenseNumberConfirm = document.getElementById('license-num-confirm').value;
    // if values are not equal, alert the user, else submit form
    if (licenseNumber !== licenseNumberConfirm) {
      // prevent the default submission behavior
      event.preventDefault();
      alert('License Numbers do not match');
    } else {
      alert('The form was submitted');
      updateClickCount()
    }
  })

  // ** Phase 4: Update submit button click count **
  submitButton.addEventListenerListener("click", event => {
    event.preventDefault();
    submitButton.innerHTML = `${event.detail}`;
  })

});
