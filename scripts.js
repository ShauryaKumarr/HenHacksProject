let users = {
    'chavi': '1234',
    'shaurya': '1234',
    'chin': '1234',
  };
  
  
  // Check if user data is already in localStorage and parse it if it exists
  if (localStorage.getItem('users')) {
    users = JSON.parse(localStorage.getItem('users'));
  }
  
  // Get the login form element
  const form = document.querySelector('.login-form');
  
  // Add event listener for the form submission
  form.addEventListener('submit', function (event) {
    // Prevent the default form submission behavior
    event.preventDefault();
  
    // Get user input from the form
    const username = document.querySelector('input[name="Username"]').value;
    const password = document.querySelector('input[name="Password"]').value;
  
    // Check if the username exists and the password matches
    if (users[username] && users[username] === password) {
      // If login is successful, log a message and redirect to home.html
      console.log('Login successful.');
      window.location.assign('home.html'); // Corrected this line for proper redirection
    } else {
      // If login fails, log an error message
      console.log('Login failed: Invalid username or password.');
    }
  });
  
  function registerNewUser(username, password) {
    users[username] = password;
  
    // Update the users object in localStorage
    localStorage.setItem('users', JSON.stringify(users));
  }
  