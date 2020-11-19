export function convertTask(statusId){
    return statusId == 1 ? 'Aberto' : statusId == 2 ? 'Em atendimento' : statusId == 4 ? 'Finalizado' : 'Bloqueado';
}

export function convertTaskNumber(statusId){
    return statusId == 'Aberto' ? 1 : statusId == 'Em atendimento' ? 2 : statusId == 'Finalizado' ? 4 : 3;
}

export function convertTaskList(taskList){

    let taskItem;
    let newTaskList = [];

    taskList.forEach(element => {

        taskItem = {
            id: element.idChamado,
            title: element.titulo,
            date: element.dataTermino,
            clientName: element.empresa.nome,
            statusId: element.statusId,
            description: element.descricao,
        }

        newTaskList.push(taskItem);
    });


    return newTaskList;
}