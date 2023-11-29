const express = require('express')
const mysql = require('mysql')
const myconn = require('express-myconnection')

const rutas = require('./rutas.js')

const app = express()
app.set('port', process.env.PORT || 9000)

const dbOptions = {
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'root',
    database: 'matizrosa'
}

app.use(myconn(mysql, dbOptions, 'single'))
app.use(express.json())

app.get('/', (req, res)=>{
    res.send('Welcom To My API')
})

app.use('/api', rutas)

app.listen(app.get('port'), ()=>{
    console.log('Server Running on Port', app.get('port'))
})
