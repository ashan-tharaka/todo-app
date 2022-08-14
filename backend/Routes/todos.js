const express=require('express');

const Todo=require('../models/TodoModel');
const {
    createTodo,
    getTodo,
    getTodos,
    deleteTodo,
    updateTodo
    
}=require('../controllers/TodoController');
const { updateMany } = require('../models/TodoModel');

const router=express.Router();


//GET ALL workouts
router.get('/',getTodos);

//GET a single workout

router.get('/:id',getTodo);

//POST a new workout

router.post('/',createTodo);

//delete a workout

router.delete('/:id',deleteTodo)
//update a workout

router.patch('/:id',updateTodo);

module.exports=router;
