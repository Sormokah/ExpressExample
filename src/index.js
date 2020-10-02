const express = require('express');

const app = express();

app.get('/', (request, response) => {
    return response.send("<h1>HELLO API</h1>");
});

app.get('/users/:username', (req, res) => {
    return res.send({'username' : req.params.username});
});

app.listen(3000, () => console.log(`Listening on port 3000`));