const express = require('express')
const cors = require('cors')
const { MongoClient, ServerApiVersion } = require('mongodb');
require('dotenv').config();
const app = express()
const port = process.env.PORT || 5000

app.use(cors());
app.use(express.json());

// mongodb_uri---------------
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.mpi5l.mongodb.net/?retryWrites=true&w=majority`;

app.get('/', (req, res) => {
  res.send('Hello Todo app!')
})

app.listen(port, () => {
  console.log(`Todo app listening on port ${port}`)
})