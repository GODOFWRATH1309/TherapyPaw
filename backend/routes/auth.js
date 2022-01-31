const express = require("express");
const router = express.Router();
const User = require('../modules/User');
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
var fetchUser = require("../middleware/fetchuser");


const JWT_SECRET = "harry is a good boy";

//Route 1:create a user using:post "/api/auth/createuser". no login required

router.post('/createuser', [
  body('email', 'enter a valid email').isEmail(),
  body('name', 'enter a valid name').isLength({ min: 3 }),
  body('password', 'password atleast 5 character').isLength({ min: 5 }),
],


  async (req, res) => {
    //if there are errors, return bad request and the errors
    const errors = validationResult(req);


    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }


    //check whether the user with this email exists already
    try {


      let user = await User.findOne({ email: req.body.email });


      if (user) {
        return res.status(400).json({ error: "sorry a user with email already exists" })
      }


      const salt = await bcrypt.genSalt(10);
      const secPass = await bcrypt.hash(req.body.password, salt)


      user = await User.create({
        name: req.body.name,
        password: secPass,
        email: req.body.email,
      })


      //   .then(user => res.json(user))
      //   .catch(err=> {console.log(err)
      // res.json({error:'please enter a unique value for email',message: err.message})})      
      // res.json(user)

      const data = {
        user: {
          id: user.id
        }
      };
      const authToken = jwt.sign(data, JWT_SECRET);
      res.json({ authToken })

    } catch (error) {

      console.error(error.message);
      res.status(500).send('some error occured');
    }

  })

// ROUTE 2: Authenticate a User using: POST "/api/auth/login". No login required
router.post('/login', [
  body('email', 'Enter a valid email').isEmail(),
  body('password', 'Password cannot be blank').exists(),
], async (req, res) => {
  let success = false;
  // If there are errors, return Bad request and the errors
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { email, password } = req.body;
  try {
    let user = await User.findOne({ email });
    if (!user) {
      success = false
      return res.status(400).json({ error: "Please try to login with correct credentials" });
    }

    const passwordCompare = await bcrypt.compare(password, user.password);
    if (!passwordCompare) {
      success = false
      return res.status(400).json({ success, error: "Please try to login with correct credentials" });
    }

    const data = {
      user: {
        id: user.id
      }
    }
    const authtoken = jwt.sign(data, JWT_SECRET);
    success = true;
    res.json({ success, authtoken })

  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }

});

//Route 3: Get user detail using:post "/api/auth/getuser".  login required

router.post('/getuser', fetchUser, async (req, res) => {

  try {

    userId = req.user.id;
    const user = await User.findById(userId).select('-password')
    res.send(user)
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal error occured");
  }
})





module.exports = router