import express from 'express';
import validateInput from '../shared/validations/register'

let router = express.Router();

router.post('/', (req,res) => {
  setTimeout( () =>  {
    const { errors, isValid } = validateInput(req.body);

    if(isValid) {
      res.json({success: true});
    }
    else {
      res.status(400).json(errors);
    }
  }, 1500);
});

export default router;
