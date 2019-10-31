const tarefas = require('../models/tarefas.json');

exports.get = (req, res) => {
    res.status(200).send(tarefas);
}

exports.getById = (req, res) => {
    const id = req.params.id;

    if (id > tarefas.length || id <= 0) {
        res.status(404).send('Iti, esse ID aí não tem não.');
    }
    const tarefa = tarefas.find(tarefa => tarefa.id == id);
    res.status(200).send(tarefa);
}

exports.getConcludedTasks = (req, res) => {
    const tarefasConcluidas = tarefas.filter(tarefa => tarefa.concluido == "true");
    res.status(200).send(tarefasConcluidas);
}

exports.getByName = (req, res) => {
    const colaborador = req.params.colaborador;
    const encontrarColaborador = tarefas.find(tarefa => tarefa.nomeColaborador == colaborador);

    if (!encontrarColaborador) {
        res.status(404).send('Opa! Essa pessoa aí não tem na base. Confere se não esqueceu a letra maiúscula na primeira letra do nome. :)');
    }

    res.status(200).send(encontrarColaborador);
}
