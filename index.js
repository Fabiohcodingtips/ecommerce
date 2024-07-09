const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
// // allow url encoding
// router.use(express.urlencoded({extened:true}));


// define routes
const userRoutes = require('./route/UserRoute');
const productRoutes = require('./route/ProductRoute');

// connect to db
if (process.env.NODE_ENV !== 'production'){
    require('dotenv').config();({
        path: './.env'
    });
}

const port = process.env.PORT;
const dbconnection = process.env.MONGOURL;
const app = express(); 
app.use(cors());
app.use(express.json());


app.listen(port, (req,res)=>{
    console.log(`Server is runnning on port ${port}`);
    console.log(`Database url is: ${dbconnection}`)
})

// connect to db
mongoose.connect(dbconnection, {useNewUrlParser:true, useUnifiedTopology:true})
.then(()=> console.log('Connected to Mongodb'))
.catch(err => console.log('connection failed',err));

// create api routes
app.use('/api/user', userRoutes);
app.use('/api/product', productRoutes);