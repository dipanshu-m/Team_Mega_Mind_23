// require other routes
const authRoutes = require('./routes/authRoutes');

const express = require('express');
const app = express();

// sets view engine to ejs
app.set("view engine", "ejs");

// 
app.use(express.urlencoded({extended: false}))
app.use(express.json());

// declares file types as statics
app.use('/', express.static('public'));
// app.use('/scripts/', express.static('./views/scripts'));
app.use('/styles/', express.static('styles'));
app.use('/script/', express.static('scripts'));

// start server
const port = process.env.PORT || 5001;
app.listen(port, () => {
    console.log(`Listening on http://localhost:${port}/`);
});

app.get('/', (request, resolve) => {
    resolve.render('index')
});

app.use('/auth', authRoutes)

app.get('*', (request, resolve) => {
    resolve.send('404');
});