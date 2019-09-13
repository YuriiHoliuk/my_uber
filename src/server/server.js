/* eslint-disable max-len,no-console */
const express = require('express');
const fs = require('fs');
const path = require('path');
const { promisify } = require('util');

const readFile = promisify(fs.readFile);

const PORT = process.env.PORT || 5000;
const app = express();

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.get('/restaurants', async(req, res) => {
  const { location = 'london' } = req.query;
  const dataPath = path.join(__dirname, 'data', 'location', `${location}.json`);
  const file = await readFile(dataPath);

  res.json(JSON.parse(file.toString()));
});

app.get('/restaurants/:id', async(req, res) => {
  const { id } = req.params;
  const dataPath = path.join(__dirname, 'data', 'restaurants', `${id}.json`);
  const file = await readFile(dataPath);

  res.json(JSON.parse(file.toString()));
});

app.listen(PORT, () => console.log(`Server listen on port ${PORT}`));
