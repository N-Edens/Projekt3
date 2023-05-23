// server.js

const apiUrl = "https://DTS.onrender.com/vej"
const express = require('express');
const app = express();
const { Client } = require('pg');
const port = process.env.PORT || 3000;
const cors = require('cors');
const path = require('path');
const { hostname } = require('os');

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'projekt')));
app.get('/favicon.ico', (req, res) => {
    res.status(204);
});
// Opret forbindelse til din Elephant SQL database
const client = new Client({
 connectionString: 'postgres://pwyctilp:17nsLdJ1cvO6X5reg0FfcQFNQge5ARfX@balarama.db.elephantsql.com/pwyctilp',
});


// Opret forbindelse til databasen
client.connect();


// Definer en rute for at hente data fra databasen
app.get('/vej', (req, res) => {
 // Udfør en forespørgsel til databasen
 client.query('SELECT vejnavn, AVG(gennemsnit) AS gennemsnit FROM vej GROUP BY vejnavn ORDER BY gennemsnit DESC Limit 4;', (err, result) => {
   if (err) {
     console.error('Fejl ved hentning af data fra databasen', err);
     res.status(500).send('Der opstod en fejl');
   } else {
     // Send data som JSON-respons
     res.json(result.rows);
   }
 });
});


// Start serveren
app.listen(port, '0.0.0.0', () => {
  console.log(`Serveren kører på port ${port}`);
});



process.on('exit',() => {
client.end();
res.json(vejData);
}
);