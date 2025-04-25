const express = require('express');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const { Pool } = require('pg');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

const pool = new Pool({
  user: 'your_pg_user',
  host: 'localhost',
  database: 'myappdb',
  password: 'your_pg_password',
  port: 5432,
});

// Routes here...

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
