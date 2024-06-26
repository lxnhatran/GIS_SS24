const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

// Ersetze 'username' und 'password' mit deinen echten MongoDB-Zugangsdaten
const username = encodeURIComponent('lxnhatran');
const password = encodeURIComponent('Lillyundlaus1!');
const dbURI = `mongodb+srv://${username}:${password}@lix.iwmohyf.mongodb.net/?retryWrites=true&w=majority&appName=lix`

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Verbindung zur MongoDB herstellen
mongoose.connect(dbURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Verbunden mit MongoDB');
  })
  .catch(err => {
    console.error('MongoDB-Verbindungsfehler:', err.message);
  });

// MongoDB Schema und Model
const qaSchema = new mongoose.Schema({
  question: String,
  answer: String,
});

const QA = mongoose.model('QA', qaSchema);

// Routen
app.get('/entries', async (req, res) => {
  try {
    const entries = await QA.find();
    res.json(entries);
  } catch (err) {
    res.status(500).send(err);
  }
});

app.post('/entries', async (req, res) => {
  const { question, answer } = req.body;
  const qaEntry = new QA({ question, answer });

  try {
    const savedEntry = await qaEntry.save();
    res.json(savedEntry);
  } catch (err) {
    res.status(400).send(err);
  }
});

// Server starten
app.listen(port, () => {
  console.log(`Server läuft auf http://localhost:${port}/`);
});
