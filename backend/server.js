// server.js
const express = require('express');
const bodyParser = require('body-parser');
const sqlite3 = require('sqlite3').verbose();
const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());

// Connect to SQLite database
const db = new sqlite3.Database('./database.sqlite'); // Utiliser un fichier de base de données persistant

// Create users table
db.serialize(() => {
  db.run('CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY AUTOINCREMENT, email TEXT UNIQUE, password TEXT)');
});

// Signup endpoint
app.post('/signup', (req, res) => {
  const { prenom, email, password } = req.body;
  const stmt = db.prepare('INSERT INTO users (prenom, email, password) VALUES (?, ?, ?)');
  stmt.run(prenom, email, password, function(err) {
    if (err) {
      return res.status(400).json({ error: err.message });
    }
    res.status(201).json({ id: this.lastID });
  });
  stmt.finalize();
});

// Login endpoint
app.post('/login', (req, res) => {
  const { email, password } = req.body;
  db.get('SELECT * FROM users WHERE email = ? AND password = ?', [email, password], (err, row) => {
    if (err) {
      return res.status(400).json({ error: err.message });
    }
    if (row) {
      res.status(200).json({ message: 'Login successful', user: row });
    } else {
      res.status(401).json({ message: 'Invalid email or password' });
    }
  });
});

// Endpoint to get all users
app.get('/users', (req, res) => {
  db.all('SELECT * FROM users', [], (err, rows) => {
    if (err) {
      return res.status(400).json({ error: err.message });
    }
    res.status(200).json({ users: rows });
  });
});

// Endpoint to change email
app.post('/change-email', (req, res) => {
  const { oldEmail, newEmail } = req.body;
  const stmt = db.prepare('UPDATE users SET email = ? WHERE email = ?');
  stmt.run(newEmail, oldEmail, function(err) {
    if (err) {
      return res.status(400).json({ error: err.message });
    }
    if (this.changes === 0) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json({ message: 'Email updated successfully' });
  });
  stmt.finalize();
});

// Endpoint to change password
app.post('/change-password', (req, res) => {
  const { email, oldPassword, newPassword } = req.body;
  const stmt = db.prepare('SELECT * FROM users WHERE email = ? AND password = ?');
  stmt.get(email, oldPassword, (err, row) => {
    if (err) {
      return res.status(400).json({ error: err.message });
    }
    if (!row) {
      return res.status(404).json({ message: 'User not found or incorrect password' });
    }
    const updateStmt = db.prepare('UPDATE users SET password = ? WHERE email = ?');
    updateStmt.run(newPassword, email, function(err) {
      if (err) {
        return res.status(400).json({ error: err.message });
      }
      res.status(200).json({ message: 'Password updated successfully' });
    });
    updateStmt.finalize();
  });
  stmt.finalize();
});

// Start server
app.listen(port, () => {
  console.log(`Server running on http://127.0.0.1:3000`);
});