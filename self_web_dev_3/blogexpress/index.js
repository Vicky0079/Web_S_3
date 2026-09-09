const {SSL_OP_BLOCK_PADDING_BUG } = require('constants')
const express = require('express');
const path = require('path')
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, "static")))
app.use('/',require(path.join(__dirname, 'routes/blog')))




app.listen(port, () => {
  console.log(`blog app listening on http://localhost:${port}`);
});