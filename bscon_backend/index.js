const express = require('express')
const app = express()
const cors = require('cors')

app.use(express.json())
app.use(cors())

const db = require ('./models')

const bsdevsRouter = require('./routes/bsdevs')
app.use('/bsdevs', bsdevsRouter)


db.sequelize.sync().then(()=>{
    app.listen(1111, ()=>{
        console.log('server running at port 1111')
    })
})