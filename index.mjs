import express from 'express';

const app = express()

app.get('/', (req, res) => {
    res.send('👋I am Ariba Memon Welcome to my Express.js server')
})
app.get('/milk', (req, res) => {
    res.send('here is your milk 🥛')
})
app.get('/tea', (req, res) => {
    res.send('here is your tea ☕')
})

app.listen(5000, () => {
    console.log(`Hello server is listening at http://localhost:5000`)
})