const express = require('express');
const cors = require('cors');
const verifyAdmin = require('./controllers/verifyadmin');
require('dotenv').config();
const port = process.env.PORT;
const adminRouter = require('./routes/admin');
const mongoose = require('mongoose');
const adminLogin = require('./controllers/admin');
const MongoUrl = process.env.MongoUrl;
 const app = express();



 app.use(express.json());
app.use(cors());
console.log(MongoUrl)
mongoose.connect(MongoUrl).then(() => {
    console.log("Connected to MongoDB");
}).catch(err => {
    console.error("Connection error", err);
});

app.post('/api/admin/login', adminLogin); 
app.use('/api/admin',verifyAdmin);


app.listen(port,()=>{
    console.log("listening on port 4000")
})