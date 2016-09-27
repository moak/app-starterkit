import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';

import users from './routes/users';

let app = express();

app.use(bodyParser.json());

app.use('/api/users', users);

app.get('/*', function(req, res){
  res.sendFile(path.join(__dirname, './index.html'));
});

app.listen(3001, () => console.log('Running on 3001 friends !'));
