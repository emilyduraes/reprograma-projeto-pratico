const tarefas = require('../models/tarefas.json');

exports.getById = (req, res) => {
    const id = req.params.id;
    const tasks = tarefas.find(tasks => tasks.id == id);
    res.status(200).send(tasks);
}