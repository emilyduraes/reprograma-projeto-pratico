const tarefas = require('../models/tarefas.json');

exports.get = (req, res) => {
    res.status(200).send(tarefas);
}

exports.getById = (req, res) => {
    const id = req.params.id;
    
    if(id > 4 || id <= 0){
        res.status(404).send('Iti, esse ID aí não tem não.');
    }
    const tarefa = tarefas.find(tarefa => tarefa.id == id);
    res.status(200).send(tarefa);
}