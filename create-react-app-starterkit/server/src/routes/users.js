import express from 'express';
import validateInput from '../shared/validations/register'

import bcrypt from 'bcrypt';

import User from '../models/user';

let router = express.Router();

router.post('/', (req,res) => {

  const { error, isValid } = validateInput(req.body);

  if(isValid) {
    const { email, password, timezone } = req.body;
    const password_digest = bcrypt.hashSync(password, 10);

    User.forge({ email, timezone, password_digest }, {hasTimestamps : true}).save()
    .then(user => res.json({ success: true} ))
    .catch(error => res.status(500).json({ error: error }));
  }
  else {
    res.status(400).json(errors);
  }
});


export default router;
