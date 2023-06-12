const verifyUserName = (userName) => {
  let validity = { valid: false };

  if (userName.includes('customer') && userName.length === 10) {
    const userID = parseInt(userName.slice(8));
    if (userID >= 1 && userID <= 50) {
      validity = {
        valid: true,
        id: userID,
      };
    }
  }

  return validity;
};

const verifyPassword = (password) => {
  let validity = false;
  if (password === 'overlook2021') {
    validity = true;
  }

  return validity;
};

const verifyCredentials = (userName, password) => {
  let userCredentials;
  let valid = false

  if(userName && password) {
    userCredentials = verifyUserName(userName)
    const validPass = verifyPassword(password)
    if(userCredentials.valid && validPass) {
      valid = true
    }
  }

  return {id: userCredentials.id, valid}
}

export { verifyUserName, verifyPassword, verifyCredentials };
