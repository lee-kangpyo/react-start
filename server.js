var express = require('express');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var swtoolRouter = require('./routes/SwtoolRout');

var app = express();

// view engine setup

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/api/swtool', swtoolRouter);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening on port ${port}`));

//module.exports = app;
