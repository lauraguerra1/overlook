
const verifyUserName = (userName) => {
  // const userName = document.querySelector('#username').value
  // const password = document.querySelector('#password').value
  let validity = {valid: false}

  if (userName.includes('customer') && userName.length === 10) {
    const userID = parseInt(userName.slice(8))
    if(userID >= 1 && userID <=50) {
      validity = {
        valid: true,
        id: userID
      }
    }
  } 

  return validity;
}