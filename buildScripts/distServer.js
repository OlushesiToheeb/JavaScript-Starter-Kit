import  express  from 'express';
import  path  from 'path';
import  open  from 'open';
import compression from 'compression';

/* eslint-disable no-console */

const  port = 8080;
const  app = express();

app.use(compression());
app.use(express.static('dist'));

app.get('/users', function(req, res){
  res.json([
    {"id":1, "firstName":"Bob", "lastName":"Smith", "email": "ot@gmail.com"},
    {"id":2, "firstName":"alice", "lastName":"joe", "email": "wazo@gmail.com"}
  ])
})

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '../dist/index.html'))
});

app.listen(port, function(err){
  err ? console.log(err) : open('http://localhost:' + port )
})
