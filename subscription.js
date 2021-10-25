//Form
const registerForm = document.querySelector('form');

//Inputs
const inputName = document.getElementById('fullName');
const inputEmail = document.getElementById('mail');
const inputPassword = document.getElementById('pass');
const inputRPassword = document.getElementById('repPass');
const inputAge = document.getElementById('age');
const inputPhone = document.getElementById('phone');
const inputAddress = document.getElementById('address');
const inputCity = document.getElementById('city');
const inputPostal = document.getElementById('postalC');
const inputId = document.getElementById('idNum');

//Error messages
const errorName = document.getElementById('error-name');
const errorEmail = document.getElementById('error-email');
const errorPass = document.getElementById('error-pass');
const errorRepPass = document.getElementById('error-passw');
const errorAge = document.getElementById('error-age');
const errorPhone = document.getElementById('error-phone');
const errorAddress = document.getElementById('error-add');
const errorCity = document.getElementById('error-city');
const errorPostalCode = document.getElementById('error-postal');
const errorId = document.getElementById('error-id');

//Validation message
const validations = document.getElementById('validationsList');

//Fields
const fields = {
  name: false,
  email: false,
  password: false,
  repeatPassword: false,
  age: false,
  phoneNumber: false,
  address: false,
  city: false,
  postCode: false,
  id: false,
};

//Regular Expressions
const nameReg = /^[a-zA-ZáéíóúÑñ]+(?:\s[a-zA-ZáéíóúÑñ]+)+$/;
const emailReg = /^[a-zA-Z0-9.+-]+@[a-zA-Z0-9.+-]+\.[a-zA-Z]+$/;
const passwordReg = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
const symbolsReg = /([@"'(.?*+^$#()_-])/;
const numbersReg = /[0-9]/;
const addressReg = /^[a-zA-Z0-9]+(?:\s[a-zA-Z0-9]+)+$/;

//Validations
//Full Name Validation
function validateName() {
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
function msgNameClean() {
  errorName.style.display = 'none';
}
inputName.addEventListener('focus', msgNameClean);

//Email Validation
function validateEmail() {
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
function msgEmailClear() {
  errorEmail.style.border = 'none';
}
inputEmail.addEventListener('focus', msgEmailClear);

//Password Validation
function validatePassword() {
  if (inputPassword.value.match(passwordReg)) {
    inputPassword.style.border = '3px solid green';
    errorPass.style.display = 'none';
    fields['password'] = true;
  } else {
    inputPassword.style.border = '3px solid red';
    errorPass.style.display = 'block';
    fields['password'] = false;
  }
}
inputPassword.addEventListener('blur', validatePassword);
function msgPassClear() {
  errorPass.style.display = 'none';
}
inputPassword.addEventListener('focus', msgPassClear);

//Repeat Password Validation
function validateRepeatPassword() {
  if (inputRPassword.value == inputPassword.value) {
    inputRPassword.style.border = '3px solid green';
    errorRepPass.style.display = 'none';
    fields['repeatPassword'] = true;
  } else {
    inputRPassword.style.border = '3px solid red';
    errorRepPass.style.display = 'block';
    fields['repeatPassword'] = false;
  }
}
inputRPassword.addEventListener('blur', validateRepeatPassword);
function msgRpassClear() {
  errorRepPass.style.display = 'none';
}
inputRPassword.addEventListener('focus', msgRpassClear);

//Age Validation
function validateAge() {
  if (inputAge.value >= 18 && !inputAge.value.match(symbolsReg)) {
    inputAge.style.border = '3px solid green';
    errorAge.style.display = 'none';
    fields['age'] = true;
  } else {
    inputAge.style.border = '3px solid red';
    errorAge.style.display = 'block';
    fields['age'] = false;
  }
}
inputAge.addEventListener('blur', validateAge);
function msgAgeClear() {
  errorAge.style.display = 'none';
}
inputAge.addEventListener('focus', msgAgeClear);

//Phone Number Validation
function validatePhone() {
  if (
    inputPhone.value.length >= 7 &&
    inputPhone.value.match(numbersReg) &&
    !inputPhone.value.match(symbolsReg)
  ) {
    inputPhone.style.border = '3px solid green';
    errorPhone.style.display = 'none';
    fields['phoneNumber'] = 'true';
  } else {
    inputPhone.style.border = '3px solid red';
    errorPhone.style.display = 'block';
    fields['phoneNumber'] = false;
  }
}
inputPhone.addEventListener('blur', validatePhone);
function msgPhoneClear() {
  errorPhone.style.display = 'none';
}
inputPhone.addEventListener('focus', msgPhoneClear);

//Address Validation
function validateAddress() {
  if (inputAddress.value.length >= 5 && inputAddress.value.match(addressReg)) {
    inputAddress.style.border = '3px solid green';
    errorAddress.style.display = 'none';
    fields['address'] = true;
  } else {
    inputAddress.style.border = '3px solid red';
    errorAddress.style.display = 'block';
    fields['address'] = false;
  }
}
inputAddress.addEventListener('blur', validateAddress);
function msgAddressClear() {
  errorAddress.style.display = 'none';
}
inputAddress.addEventListener('focus', msgAddressClear);

//City Validation
function validateCity() {
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
function validatePostalCode() {
  if (inputPostal.value.length >= 3) {
    inputPostal.style.border = '3px solid green';
    errorPostalCode.style.display = 'none';
    fields['postalCode'] = true;
  } else {
    inputPostal.style.border = '3px solid red';
    errorPostalCode.style.display = 'block';
    fields['postalCode'] = false;
  }
}
inputPostal.addEventListener('blur', validatePostalCode);
function msgPostalClear() {
  errorPostalCode.style.display = 'none';
}
inputPostal.addEventListener('focus', msgPostalClear);

//Id Validation
function validateId() {
  if (
    inputId.value.length >= 7 &&
    inputId.value.length <= 8 &&
    inputId.value.match(numbersReg) &&
    !inputId.value.match(symbolsReg)
  ) {
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
function msgIdClear() {
  errorId.style.display = 'none';
}
inputId.addEventListener('focus', msgIdClear);

function finalValidation(e) {
  if (
    fields['name'] &&
    fields['email'] &&
    fields['password'] &&
    fields['repeatPassword'] &&
    fields['age'] &&
    fields['phoneNumber'] &&
    fields['address'] &&
    fields['city'] &&
    fields['postalCode'] &&
    fields['id']
  ) {
    alert(
      'subscription process successful. Your user data is:' +
        '\n' +
        'Name: ' +
        inputName.value +
        '\n' +
        'Email: ' +
        inputEmail.value +
        '\n' +
        // 'Password: ' +
        // inputPassword.value +
        // '\n' +
        // 'Repeat Password: ' +
        // inputRPassword.value +
        // '\n' +
        'Age: ' +
        inputAge.value +
        '\n' +
        'Phone Number: ' +
        inputPhone.value +
        '\n' +
        'Address: ' +
        inputAddress.value +
        '\n' +
        'City: ' +
        inputCity.value +
        '\n' +
        'Postal Code: ' +
        inputPostal.value +
        '\n' +
        'Id: ' +
        inputId.value
    );
    e.preventDefault();
  } else {
    alert('Subscription process failed. Please check your data and try again');
    e.preventDefault();
  }
}

//Button Send
registerForm.addEventListener('submit', finalValidation);

//Week 6
const modalContainer = document.querySelector('#modal-simple');
const modalData = document.querySelector('.modal-content > ul');
const closeBtn = document.getElementsByClassName('btnC')[0];
const modalTitle = document.querySelector('.modal-content > h1');

window.addEventListener('load', function () {
  const currentUserName = localStorage.getItem('userName');
  const currentUserEmail = localStorage.getItem('userEmail');
  const currentUserPassword = localStorage.getItem('userPassword');
  const currentUserRepeatPassword = localStorage.getItem('userRepeatPassword');
  const currentUserAge = localStorage.getItem('userAge');
  const currentUserPhone = localStorage.getItem('userPhone');
  const currentUserAddress = localStorage.getItem('userAddress');
  const currentUserCity = localStorage.getItem('userCity');
  const currentUserPostal = localStorage.getItem('userPostalCode');
  const currentUserId = localStorage.getItem('userId');

  inputName.value = currentUserName;
  inputEmail.value = currentUserEmail;
  inputPassword.value = currentUserPassword;
  inputRPassword.value = currentUserRepeatPassword;
  inputAge.value = currentUserAge;
  inputPhone.value = currentUserPhone;
  inputAddress.value = currentUserAddress;
  inputCity.value = currentUserCity;
  inputPostal.value = currentUserPostal;
  inputId.value = currentUserId;
});

console.log(inputName.value);

const urlData =
  'https://curso-dev-2021.herokuapp.com/newsletter?' +
  'name=' +
  inputName.value +
  '&' +
  'email=' +
  inputEmail.value +
  '&' +
  'password=' +
  inputPassword.value +
  '&' +
  'repeatpassword=' +
  inputRPassword.value +
  '&' +
  'age=' +
  inputAge.value +
  '&' +
  'phone=' +
  inputPhone.value +
  '&' +
  'address=' +
  inputAddress.value +
  '&' +
  'city=' +
  inputCity.value +
  '&' +
  'postalcode=' +
  inputPostal.value +
  '&idnumber=' +
  inputId.value;

console.log(urlData);

function successfulModal(userInfo) {
  const jsonToString = JSON.stringify(userInfo);
  console.log(userInfo);
  modalContainer.style.display = 'block';
  modalTitle.innerHTML = 'Successful Register!';
  modalData.innerHTML = `<li>${jsonToString}</li>`;
  localStorage.setItem('userName', inputName.value);
  localStorage.setItem('userEmail', inputEmail.value);
  localStorage.setItem('userPassword', inputPassword.value);
  localStorage.setItem('userRepeatPassword', inputRPassword.value);
  localStorage.setItem('userAge', inputAge.value);
  localStorage.setItem('userPhone', inputPhone.value);
  localStorage.setItem('userAddress', inputAddress.value);
  localStorage.setItem('userCity', inputCity.value);
  localStorage.setItem('userPostalCode', inputPostal.value);
  localStorage.setItem('userId', inputId.value);
}

function errorModal(errorInfo) {
  modalContainer.style.display = 'block';
  modalTitle.innerHTML = 'Sorry, there was a mistake';
  modalData.innerHTML = `<li>${errorInfo}</li>`;
}

registerForm.addEventListener('submit', function (e) {
  modalContainer.style.display = 'flex';
  fetch(urlData)
    .then((response) => response.json())
    .then((data) => successfulModal(data))
    .catch((error) => {
      errorModal(error);
    });
  e.preventDefault();
});

closeBtn.addEventListener('click', function () {
  console.log(modalContainer);
  modalContainer.style.display = 'none';
});

window.addEventListener('click', function (e) {
  if (e.target == modalContainer) {
    modalContainer.style.display = 'none';
  }
});
