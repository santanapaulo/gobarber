const server = require('./server');

server.listen(process.env.PORT || 3000);

// app.get('/', (req, res) => {
//   return res.render('list', {
//     name: 'Diego',
//     users
//   });
// });

// app.get('/new', (req, res) => {
//   return res.render('new');
// });

// app.post('/create', (req, res) => {
//   console.log(req.body)
//   users.push(req.body.user);
//   return res.redirect('/');
// });
