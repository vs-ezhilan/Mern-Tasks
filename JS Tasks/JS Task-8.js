function validateForm() {
  var isValid = true;

  var firstName = document.getElementById("firstName").value;
  var lastName = document.getElementById("lastName").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var rePassword = document.getElementById("rePassword").value;
  var age = document.getElementById("age").value;
  var phoneNumber = document.getElementById("phoneNumber").value;
  var address = document.getElementById("address").value;
  var state = document.getElementById("state").value;
  var country = document.getElementById("country").value;
  var languages = document.querySelectorAll('input[name="languages"]:checked');

  if (firstName === "") {
    document.getElementById("firstNameError").style.display = "inline";
    isValid = false;
  } else {
    document.getElementById("firstNameError").style.display = "none";
  }

  if (lastName === "") {
    document.getElementById("lastNameError").style.display = "inline";
    isValid = false;
  } else {
    document.getElementById("lastNameError").style.display = "none";
  }

  if (email === "") {
    document.getElementById("emailError").style.display = "inline";
    isValid = false;
  } else {
    document.getElementById("emailError").style.display = "none";
  }

  if (password === "") {
    document.getElementById("passwordError").style.display = "inline";
    isValid = false;
  } else {
    document.getElementById("passwordError").style.display = "none";
  }

  if (rePassword === "" || rePassword !== password) {
    document.getElementById("rePasswordError").style.display = "inline";
    isValid = false;
  } else {
    document.getElementById("rePasswordError").style.display = "none";
  }

  if (age === "") {
    document.getElementById("ageError").style.display = "inline";
    isValid = false;
  } else {
    document.getElementById("ageError").style.display = "none";
  }

  if (phoneNumber === "") {
    document.getElementById("phoneNumberError").style.display = "inline";
    isValid = false;
  } else {
    document.getElementById("phoneNumberError").style.display = "none";
  }

  if (address === "") {
    document.getElementById("addressError").style.display = "inline";
    isValid = false;
  } else {
    document.getElementById("addressError").style.display = "none";
  }

  if (state === "") {
    document.getElementById("stateError").style.display = "inline";
    isValid = false;
  } else {
    document.getElementById("stateError").style.display = "none";
  }

  if (country === "") {
    document.getElementById("countryError").style.display = "inline";
    isValid = false;
  } else {
    document.getElementById("countryError").style.display = "none";
  }

  if (languages.length === 0) {
    document.getElementById("languagesError").style.display = "inline";
    isValid = false;
  } else {
    document.getElementById("languagesError").style.display = "none";
  }

  if (isValid) {
    alert("Form submitted successfully!");
  }
}
