var express = require('express')
var app     = express()
var port    = 3000

app.set('view engine', 'jade')
app.use(express.static('public'))

app.get('/', function (req, res) {
  res.render('index', { title: 'Home' })
})

// app.use( function (req, res, next) {
//   res.status(404).render('err', { status: '404' });
//   res.status(500).render('err', { status: '500' });
// })

app.listen(port, function (err) {
  if (err) return console.log('Hubo un error'), process.exit(1)
  console.log('React Test App listening on port '+ port + '!\n')
})
