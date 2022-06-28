"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
const path = require('path');
const app = express();
const request = require('supertest');
app.use(express.static(__dirname + '/public'));
app.use(express.json());
function delay(duration) {
    const startTime = Date.now();
    while (Date.now() - startTime < duration) {
        console.log('event loop is blocked..');
    }
}
app.get('/', (req, res) => {
    res.send('hi there');
});
app.get('/delay', (req, res) => {
    delay(6000);
    res.send('hi there, block is ' + process.pid);
});
app.get('/crash', (req, res) => {
    setTimeout(() => {
        console.log('chashing...');
        //@ts-ignore
        a = false;
    }, 3000);
    res.send('hi there, block is crashing ' + process.pid);
});
app.post('/foo', (req, res) => {
    console.log(req.body);
    res.sendStatus(200);
});
app.get('/file', (req, res, next) => {
    const myarr = [];
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
    const param = req.query.fname;
    myarr.push(param);
    console.log(param);
});
//here will be method chaining...
app.route('/bar')
    .get((req, res) => {
    return res.send('This is get request...');
})
    .post((req, res) => {
    return res.send('This is post request...');
})
    .put((req, res) => {
    return res.send('This is put request...');
});
//route params
app.route('/params/:id')
    .get((req, res) => {
    console.log(req.params.id);
    return res.send(req.params);
});
//query string
app.route('/query')
    .get((req, res) => {
    console.log(req.query);
    return res.send(req.query);
});
//matching
// app.get('/ab*cd', (req: Request, res: Response) => res.status(200).send('ab*cs'))
app.listen(3000, () => console.log('listening...'));
module.exports = app;
