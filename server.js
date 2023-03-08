const express = require('express');
const path = require('path');
const { clog } = require('./Develop/middleware/clog');
const api = require('./Develop/routes/index');

const PORT = process.env.PORT || 3001;

const app = express();

// Import custom middleware, "cLog"
app.use(clog);

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', api);

app.use(express.static('public'));

// GET Route for homepage
app.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, './Develop/public/index.html'))
);

app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, './Develop/public/notes.html'))
);


app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);