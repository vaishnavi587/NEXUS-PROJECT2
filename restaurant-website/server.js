const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(session({ secret: 'your-secret-key', resave: true, saveUninitialized: true }));

// Dummy in-memory user data
const users = [
  { id: 1, username: 'user1', password: 'password1' },
  { id: 2, username: 'user2', password: 'password2' },
];

// Routes

// Home route (index page)
app.get('/', (req, res) => {
  // Check if the user is logged in
  if (req.session.user) {
    res.sendFile(path.join(__dirname, 'path-to-your-index-page/index.html'))
  } else {
    // Redirect to login page if not logged in
    res.sendFile(__dirname + '/public/login.html');
  }
});

// Login route
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  // Find the user with the given username
  const user = users.find(u => u.username === username);

  // Check if the user exists and the password is correct
  if (user && user.password === password) {
    // Set the user in the session
    req.session.user = user;
    res.json({ message: 'Login successful', user });
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
});

// Logout route
app.get('/logout', (req, res) => {
  // Destroy the session to log the user out
  req.session.destroy(err => {
    if (err) {
      console.error(err);
      res.sendStatus(500);
    } else {
      res.json({ message: 'Logout successful' });
    }
  });
});

// Signup route
app.post('/signup', (req, res) => {
  // Implement your signup logic here

  // For demonstration purposes, let's assume signup is successful
  res.json({ message: 'Signup successful' });
});

// Serve static files from the public folder (e.g., your HTML, CSS, and client-side JS)
app.use(express.static('public'));

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
