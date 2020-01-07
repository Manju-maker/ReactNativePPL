function checkField(field, data) {
  if (data === '') {
    return `${field} cannot be empty`;
  }
  return true;
}

function isValidEmail(email) {
  if (email === '') return 'email cannot be Empty';
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

function isValidPassword(password) {
  if (password === '') return 'password cannot be empty';
  if (password.length < 5) return 'password length should be greater than 5';
  return true;
}

function isValidUsername(username) {
  if (username === '') return 'username cannot be empty';
  if (username.length < 1) return 'username length should be greater than 1';
  return true;
}

function isValidFirstname(username) {
  if (username === '') return 'firstname cannot be empty';
  if (username.length < 1) return 'firstname length should be greater than 1';
  return true;
}
function isValidLastname(username) {
  if (username === '') return 'lastname cannot be empty';
  if (username.length < 1) return 'lastname length should be greater than 1';
  return true;
}

export {
  checkField,
  isValidEmail,
  isValidPassword,
  isValidFirstname,
  isValidLastname,
  isValidUsername,
};
