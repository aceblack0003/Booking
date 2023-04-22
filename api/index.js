const express = require('express');
const cors = require('cors')
const app = express();

app.use(express.json())
app.use(cors({
    credentials: true,
    origin: 'http://127.0.0.1:5173',
}))

app.get('/test', (req, res) => {
    res.json('test ok')
})

app.post('/register', (req, res) => {
    const { name, password, email } = req.body
    res.json({ name, password, email })
})

app.listen(4000); 