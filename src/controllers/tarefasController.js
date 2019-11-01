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

// exports.getNewerToOlder = (req, res) => {
//     const data = tarefas.filter(item => item.dataInclusao);
//     const arrData = data.split("/");

//     console.log(arrData)

//     /*exports.getAge = (req, res) => {
//         const id = req.params.id
//         const aluna = alunas.find(item => item.id == id)
//         const dataNasc = aluna.dateOfBirth
//         const arrData = dataNasc.split("/")
//         const dia = arrData[0]
//         const mes = arrData[1]
//         const ano = arrData[2]
//         const idade = calcularIdade(ano, mes, dia)
//         res.status(200).send({ idade })
//     } */


//     res.status(200).send();
// }