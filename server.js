const express = require('express');
const bodyParser = require('body-parser');
const Showdown = require('showdown');
const cors = require('cors');

const app = express();
const converter = new Showdown.Converter();
app.use(cors());
app.use(bodyParser.json());


app.post('/convert', (req, res) => {
    const { content } = req.body;
    if (!content) {
        return res.status(400).json({ error });
    }
    const html = converter.makeHtml(content);
    res.json({ html });
});


app.listen(3001, () => {
    console.log("Server running on port 3001");
});