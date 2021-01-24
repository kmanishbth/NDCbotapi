const express = require('express');
const router = express.Router();




//  ....................... Route  ...................
router.get('/hi',  (req,res) => res.send("Hello from server"));


module.exports = router;
