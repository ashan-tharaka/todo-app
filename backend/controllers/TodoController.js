const Todo=require('../models/TodoModel');
const mongoose=require('mongoose');


//get all workouts
const getTodos=async(req,res)=>{
    const todos=await Todo.find({}).sort({createdAt:-1})
     res.status(200).json(todos);

}

//get a single workout

const getTodo=async(req,res)=>{
    const {id}=req.params;
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:"No such todo"})
    }

    const todo=await Todo.findById(id);

    if(!todo){
        return res.status(404).json({error:"No such todo"});

    }

    res.status(200).json(todo);




}

//create a new workout

const createTodo=async(req,res)=>{
    const{title,content}=req.body;

    //add doc to db


    try{
        const todo=await Todo.create({title,content});
        res.status(200).json(todo);

    }
    catch(error){
        res.status(400).json({error:error.message})


    }
}

//delete a workout

const deleteTodo=async (req,res)=>{
    const {id}=req.params;

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:"No such workout"})
    }

    const todo=await Todo.findOneAndDelete({_id:id});

    if(!todo){
        return res.status(400).json({error:"No such workout"});

    }

    res.status(200).json(todo);
}


//update a workout
const updateTodo=async(req,res)=>{
    const{id}=req.params;

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:"No such workout"})
    }

    const todo=await Todo.findOneAndUpdate({_id:id},{
       ...req.body

    });

    if(!todo){
        return res.status(400).json({error:"No such workout"});
        }

        res.status(200).json(todo)


}


module.exports={
    getTodo,
    getTodos,
    createTodo,
    deleteTodo,
    updateTodo
    

}