document.addEventListener('DOMContentLoaded', function () {
  console.log('DOM Loaded');

  const loginForm = document.getElementById('loginForm');

  loginForm.addEventListener('submit', function (event) {
    console.log('Form Submitted');

    event.preventDefault(); // Prevent the default form submission

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Reset error messages
    clearErrors();

    // Validate form inputs
    if (validateLoginForm(username, password)) {
      // Simulate client-side check for existing user
      const isExistingUser = checkExistingUserLocally(username);

      if (isExistingUser) {
        alert('Login successful! Welcome back, ' + username);
        // Redirect to the home page or any other page for existing users
        window.location.href = 'index.html';
      } else {
        alert('You don\'t have an account. Please sign up.');
        // Redirect to the sign-up page for new users
        window.location.href = 'signup.html';
      }
    }
  });

  // Function to validate the login form
  function validateLoginForm(username, password) {
    if (!username || !password) {
      displayError('Username and password are required.');
      return false;
    }

    // Additional validation logic can be added here as needed

    return true;
  }

  // Function to clear all error messages
  function clearErrors() {
    const errorDiv = document.getElementById('loginError');
    if (errorDiv) {
      errorDiv.textContent = '';
      errorDiv.style.display = 'none';
    }
  }

  // Function to check if the user exists locally
  function checkExistingUserLocally(username) {
    // Simulate checking against local storage
    const existingUsers = JSON.parse(localStorage.getItem('existingUsers')) || [];
    return existingUsers.includes(username);
  }
});
