"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
const app = express();
app.use(express.json());
app.get('/', (req, res) => {
    res.send('hi there');
});
app.post('/foo', (req, res) => {
    console.log(req.body);
    res.sendStatus(200);
});
app.listen(3000, () => console.log('listening...'));
