import express from 'express';
import commonValidations from '../shared/validations/register'

import bcrypt from 'bcrypt';

import User from '../models/user';

let router = express.Router();


function validateInput(data, otherValidations) {
  let { errors } = otherValidations(data);

  User.where({email: data.email}).fetch().then(user => {
    if (user) { errors.email = 'This email already exists'; }
  })
}
router.post('/', (req,res) => {

  validateInput(req.body, commonValidations).then(({errors, isValid}) => {
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

});

export default router;
