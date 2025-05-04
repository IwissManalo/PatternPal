const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const cors = require('cors');
const User = require('./models/users');

const app = express();
const port = 3001;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MySQL connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '', // Add your MySQL root password here
  database: 'patternpal',
});

db.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('Connected to MySQL database');
});

// API endpoint to register a new user
app.post('/api/users/register', (req, res) => {
  const { first_name, last_name, username, email, password, phone_number, account_role, user_credit } = req.body;

  const sql = 'INSERT INTO users (first_name, last_name, username, email, password, phone_number, account_role, user_credit) VALUES (?, ?, ?, ?, ?, ?, ?, ?)';
  const values = [first_name, last_name, username, email, password, phone_number, account_role, user_credit];

  db.query(sql, values, (err, result) => {
    if (err) {
      console.error('Error inserting user:', err);
      res.status(500).json({ error: 'Failed to register user' });
      return;
    }
    res.status(201).json({ message: 'User registered successfully', userId: result.insertId });
  });
});

// API endpoint to login user (simple example)
app.post('/api/users/login', (req, res) => {
  const { username, password } = req.body;

  const sql = 'SELECT * FROM users WHERE username = ? AND password = ?';
  db.query(sql, [username, password], (err, results) => {
    if (err) {
      console.error('Error querying user:', err);
      res.status(500).json({ error: 'Login failed' });
      return;
    }
    if (results.length === 0) {
      res.status(401).json({ error: 'Invalid username or password' });
      return;
    }
    const user = results[0];
    res.json({ message: 'Login successful', user });
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
