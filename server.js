const port = 3000;
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.sendFile(__dirname + '\\public\\index.html');
});

app.listen(port, (err) => {
    if (err) {
        return err;
    } else {
        console.log('Server started: http://localhost:' + port);
    }
});