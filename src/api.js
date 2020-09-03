const express = require('express');
const cors = require('cors');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

var todoSchema = mongoose.Schema({
  name: String,
  id: Number,
  createdAt: String,
  todo: Boolean,
});

let todoList = mongoose.model('todo', todoSchema);

mongoose.connect('mongodb://localhost:27017/todoList', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.post('/todo', async (req, res) => {
  var todo = new todoList(req.body);
  todo.save();
  res.status(200);
  res.send(todo);
});

app.get('/todo', async (req, res) => {
  todoList.find((err, todos) => {
    if (err) {
      console.log(err);
    } else {
      res.send(todos);
    }
  });
});

app.get('/todo:id', async (req, res) => {
  var id = req.params.id;
  todoList.findById(id, (err, todo) => {
    res.send(todo);
  });
});

app.put('/todo/:id', async (req, res) => {
  let todoId = await todoList.findOne({ id: req.params.id });
  await todoList.updateOne(
    { id: req.params.id },
    { $set: { todo: !todoId.todo } }
  );
  res.send(todoId);
});

app.listen(5000, () => {
  console.log('Server has started!');
});
