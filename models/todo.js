const mongoose = require(`mongoose`);
const Schema = mongoose.Schema;

//Creating Schema for Todo
const TodoSchema = new Schema({
    action: {
        type: String,
        required: [true, `The todo text field is required`]
    }
});

//Create Model for todo
const Todo = mongoose.model(`todo`, TodoSchema);

module.exports = Todo;