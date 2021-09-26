const express = require('express')
const mongoose = require('mongoose')

const noteRoutes = require('./routes/notes')

const app = express()

app.use(express.json())
app.use('/note', noteRoutes)
const dbconnect = 'mongodb+srv://admin:LPOettKsbyO0Yj7Z@cluster0.sl1yj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
mongoose.connect(dbconnect, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    app.listen(process.env.PORT || 8080, () => {
        console.log('server running')
    })
}).catch(err => console.log(err))

