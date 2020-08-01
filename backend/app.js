const express = require('express');

const db = require('./db');
const gradeRoutes = require('./controllers/gradeController');

const app = express();

const PORT = process.env.PORT || 3000;

// Body parsing as JSON
const bodyParser = require('body-parser');
app.use(bodyParser.json());

// Enable cors
app.use('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from

    // Allowed headers
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );

    // Allowed request methods
    res.setHeader(
        "Access-Control-Request-Methods",
        "GET, POST, PUT"
    );
    next();
});

app.use('/marks', gradeRoutes);

app.listen(PORT , console.log(`server started at ${PORT}`));
