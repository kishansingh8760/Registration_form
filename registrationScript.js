
function checkPassword() {
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;
  
    if (password.length < 6) {
      alert("Password should be at least 6 characters.");
      return false;
    }
  
    if (confirmPassword !== password) {
      alert("Passwords do not match!");
      return false;
    }
    return true;
  }
