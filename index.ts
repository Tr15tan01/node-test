const express = require('express')
import { Request, Response } from 'express'

const app = express()

app.use(express.json())

app.get('/', (req: Request, res: any) => {
    res.send('hi there')
})

app.post('/foo', (req: Request, res: Response) => {
    console.log(req.body)
    res.sendStatus(200)
})

app.listen(3000, () => console.log('listening...'))