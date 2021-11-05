const express = require('express')
const connectDB = require('../server/config/db')
const cors = require('cors');
connectDB()

var corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200
}



const port = 5000;
const app = express();

app.use(cors(corsOptions))
app.use(express.json({ extended: false }))
app.use('/api/items', require('./routes/Item'))

app.get('/', (req, res) => {
    res.send('Welcome')
})


app.listen(port, () => {
    console.log(`Listening in port ${port}`)
})