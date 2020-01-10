const { Router } = require('express');
const router = Router();
router.get('/welcome', (req, res) => {
    res.status(200).send({
        status: 200,
        data: {
            message: 'Welcome to my-agent' 
        }
    })
  });
module.exports = router;