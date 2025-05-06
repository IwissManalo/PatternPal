const db = require('../mysql/dbCon');

exports.registerUser = (req, res) => {
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
};

exports.loginUser = (req, res) => {
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
};
