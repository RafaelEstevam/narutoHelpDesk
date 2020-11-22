export function convertTask(statusId){
    return statusId == 1 ? 'Aberto' : statusId == 2 ? 'Iniciado' : statusId == 3 ? 'Finalizado' : 'Bloqueado / Cancelado';
}

export function convertTaskNumber(statusId){
    return statusId == 'Aberto' ? 1 : statusId == 'Iniciado' ? 2 : statusId == 'Finalizado' ? 3 : 4;
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
            status: element.statusNome,
            description: element.descricao,
        }

        newTaskList.push(taskItem);
    });


    return newTaskList;
}