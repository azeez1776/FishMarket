const express = require('express')
const connectDB = require('../server/config/db')
const cors = require('cors');
connectDB()

let corsOptions = {
    origin: 'http://example.com',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

app.use(cors(corsOptions))


const port = 5000;
const app = express();

app.use(express.json({ extended: false }))
app.use('/api/items', require('./routes/Item'))

app.get('/', (req, res) => {
    res.send('Welcome')
})


app.listen(port, () => {
    console.log(`Listening in port ${port}`)
})