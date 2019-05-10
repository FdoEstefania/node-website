const express = require('express');
const app = express();
//const morgan = require('morgan');
const path = require('path');

app.set('port', process.env.PORT || 4000);

app.set('views', path.join(__dirname, 'views'));

// Extencion de paginas
// app.engine('html', require('ejs').renderFile);

app.set('view engine', 'ejs');

app.use(require('./routes/'));

// static files
app.use(express.static(path.join(__dirname, 'public')));

app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
});