function isValidateLogin(username, password) {
  if (String(username).trim() && String(password).trim()) {
    return false;
  }
  return true;
}

module.exports = isValidateLogin;
