const express = require('express');
const app = express();
const router = express.Router();
const userDetails = require('../models/user');
const bcryptjs = require('bcryptjs');
// const jwt = require('jsonwebtoken');


// const authenticateUser = async (req, res, next) => {
//   try {
//     // Check if Authorization header is present
//     const authHeader = req.headers['authorization'];
//     if (!authHeader || !authHeader.startsWith('Bearer ')) {
//       return res.status(401).json({ message: 'Unauthorized' });
//     }

//     // Extract token from Authorization header
//     const token = authHeader.split(' ')[1];
//     if (!token) {
//       return res.status(401).json({ message: 'Unauthorized' });
//     }

//     // Verify token
//     const decoded = jwt.verify(token, 'your_secret_key');
//     if (!decoded) {
//       return res.status(401).json({ message: 'Unauthorized' });
//     }

//     // Check if user exists
//     const user = await userDetails.findById(decoded.userId);
//     if (!user) {
//       return res.status(401).json({ message: 'Unauthorized' });
//     }

//     // Attach user object to request for further processing
//     req.user = user;
//     next(); // Proceed to the next middleware
//   } catch (error) {
//     console.error('Error authenticating user:', error);
//     res.status(500).json({ message: 'Internal server error' });
//   }
// };

router.post('/register',async(req,res)=>{
  try{
    console.log(req.body);
    const hashpassword = await bcryptjs.hash(req.body.password,10)
    const theUser = await userDetails.create({
      name:req.body.name,
      email:req.body.email,
      phone:req.body.phone,
      password:hashpassword,
    })
    console.log(theUser);
    res.json({username:theUser.name})
  }
  catch(e){
    console.log(e);
  }
})

router.get('/users', async (req, res) => {
  try {
    const users = await userDetails.find({}, { password: 0 }); // Exclude password field from the response
    res.json(users);
  } catch (error) {
    console.error('Error fetching user registration information:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const userlogin = await userDetails.findOne({ email });
    if (!userlogin) {
      return res.status(400).json({ message: 'Invalid email or password' });
    }
    const passwordMatch = await bcryptjs.compare(password, userlogin.password);

    if (!passwordMatch) {
      console.log('Password match:', passwordMatch);

      return res.status(400).json({ message: 'Invalid email or password' });
    }

    // const token = jwt.sign({ userId: userlogin._id }, 'your_secret_key');
    
    console.log(userlogin);
    res.json({ userId: userlogin._id, username: userlogin.name}); 

  } catch (error) {
    console.error('Error logging in:', error);
    res.status(500).json({ message: 'Internal server error' }); // Handle server error
  }
});

module.exports = router;