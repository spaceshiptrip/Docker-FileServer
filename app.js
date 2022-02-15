const express = require('express')
const serveIndex = require('serve-index');

const app = express()
const port = 3000

// app.get('/', (req, res) => {
  // res.send('Hello World!! From your Simple Express Web-Server!')
// })


// app.use(express.static( "public"));
app.use('/public', express.static('public'),serveIndex('public', {'icons':true}));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

//app.use(express.static(__dirname + "/"))
//app.use('/videos', serveIndex(__dirname + '/videos'));

