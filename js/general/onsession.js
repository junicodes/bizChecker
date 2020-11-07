/**
 * This script file holds the data of the current user that is logged in
 */

// Get User Information from the browser localStorage

const onsessionUser = JSON.parse(localStorage.getItem('bizchecker-user'));
// Confirm that user is logged in
const checkUser = () => {
  if (!onsessionUser) {
    location.replace('/login.html');
  }
};

checkUser();
// Destructure User Object to get user info
const {
  address, bizness_owner, dob, email, photo
} = onsessionUser;


