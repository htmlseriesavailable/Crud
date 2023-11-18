// //imports
// require('dotenv').config();
// const express = require('express');
// const mongoose = require('mongoose');
// const session = require('express-session');

// const app = express();
// const PORT = process.env.PORT || 4000;

// //database connection
// mongoose.connect(process.env.DB_URI, {useNewUrlParser:true});
// const db = mongoose.connection;
// db.on('error',(err) =>{console.error('MongoDB connection error:',err);});
// db.once('open', ()=> console.log('Connected to the database'));

// //milddlewares
// app.use(express.urlencoded({extended: false}));
// app.use(express.json());

// app.use(
//     session({
//     secret: `my secret key`,
//     saveUninitialized: true,
//     resave: false,
// })
// );

// app.use((req, res, next)=>{
// res.locals.message = req.session.message;
// delete req.session.message;
// next();
// });

// app.use(express.static("upload"));

// //set template engine
// app.set("view engine", "ejs");

// // routr prifex
// app.use("", require("./routes/routes"));

// app.listen(PORT, ()=> {
//     console.log(`server started at http://localhost:${4000}`);
// });

// Imports
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const session = require('express-session');

const app = express();
const PORT = process.env.PORT || 4000;

// Database connection
mongoose.connect(process.env.DB_URI, { useNewUrlParser: true }); // Fixed "useNewParser" to "useNewUrlParser"
const db = mongoose.connection; // Fixed "Connection" to "connection"
db.on('error', (err) => {
    console.error('MongoDB connection error:', err);
});
db.once('open', () => console.log('Connected to the database'));

// Middlewares
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(
    session({
        secret: 'my secret key',
        saveUninitialized: true,
        resave: false,
    })
);

app.use((req, res, next) => {
    res.locals.message = req.session.message;
    delete req.session.message;
    next();
});

app.use(express.static('upload'));

// Set template engine
app.set('view engine', 'ejs');

// Route prefix
app.use('/', require('./routes/routes'));

app.listen(PORT, () => { // Use the PORT variable instead of hardcoding 4000
    console.log(`Server started at http://localhost:${PORT}`);
});