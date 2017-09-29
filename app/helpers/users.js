const bcrypt = require('bcrypt-nodejs');

function encryptUserPassword(password){
  return bcrypt.hashSync(password)
}

module.exports = { encryptUserPassword };
