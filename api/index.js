const express = require('express');
const cors = require('cors');
const { default: mongoose } = require('mongoose');
require('dotenv').config()
const bcrypt = require('bcryptjs');
const User = require('./models/User.js')
const app = express();

const bcryptSalt = bcrypt.genSaltSync(10);

app.use(express.json())
app.use(cors({
    credentials: true,
    origin: 'http://127.0.0.1:5173',
}))

console.log(process.env.MONGO_URL);
mongoose.connect(process.env.MONGO_URL);

app.get('/test', (req, res) => {
    res.json('test ok')
})

// ilXnKtiuZytiiStM : mk data mongodb
app.post('/register', async (req, res) => {
    const { name, password, email } = req.body
    const userDoc = await User.create({
        name,
        email,
        password: bcrypt.hashSync(password, bcryptSalt),
    })


    res.json(userDoc)
})

app.listen(4000); 