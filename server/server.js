const express = require('express')
const mongoose = require('mongoose')
const cookieParser = require('cookie-parser')
const cors = require('cors')

//create a database connection
mongoose.connect('mongodb+srv://argunali:Hrrn151263.@cluster0.6suji.mongodb.net/')
    .then(() =>console.log('MongoDB connected'))
    .catch((error) => console.error(error));

const app = express();
const PORT = process.env.PORT || 5000;

app.use(
    cors({
        origin: 'http://localhost:5173/',
        methods: ['GET', 'POST', 'PUT', 'DELETE'],
        allowedHeaders : ['Authorization', 'Content-Type', 'Cache-Control', 'Expires', 'Pragma', ''],
        credentials: true
    })
)

app.use(cookieParser());
app.use(express.json());

app.listen(PORT, ()=>console.log(`Server is now running on port ${PORT}`));