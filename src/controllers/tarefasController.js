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
    const encontrarColaborador = tarefas.filter(tarefa => tarefa.nomeColaborador == colaborador);

    if (!encontrarColaborador) {
        res.status(404).send('Opa! Essa pessoa aí não tem na base. Confere se não esqueceu a letra maiúscula na primeira letra do nome. :)');
    }

    res.status(200).send(encontrarColaborador);
}

function converterData(data) {
    let arrData = data.split('/');
    
    let dataConvertida = new Date(arrData[2],arrData[1]-1,arrData[0]);
    // console.log("a dataConvertida é: " + dataConvertida);

    return dataConvertida;
}

exports.getSortedDate = (req, res) => {

    dataOrdenada = tarefas.sort((a, b) => {

        if (converterData((a.dataInclusao)) > converterData((b.dataInclusao))) {
            return -1;
        } else if (converterData((a.dataInclusao)) < converterData((b.dataInclusao))) {
            return 1;
        }
        return 0;
    })

    res.status(200).send(dataOrdenada);
}

exports.getDiferença{
    
}