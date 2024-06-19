document.getElementById('x-button').addEventListener('click', function() {
  document.body.classList.add('fadeOut');
  setTimeout(function () {
    window.location.href = '../contact/contact.html';
  }, 500);
});

document.getElementById("email-form").addEventListener("submit", function (e) {
  e.preventDefault();
  
  const formData = new FormData(this);

  const userData = {
    email: formData.get("email"),
    subject: formData.get("subject"),
    body: formData.get("body")
  };

  const errors = validation(userData);
  if (Object.keys(errors).length > 0) {
    console.error("ERROR: ", errors);
    displayErrors(errors);
    return;
  }
  submitForm(userData);
  this.reset();
});

const validation = (userData) => {
  const errors = {};
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!userData.email) {
    errors.email = "email is required";
  } else {
    if (!emailRegex.test(userData.email)) {
      errors.email = "email format incorrect"
    }
  }
  if (!userData.subject) {
    errors.subject = "subject is required";
  }
  if (!userData.body) {
    errors.body = "body is required";
  }
  return errors;
};

const displayErrors = (errors) => {
  const errorsContainer = document.getElementById("errors");
  errorsContainer.innerHTML = "";

  Object.values(errors).forEach((errorMessage) => {
    const errorElement = document.createElement("p");
    errorElement.textContent = errorMessage;
    errorsContainer.appendChild(errorElement);
  });
};

const submitForm = (userData) => {
  console.log("email:",userData.email, "\nsubject:", userData.subject, "\nbody:", userData.body);

  const errorsContainer = document.getElementById("errors");
  errorsContainer.innerHTML = "";
};
