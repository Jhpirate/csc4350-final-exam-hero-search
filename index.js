const express = require('express');
const app = express();
const port = process.env.PORT || 3333;

// Body-parser middleware alternative
app.use(express.urlencoded({ extended: true }));

// set the view engine to pug and views dir to /Views
app.set('view engine', 'pug');
app.set('views', './views');

// Set public folder as static folder for css, js, images
app.use(express.static('public'));


// Start listening on port 3000
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});


// Export express app for controller
module.exports = app;

// Routes
let routes = require('./routes/routes');
routes(app);
