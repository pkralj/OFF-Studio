document.getElementById('x-button').addEventListener('click', function(e) {
  e.preventDefault();
  document.body.classList.add('fadeOut');
  setTimeout(function () {
    window.location.href = '../contact/contact.html';
  }, 1500);
});

/*document
  .getElementById("userForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const formData = new FormData(this);

    const userData = {
      firstName: formData.get("firstName"),
      lastName: formData.get("lastName"),
      occupation: formData.get("occupation"),
      languages: formData.getAll("languages"),
      programmingLanguages: formData.getAll("programmingLanguages"),
      gender: formData.get("gender"),
      birthdate: formData.get("birthdate"),
      id: Math.random(1, 99999),
    };

    const errors = validateUserData(userData);
    if (Object.keys(errors).length > 0) {
      console.error("ERROR: ", errors);
      displayErrors(errors);
      return;
    }
    submitForm(userData);
    this.reset();
  });

const validateUserData = (userData) => {
  const errors = {};

  if (!userData.firstName) {
    errors.firstName = "First name is required";
  }
  if (!userData.lastName) {
    errors.lastName = "Last name is required";
  }

  if (!userData.occupation) {
    errors.occupation = "Occupation is required";
  }
  if (!userData.gender) {
    errors.gender = "Gender is required";
  }

  if (userData.birthdate) {
    const birthdate = new Date(userData.birthdate);
    const eighteenYearsAgo = new Date();
    eighteenYearsAgo.setFullYear(eighteenYearsAgo.getFullYear() - 18);

    if (birthdate > eighteenYearsAgo) {
      errors.birthdate = "You must be at least 18 years old";
    }
  }

  if (userData.languages.length === 0) {
    errors.languages = "At least one language must be selected";
  }
  if (userData.programmingLanguages.length === 0) {
    errors.programmingLanguages =
      "At least one preferred programming language must be selected";
  }

  return errors;
};

const displayErrors = (errors) => {
  const errorsContainer = document.getElementById("errors");
  errorsContainer.innerHTML = ""; // Clear previous errors

  Object.values(errors).forEach((errorMessage) => {
    const errorElement = document.createElement("p");
    errorElement.textContent = errorMessage;
    errorsContainer.appendChild(errorElement);
  });
};

const submitForm = (userData) => {
  const existingData = JSON.parse(localStorage.getItem("userData")) || [];
  existingData.push(userData);
  localStorage.setItem("userData", JSON.stringify(existingData));

  const errorsContainer = document.getElementById("errors");
  errorsContainer.innerHTML = "";

  console.log("Form submitted successfully. Data stored in local storage.");
};*/
