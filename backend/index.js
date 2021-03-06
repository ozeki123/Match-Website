const express = require('express');
const app = express();
const dotenv = require('dotenv');
const userRoute = require("./routes/user");

const mongoose = require('mongoose');

dotenv.config();

mongoose.connect(process.env.MONGO_URL)
    .then(() => console.log('DB Connection Successful'))
    .catch((err) => {
        console.log(err);
    });

app.use(express.json());
app.use('/api/users', userRoute);

app.listen(process.env.PORT || 5000, () => {
    console.log('server is running');
})