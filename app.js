if(process.env.NODE_ENV !== 'production'){
    require('dotenv').config();
}
const express = require('express');
const app = express();
const port = process.env.PORT;
const mongoose = require('mongoose');
const path = require('path');
const ejs = require('ejs');


async function main() {
    console.log(`app is starting...`)
    const MONGODB_URI = process.env.MONGODB_URI;
    await mongoose.connect(MONGODB_URI);
    console.log(`Connected to MongoDB at ${MONGODB_URI}`);
}
main().then(() => {
    app.listen(port, ()=>{
        console.log(`Server is running on http://localhost:${port}`);
    })
});

app.set('view engine', 'ejs');
app.set('views',path.join(__dirname, 'views'));

app.get('/', (req, res)=>{
//    res.send('request received at /')
res.render('index', {title: 'Vertex'})
})