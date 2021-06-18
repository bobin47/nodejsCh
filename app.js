const express = require('express');
const logger = require('morgan');

const app = express();

const usersRoute = require('./routes/users');
const moveRoute = require('./routes/movie');
const port = 3000;

//app.use(logger('dev'));

app.use('/', usersRoute);
app.use('/', moveRoute);

// app.use((req, res, next) => {
//   const err = new Error('Not Found');
//   err.status = 404;
//   next(err);
// });

// app.use((req, res, next) => {
//   const error = app.get('env') === 'development' ? err : {};
//   const status = err.status || 500;

//   res.status(status).json({
//     error: {
//       message: error.message,
//     },
//   });
// });

app.get('/', (req, res) => {
  return res.status(200).json({
    message: 'Server is Ok(up data)',
  });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
