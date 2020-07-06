import  express  from 'express';
import  path  from 'path';
import  open  from 'open';
import webpack from 'webpack';
import config from '../webpack.config.dev';

/* eslint-disable no-console */

const  port = 8080;
const  app = express();
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')( compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.get('/users', function(req, res){
  res.json([
    {"id":1, "firstName":"Bob", "lastName":"Smith", "email": "ot@gmail.com"},
    {"id":2, "firstName":"alice", "lastName":"joe", "email": "wazo@gmail.com"}
  ])
})

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '../src/index.html'))
});

app.listen(port, function(err){
  err ? console.log(err) : open('http://localhost:' + port )
})
