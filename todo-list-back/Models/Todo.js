
var mongoose=require('mongoose');
  
var TodoSchema = new mongoose.Schema({
    name: { type: String, required: true },
    status: { type: Boolean, required: true }
});
  
module.exports = mongoose.model(
    'todo', TodoSchema, 'Todos');