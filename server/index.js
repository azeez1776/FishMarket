const { application } = require('express')
const express = require('express')

const port = 5000;
const app = express();

app.use(express.json({ extended: false }))

app.get('/', (req, res) => {
    res.send('Welcome')
})

app.listen(port, () => {
    console.log(`Listening in port ${port}`)
})