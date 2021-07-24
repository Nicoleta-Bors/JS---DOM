const elementAlarm = document.querySelectorAll('.error');

document.querySelector('#submit').addEventListener('click', function (e) {
  e.preventDefault();
  const username = document.querySelector('#username');
  const email = document.querySelector('#email');
  const password = document.querySelector('#password');
  const confPassword = document.querySelector('#confPassword');
  const inputData = [username, email, password, confPassword];

  let allCorrect = true;
  checkRequired(inputData);
  if (!allCorrect) {
    return false;
  }
});

const checkRequired = (inputData) => {
  //for username
  if (inputData[0].value !== '') {
    checkLength(inputData, inputData[0].value);
  } else {
    showError(inputData, 'Username is required', 0);
  }
  //for email
  if (inputData[1].value !== '') {
    checkEmail(inputData, inputData[1].value);
  } else {
    showError(inputData, 'Email is required', 1);
  }
  //for password
  if (inputData[2].value === '' && inputData[3].value === '') {
    showError(inputData, 'Password is required', 2);
    showError(inputData, 'Checking password is required', 3);
  } else {
    checkPasswordsMatch(inputData, inputData[2].value, inputData[3].value);
  }
};

const checkLength = (inputData, username) => {
  if (username.length < 3) {
    showError(inputData, 'Username must be at least 3 characters', 0);
  } else if (username.length > 30) {
    showError(inputData, 'Username must be shorter then 30 characters', 0);
  } else {
    showSuccess(inputData, 0);
  }
};

const checkPasswordsMatch = (inputData, password1, password2) => {
  if (password1.length >= 6 && password1 === password2) {
    showSuccess(inputData, 2);
    showSuccess(inputData, 3);
  } else if (password1.length >= 6 && password1 !== password2) {
    showSuccess(inputData, 2);
    showError(inputData, "Password doesn't match ", 3);
  } else if (password1.length < 6) {
    showError(inputData, 'Password must be at least 6 characters ', 2);
    showError(inputData, '', 3);
  }
};

const checkEmail = (inputData, email) => {
  let re = /\S+@\S+\.\S+/; //anystring@anystring.anystring
  if (re.test(email)) {
    showSuccess(inputData, 1);
  } else {
    showError(inputData, 'Email is not valid', 1);
  }
};

const showError = (inputData, errorText, index) => {
  inputData[index].style.border = '2px solid red';
  elementAlarm[index].innerHTML = errorText;
  elementAlarm[index].style.visibility = 'visible';
  elementAlarm[index].style.margin = '0';
  elementAlarm[index].style.fontSize = '13px';
  elementAlarm[index].style.color = 'red';
  allCorrect = false;
};

const showSuccess = (inputData, index) => {
  inputData[index].style.border = '2px solid green';
  elementAlarm[index].style.visibility = 'hidden';
};
