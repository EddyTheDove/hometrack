import 'babel-polyfill';
import cors from 'cors'
import morgan from 'morgan'
import bodyParser from 'body-parser'
import express from 'express'
import { MainController } from './controller'

const app = express()
app.use(morgan('dev'))
app.use(cors ({ exposedHeaders: '*' }))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.get('/', (req, res) => {
    return res.status(400).json({ error: 'This endpoint only supports POST requests' })
})

app.post('/', MainController.homes)

const port = process.env.PORT || 3000
const server = app.listen(port, () => {
    console.log(`App is listening on port ${ server.address().port }`)
})

export default app
