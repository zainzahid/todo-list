let express = require('express');
let Todo = require('../Models/Todo')

// creating express router 
let router = express.Router();  

router.post('/todo', (req, res) => {
    let newTodo = new Todo();
    newTodo.name = req.body.name
    newTodo.status = req.body.status

    newTodo.save(function(err, data) {
        if(err) {
            res.status(500).json({
                status: 'Error',
                message: err
            });
            return;
        }
        res.status(201).json(data);
    });
} );

router.get('/todo', (req, res) => {
    Todo.find(function(err, data) {
        if(err){
            res.status(500).json({
                status: 'Error',
                message: err
            });
            return;
        }
        res.status(200).json(data);
    });  
} );

module.exports = router;