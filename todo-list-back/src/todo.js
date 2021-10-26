let express = require('express');

// creating express router 
let router = express.Router();  

router.post('/todo', (req, res) => {
    res.status(201).json({
        name: 'sleep',
        status: false
    });
} );

router.get('/todo', (req, res) => {
        res.json([{
            name: 'awake',
            status: false
        }]);
} );

module.exports = router;