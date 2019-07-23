function isValidateLogin(username, password) {
  if (String(username).trim() && String(password).trim()) {
    return false;
  }
  return true;
}

function isValidRequestBody(data) {
  if (String(data).trim()) {
    return false;
  }
  return true;
}

function compareDate(a, b) {
  const date1 = new Date(a);
  const date2 = new Date(b);
  if (date1.getFullYear() > date2.getFullYear()) {
    return 1;
  } if (date1.getFullYear() < date2.getFullYear()) {
    return -1;
  } if (date1.getMonth() > date2.getMonth()) {
    return 1;
  } if (date1.getMonth() < date2.getMonth()) {
    return -1;
  } if (date1.getUTCDate() > date2.getUTCDate()) {
    return 1;
  } if (date1.getUTCDate() < date2.getUTCDate()) {
    return -1;
  }
  return 0;
}

module.exports = {
  isValidateLogin,
  compareDate,
  isValidRequestBody,
};
