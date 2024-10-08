const express = require('../app');

const app = express;
const PORT = 3000;

app.listen(PORT, (req, res) => {
  console.log(`listening on port ${PORT}`);
});

module.exports = app;
