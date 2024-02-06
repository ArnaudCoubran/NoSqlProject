const express = require("express");
const redis = require("redis");
const bodyParser = require("body-parser");
const cors = require('cors');

const app = express();
app.use(cors());
const port = 3001;

// Create a Redis client
const client = redis.createClient(6379);

(async () => {
  client.on('error', (err) => {
    console.log('Redis Client Error', err);
  });
  client.on('ready', () => console.log('Redis is ready'));

  await client.connect();

  await client.ping();
})();


// Middleware to parse JSON in the request body
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("ok ok ok ")
});

// Endpoint to save a note to Redis
app.post("/save-note", async (req, res) => {
  //console.log(req.body)
  const { content } = req.body;
  console.log(content);

  // Save the note content to Redis using rpush
  await client.RPUSH("notes", content, (err, reply) => {
    if (err) {
      res.status(500).json({ error: "Error saving note." });
    } else {
      res.json({ success: true, noteId: reply });
    }
  });

});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
