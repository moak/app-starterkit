import express from 'express';
import path from 'path';

let app = express();

app.get('/', function(req, res){
  res.sendFile(path.join(__dirname, './index.html'));
});

app.listen(3000);
