const express = require('express')
const app = express()
const port = 5000

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/getcode', (req, res) => {
    res.send('Hello! This is /getcode .')
})

app.get('/plus/:a/:b', (req, res) => {
    try {
        let a = parseFloat(req.params.a);
        let b = parseFloat(req.params.b);
        if (isNaN(a) || isNaN(b)) {
            throw new Error('Invalid parameters');
        }
        res.send((a + b).toString());
    } catch (error) {
        res.status(400).send('Bad Request');
    }
})

const server = app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

module.exports = server