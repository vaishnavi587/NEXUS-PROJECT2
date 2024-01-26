document.addEventListener('DOMContentLoaded', function () {
  console.log('DOM Loaded');

  const signupForm = document.getElementById('signupForm');

  signupForm.addEventListener('submit', function (event) {
    console.log('Form Submitted');

    event.preventDefault(); // Prevent the default form submission

    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    // Reset error messages
    clearErrors();

    // Simulate signup logic (replace with actual server-side code)
    const isSignupSuccessful = true; // Replace with actual signup logic

    if (isSignupSuccessful) {
      // Store user details locally
      storeUserLocally(username);

      alert('Signup successful! Welcome, ' + username);
      // Redirect to the login page for existing users
      window.location.href = 'login.html';
    } else {
      displayError('Signup failed. Please try again.');
    }
  });

  // Function to display an error message
  function displayError(message) {
    const errorDiv = document.getElementById('signupError');
    if (errorDiv) {
      errorDiv.textContent = message;
      errorDiv.style.display = 'block';
    }
  }

  // Function to clear all error messages
  function clearErrors() {
    const errorDiv = document.getElementById('signupError');
    if (errorDiv) {
      errorDiv.textContent = '';
      errorDiv.style.display = 'none';
    }
  }

  // Function to store user details locally
  function storeUserLocally(username) {
    const existingUsers = JSON.parse(localStorage.getItem('existingUsers')) || [];
    existingUsers.push(username);
    localStorage.setItem('existingUsers', JSON.stringify(existingUsers));
  }
});
