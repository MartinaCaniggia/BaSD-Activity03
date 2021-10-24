//Form
var registerForm = document.getElementsByClassName('form');

//Inputs
var inputName = document.getElementById('fullName');
var inputEmail = document.getElementById('mail');
var inputPassword = document.getElementById('pass');
var inputRPassword = document.getElementById('repPass');
var inputAge = document.getElementById('age');
var inputPhone = document.getElementById('phone');
var inputAddress = document.getElementById('address');
var inputCity = document.getElementById('city');
var inputPostal = document.getElementById('postalC');
var inputId = document.getElementById('idNum');

//Error messages
var errorName = document.getElementById('error-name');
var errorEmail = document.getElementById('error-email');
var errorPass = document.getElementById('error-pass');
var errorRepPass = document.getElementById('error-passw');
var errorAge = document.getElementById('error-age');
var errorPhone = document.getElementById('error-phone');
var errorAddress = document.getElementById('error-add');
var errorCity = document.getElementById('error-city');
var errorPostalCode = document.getElementById('error-postal');
var errorId = document.getElementById('error-id');

//Fields
var fields = {
name: false,
email:false,
password: false,
repeatPassword: false,
age:false,
phoneNumber: false,
address: false,
city:false,
postCode:false,
id:false,
}

//Regular Expressions
var nameReg = /^[a-zA-ZáéíóúÑñ]+(?:\s[a-zA-ZáéíóúÑñ]+)+$/,;
var emailReg = /^[a-zA-Z0-9.+-]+@[a-zA-Z0-9.+-]+\.[a-zA-Z]+$/;
var passwordReg = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
var symbolsReg = /([@"'(.?*+^$#()_-])/;
var numbersReg = /[0-9]/;
var addressReg = /^[a-zA-Z0-9]+(?:\s[a-zA-Z0-9]+)+$/;

  //Validations
  //Full Name Validation
  function validateName () {
    if (inputName.value.length >= 6 && inputName.value.match(nameReg)) {
      inputName.style.border = '3px solid green';
      errorName.style.display = 'none';
      fields['name'] = true;
    } else {
      inputName.style.border = '3px solid red';
      errorName.style.display = 'block';
      fields['name'] = false;
    }
  }

  inputName.addEventListener('blur', validateName);
  function msgNameClean () {
    errorName.style.display = 'none';
  }
  inputName.addEventListener('focus', msgClean);

  //Email Validation
  function validateEmail () {
    if (inputEmail.value.match(emailReg)) {
      inputEmail.style.border = '3px solid green';
      errorEmail.style.display = 'none';
      fields['email'] = true;
    } else {
      inputEmail.style.border = '3px solid red';
      errorEmail.style.display = 'block';
      fields['email'] = false;
    }
  }
  inputEmail.addEventListener('blur', validateEmail);

  function msgEmailClear () {
    errorEmail.style.border = 'none';
  }
  inputEmail.addEventListener('focus', msgEmailClear);

  //Password Validation
  function validatePassword () {
    if (inputPassword.value.match(passwordReg)) {
      inputPassword.style.border = '3px solid green';
      errorPass.style.display = 'none';
      fields ['password'] = true;
    } else {
      inputPassword.style.border = '3px solid red';
      errorPass.style.display = 'block';
      fields['password'] = false;
    }
  }

  inputPassword.addEventListener('blur', validatePassword);
  function msgPassClear () {
    errorPass.style.display = 'none';
  }
  inputPassword.addEventListener('focus', msgPassClear);

  //Repeat Password Validation
  function validateRepeatPassword () {
    if (inputRPassword.value == inputPassword.value) {
      inputRPassword.style.border = '3px solid green';
      errorRepPass.style.display = 'none';
      fields['repeatPassword'] = true;
    } else {
      inputRPassword.style.border = '3px solid red';
      errorRepPass.style.display = 'block';
      fields ['repeatPassword'] = false
    }
  }
  inputRPassword.addEventListener('blur', validateRepeatPassword);
  function msgRpassClear () {
    errorRepPass.style.display = 'none';
  }
  inputRPassword.addEventListener('focus', msgRpassClear);

  //Age Validation
  function validateAge () {
    if (inputAge.value >= 18 && !inputAge.value.match(symbolsReg)) {
      inputAge.style.border = '3px solid green';
      errorAge.style.display = 'none';
    fields ['age'] = true
  } else {
    inputAge.style.border = '3px solid red';
    errorAge.style.display = 'block';
    fields ['age'] = false;
  }
  }
  inputAge.addEventListener('blur', validateAge);
  function msgAgeClear () {
    errorMess.style.display = 'none';
  }
  inputAge.addEventListener('focus', msgAgeClear);

  //Phone Number Validation
  function validatePhone () {
    if (inputPhone.value.length >= 7 && inputPhone.value.match(numbersReg) && !inputPhone.value.match(symbolsReg)) {
      inputPhone.style.border = '3px solid green';
      errorPhone.style.display = 'none';
      fields ['phoneNumber'] = 'true';
    } else {
      inputPhone.style.border = '3px solid red';
      errorPhone.style.display = 'block';
      fields ['phoneNumber'] = false;
    }
  }
  inputPhone.addEventListener('blur', validatePhone);
  function msgPhoneClear () {
    errorPhone.style.display = 'none';
  }
  inputPhone.addEventListener('focus', msgPhoneClear);

  //Address Validation
  function validateAddress () {
    if (inputAddress.value.length >= 5 && inputAddress.value.match(addressReg)) {
      inputAddress.style.border = '3px solid green';
      errorAddress.style.display = 'none';
      fields ['address'] = true;
    } else {
      inputAddress.style.border = '3px solid red';
      errorAddress.style.display = 'block';
      fields ['address'] = false;
    }
  }
  inputAddress.addEventListener('blur', validateAddress);
  function msgAddressClear () {
  errorAddress.style.display = 'none';
  }
  inputAddress.addEventListener('focus', msgAddressClear);

  //City Validation
  function validateCity () {
    if (inputCity.value.length >= 3) {
      inputCity.style.border = '3px solid green';
      errorCity.style.display = 'none';
      fields['city'] = true;
    } else {
      inputCity.style.border = '3px solid red';
      errorCity.style.display = 'block';
      fields['city'] = false;
    }
  }
  inputCity.addEventListener('blur', validateCity);
  function msgCityClear() {
    errorCity.style.display = 'none';
  }
  inputCity.addEventListener('focus', msgCityClear);

  //Postal Code Validation
  function validatePostalCode () {
    if (inputPostal.value.length >= 3) {
      inputPostal.style.border = '3px solid green';
      errorPostalCode.style.display = 'none';
      fields['postalCode'] = true;
    } else {
      inputPostal.style.border = '3px solid red';
      errorPostalCode.style.display = 'block';
      fields ['postalCode'] = false;
    }
  }
  inputPostal.addEventListener('blur', validatePostalCode);
  function msgPostalClear () {
    errorPostalCode.style.display = 'none';
  }
  inputPostal.addEventListener('focus', msgPostalClear);

  //Id Validation
  function validateId () {
    if ((inputId.value.length >= 7 && inputId.value.length <= 8) && inputId.value.match(numbersReg) && !inputId.value.match(symbolsReg)) {
      inputId.style.border = '3px solid green';
      errorId.style.display = 'none';
      fields['id'] = true;
    } else {
      inputId.style.border = '3px solid red';
      errorId.style.border = 'block';
      fields['id'] = false;
    }
  }
  inputId.addEventListener('blur', validateId);
  function msgIdClear () {
    errorId.style.display = 'none';
  }
  inputId.addEventListener('focus', msgIdClear);

  //Buttom Send
  registerForm.onsubmit= function (e) {
    e.preventDefault();
    if (
    fields ['name'] &&
    fields ['email'] &&
    fields ['password'] &&
    fields ['repeatPassword'] &&
    fields ['age'] &&
    fields ['phoneNumber'] &&
    fields ['address'] &&
    fields ['city'] &&
    fields ['postalCode'] &&
    fields ['id']
    ) {
      validations.style.display = 'flex';
      alert ('subscription process successful. Your user data is:' + '\n' + 
      'Name: ' + inputName.value + '\n' +
      'Email: ' + inputEmail.value + '\n' +
      'Password: ' + inputPassword.value + '\n' +
      'Repeat Password: ' + inputRPassword.value + '\n' +
      'Age: ' + inputAge.value + '\n' +
      'Phone Number: ' + inputPhone.value + '\n' +
      'Address: ' + inputAddress.value + '\n' +
      'City: ' + inputCity.value + '\n' +
      'Postal Code: ' + inputPostal.value + '\n' +
      'Id: ' + inputId.value)
    } else {
      alert ('Subscription process failed. Please check your data and try again')
    }
  }