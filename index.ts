const express = require('express')
import { NextFunction, Request, Response } from 'express'
const path = require('path')

const app = express()

app.use(express.static(__dirname + '/public'));

app.use(express.json())

app.get('/', (req: Request, res: any) => {
    res.send('hi there')
})

app.post('/foo', (req: Request, res: Response) => {
    console.log(req.body)
    res.sendStatus(200)
})


app.get('/file', (req: Request, res: Response, next: NextFunction) => {
    const myarr = []
    res.sendFile(path.join(__dirname, 'views', 'index.html'))
    const param = req.query.fname;
    myarr.push(param)
    console.log(param)
})

//here will be method chaining...

app.route('/bar')
    .get((req: Request, res: Response) => {
        return res.send('This is get request...')
    })
    .post((req: Request, res: Response) => {
        return res.send('This is post request...')
    })
    .put((req: Request, res: Response) => {
        return res.send('This is put request...')
    })

//route params

app.route('/params/:id')
    .get((req: Request, res: Response) => {
        console.log(req.params.id)
        return res.send(req.params)
    })

//query string

app.route('/query')
    .get((req: Request, res: Response) => {
        console.log(req.query)
        return res.send(req.query)
    })


//matching
app.get('/ab*cd', (req: Request, res: Response) => res.status(200).send('ab*cs'))

app.listen(3000, () => console.log('listening...'))