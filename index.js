const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send({ bye: 'Shai!' });
});

const PORT = process.env.PORT || 5000; // for dev environment use 5000
app.listen(PORT);