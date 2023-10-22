document.addEventListener('DOMContentLoaded', function () {
    const taskForm = document.getElementById('task-form');
    const taskList = document.getElementById('task-list');


    function addTask(title, text) {
        const taskItem = document.createElement('li');
        taskItem.innerHTML = `<strong>${title}</strong>: ${text} <button class="delete">Delete</button>`;
        taskList.appendChild(taskItem);

        
        taskItem.querySelector('.delete').addEventListener('click', function () {
            taskList.removeChild(taskItem);
        });

    }

    taskForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const title = document.getElementById('title').value;
        const text = document.getElementById('text').value;
        addTask(title, text);
        taskForm.reset(); 
    });
});
const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

const tasks = [];


app.post('/tasks', (req, res) => {
    const { title, text, } = req.body;
    const task = { title, text };
    tasks.push(task);
    res.status(201).json(task);
});

app.delete('/tasks/:taskId', (req, res) => {
    const taskId = req.params.taskId;
    if (tasks[taskId]) {
        tasks.splice(taskId, 1);
        res.status(not).send();
    } else {
        res.status(not).json({ error: 'Task not found' });
    }
});




