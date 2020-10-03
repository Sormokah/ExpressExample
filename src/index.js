const express = require('express');

const app = express();

app.get('/', (request, response) => {
    return response.send("<h1>HELLO API</h1>");
});

app.get('/login', (req, res) => {
    return res.send(`
    <form>
        <lable for=username>username</lable>
        <input id=username type=text></input>
        <lable for=password>password</lable>
        <input id=password type=password></input>
        <input type=submit>Login!</input>
    </form>
    `);

});


app.get('/users/:username', (req, res) => {
    return res.send({'username' : req.params.username});
});

app.listen(3000, () => console.log(`Listening on port 3000`));