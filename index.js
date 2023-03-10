const express = require('express');
const app = express();
const port = 3008;
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const authRoute = require('./routes/auth');
const postRoute = require('./routes/post');
dotenv.config();
mongoose.connect(
    process.env.CONNECT,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
},()=>
console.log('Connected to DB!'))



app.use(express.json());
app.use('/api/user', authRoute);
app.use('/api/posts', postRoute);


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});