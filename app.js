const express = require('express')
const carRoutes = require('./routes/cars')
const bodyParser = require('body-parser')
const app = express();



app.use(bodyParser.json())

app.use('/api/v1', carRoutes)



const PORT = 5000
app.listen(PORT, () => {
    console.log(`Serving on port ${PORT}`)
})