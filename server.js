const express = require('express');
const app = express();
var cors = require('cors');

app.use(express.json());
app.use(cors());

talks = [
    {
        id: 1,
        idChamado: 1,
        talkHistory: [
            {date: '09/09', hour: '18:45', content: 'Teste de conversa do ticket', userId: 1, image:'https://quatrorodas.abril.com.br/wp-content/uploads/2019/05/ferrari-sf90_stradale-2020-1600-05-e1582297299339.jpg?quality=70&strip=info&w=1024'},
            {date: '09/09', hour: '18:45', content: 'Teste de conversa do ticket', userId: 0, image:''},
            {date: '09/09', hour: '18:45', content: 'Teste de conversa do ticket', userId: 0, image:''},
            {date: '09/09', hour: '18:45', content: 'Teste de conversa do ticket', userId: 1, image:''},
            {date: '09/09', hour: '18:45', content: 'Teste de conversa do ticket', userId: 1, image:''},
            {date: '09/09', hour: '18:45', content: 'Teste de conversa do ticket', userId: 0, image:'https://quatrorodas.abril.com.br/wp-content/uploads/2019/05/ferrari-sf90_stradale-2020-1600-05-e1582297299339.jpg?quality=70&strip=info&w=1024'},
            {date: '09/09', hour: '18:45', content: 'Teste de conversa do ticket', userId: 0, image:'https://quatrorodas.abril.com.br/wp-content/uploads/2019/05/ferrari-sf90_stradale-2020-1600-05-e1582297299339.jpg?quality=70&strip=info&w=1024'},
            {date: '09/09', hour: '18:45', content: 'Teste de conversa do ticket', userId: 0, image:''},
            {date: '09/09', hour: '18:45', content: 'Teste de conversa do ticket', userId: 0, image:''},
            {date: '09/09', hour: '18:45', content: 'Teste de conversa do ticket', userId: 1, image:''},
            {date: '09/09', hour: '18:45', content: 'Teste de conversa do ticket', userId: 1, image:''},
            {date: '09/09', hour: '18:45', content: 'Teste de conversa do ticket', userId: 1, image:''},
        ]
    },
    {
        id: 2,
        idChamado: 2,
        talkHistory: [
            {date: '09/09', hour: '18:45', content: 'Teste de conversa do ticket', userId: 1, image:'https://quatrorodas.abril.com.br/wp-content/uploads/2019/05/ferrari-sf90_stradale-2020-1600-05-e1582297299339.jpg?quality=70&strip=info&w=1024'},
            {date: '09/09', hour: '18:45', content: 'Teste de conversa do ticket', userId: 0, image:''},
            {date: '09/09', hour: '18:45', content: 'Teste de conversa do ticket', userId: 0, image:''},
            {date: '09/09', hour: '18:45', content: 'Teste de conversa do ticket', userId: 1, image:''},
            {date: '09/09', hour: '18:45', content: 'Teste de conversa do ticket', userId: 1, image:''},
            {date: '09/09', hour: '18:45', content: 'Teste de conversa do ticket', userId: 0, image:'https://quatrorodas.abril.com.br/wp-content/uploads/2019/05/ferrari-sf90_stradale-2020-1600-05-e1582297299339.jpg?quality=70&strip=info&w=1024'},
            {date: '09/09', hour: '18:45', content: 'Teste de conversa do ticket', userId: 0, image:'https://quatrorodas.abril.com.br/wp-content/uploads/2019/05/ferrari-sf90_stradale-2020-1600-05-e1582297299339.jpg?quality=70&strip=info&w=1024'},
            {date: '09/09', hour: '18:45', content: 'Teste de conversa do ticket', userId: 0, image:''},
            {date: '09/09', hour: '18:45', content: 'Teste de conversa do ticket', userId: 0, image:''},
            {date: '09/09', hour: '18:45', content: 'Teste de conversa do ticket', userId: 1, image:''},
            {date: '09/09', hour: '18:45', content: 'Teste de conversa do ticket', userId: 1, image:''},
            {date: '09/09', hour: '18:45', content: 'Teste de conversa do ticket', userId: 1, image:''},
        ]
    },
    {
        id: 3,
        idChamado: 3,
        talkHistory: [
            {date: '09/09', hour: '18:45', content: 'Teste de conversa do ticket', userId: 1, image:'https://quatrorodas.abril.com.br/wp-content/uploads/2019/05/ferrari-sf90_stradale-2020-1600-05-e1582297299339.jpg?quality=70&strip=info&w=1024'},
            {date: '09/09', hour: '18:45', content: 'Teste de conversa do ticket', userId: 0, image:''},
            {date: '09/09', hour: '18:45', content: 'Teste de conversa do ticket', userId: 0, image:''},
            {date: '09/09', hour: '18:45', content: 'Teste de conversa do ticket', userId: 1, image:''},
            {date: '09/09', hour: '18:45', content: 'Teste de conversa do ticket', userId: 1, image:''},
            {date: '09/09', hour: '18:45', content: 'Teste de conversa do ticket', userId: 0, image:'https://quatrorodas.abril.com.br/wp-content/uploads/2019/05/ferrari-sf90_stradale-2020-1600-05-e1582297299339.jpg?quality=70&strip=info&w=1024'},
            {date: '09/09', hour: '18:45', content: 'Teste de conversa do ticket', userId: 0, image:'https://quatrorodas.abril.com.br/wp-content/uploads/2019/05/ferrari-sf90_stradale-2020-1600-05-e1582297299339.jpg?quality=70&strip=info&w=1024'},
            {date: '09/09', hour: '18:45', content: 'Teste de conversa do ticket', userId: 0, image:''},
            {date: '09/09', hour: '18:45', content: 'Teste de conversa do ticket', userId: 0, image:''},
            {date: '09/09', hour: '18:45', content: 'Teste de conversa do ticket', userId: 1, image:''},
            {date: '09/09', hour: '18:45', content: 'Teste de conversa do ticket', userId: 1, image:''},
            {date: '09/09', hour: '18:45', content: 'Teste de conversa do ticket', userId: 1, image:''},
        ]
    }
]

tasks = [
    {id: 3, titulo: 'ticket 1', descricao: 'Tarefa x', clientName: 'Cliente teste', cliente: '1', scheduleAlert: null, deliveryDate: '2020-09-05' , date: '2020-09-05', startDate: '2020-09-05', url: '/tickets/3', statusId: 'done'},
    {id: 3, titulo: 'ticket 1', descricao: 'Tarefa x', clientName: 'Cliente teste', cliente: '3', scheduleAlert: true, deliveryDate: '2020-09-05' , date: '2020-09-05', startDate: '2020-09-05', url: '/tickets/3', statusId: 'done'},
    {id: 3, titulo: 'ticket 1', descricao: 'Tarefa x', clientName: 'Cliente teste', cliente: '3', scheduleAlert: null, deliveryDate: '2020-09-05' , date: '2020-09-05', startDate: '2020-09-05', url: '/tickets/3', statusId: 'done'},
    {id: 4, titulo: 'ticket 2', descricao: 'Tarefa x', clientName: 'Cliente teste', cliente: '1', scheduleAlert: true, deliveryDate: '2020-09-05' , date: '2020-09-10', startDate: '2020-09-05', url: '/tickets/4', statusId: 'blocked'},
    {id: 5, titulo: 'ticket 2', descricao: 'Tarefa x', clientName: 'Cliente teste', cliente: '3', scheduleAlert: true, deliveryDate: '2020-09-05' , date: '2020-09-10', startDate: '2020-09-05', url: '/tickets/4', statusId: 'in-progress'},
    {id: 6, titulo: 'ticket 2', descricao: 'Tarefa x', clientName: 'Cliente teste', cliente: '2', scheduleAlert: null, deliveryDate: '2020-09-05' , date: '2020-09-10', startDate: '2020-09-05', url: '/tickets/4', statusId: 'to-do'},
    {id: 6, titulo: 'ticket 2', descricao: 'Tarefa x', clientName: 'Cliente teste', cliente: '2', scheduleAlert: null, deliveryDate: '2020-09-05' , date: '2020-09-10', startDate: '2020-09-05', url: '/tickets/4', statusId: 'to-do'},
]

tickets = [
    {idChamado: 1, cliente: 1, setor: 1,empresa:{nome: 'Estevam Design'}, statusId: 2, titulo: 'Tarefa de teste 1', dataInicio: '2020-09-02', dataTermino: '2020-11-05', descricao: 'Terminar projeto de sistema de chamados'},
    {idChamado: 2, cliente: 3, setor: 1,empresa:{nome: 'Estevam Design'}, statusId: 1, titulo: 'Tarefa de teste 2', dataInicio: '2020-09-02', dataTermino: '2020-11-10', descricao: 'Terminar projeto de sistema de chamados'},
    {idChamado: 3, cliente: 1, setor: 1,empresa:{nome: 'Estevam Design'}, statusId: 2, titulo: 'Tarefa de teste 3', dataInicio: '2020-09-02', dataTermino: '2020-11-10', descricao: 'Terminar projeto de sistema de chamados'},
    {idChamado: 4, cliente: 2, setor: 1,empresa:{nome: 'Estevam Design'}, statusId: 4, titulo: 'Tarefa de teste 4', dataInicio: '2020-09-02', dataTermino: '2020-11-05', descricao: 'Terminar projeto de sistema de chamados'},
    {idChamado: 5, cliente: 2, setor: 1,empresa:{nome: 'Estevam Design'}, statusId: 3, titulo: 'Tarefa de teste 5', dataInicio: '2020-09-02', dataTermino: '2020-11-05', descricao: 'Terminar projeto de sistema de chamados'},
    {idChamado: 6, cliente: 1, setor: 1,empresa:{nome: 'Estevam Design'}, statusId: 3, titulo: 'Tarefa de teste 6', dataInicio: '2020-09-02', dataTermino: '2020-11-10', descricao: 'Terminar projeto de sistema de chamados'},
    {idChamado: 7, cliente: 3, setor: 1,empresa:{nome: 'Estevam Design'}, statusId: 1, titulo: 'Tarefa de teste 7', dataInicio: '2020-09-02', dataTermino: '2020-11-10', descricao: 'Terminar projeto de sistema de chamados'},
]

users = [
    {id: 1, nome: 'Manager', lastName: 'teste', tipoUsuario: 1, email: 'manager@teste.com', password: 'teste0', confirm: 'teste0', doc: '000', zipCode: '000', address: '1', number: '11', complement: '1', neighborhood: '111', city: '1', state: '11'},
    {id: 2, nome: 'Cliente 1', lastName: 'teste', tipoUsuario: 3, email: 'client1@teste.com', password: 'teste1', confirm: 'teste1', doc: '111', zipCode: '111', address: '1', number: '11', complement: '1', neighborhood: '111', city: '1', state: '11'},
    {id: 3, nome: 'Cliente 2', lastName: 'teste', tipoUsuario: 3, email: 'client2@teste.com', password: 'teste2', confirm: 'teste2', doc: '222', zipCode: '222', address: '1', number: '11', complement: '1', neighborhood: '111', city: '1', state: '11'},
    {id: 4, nome: 'Cliente 3', lastName: 'teste', tipoUsuario: 3, email: 'client3@teste.com', password: 'teste3', confirm: 'teste3', doc: '333', zipCode: '333', address: '1', number: '11', complement: '1', neighborhood: '111', city: '1', state: '11'},
    {id: 5, nome: 'Cliente 4', lastName: 'teste', tipoUsuario: 3, email: 'client4@teste.com', password: 'teste4', confirm: 'teste4', doc: '444', zipCode: '444', address: '1', number: '11', complement: '1', neighborhood: '111', city: '1', state: '11'},
    {id: 6, nome: 'Cliente 5', lastName: 'teste', tipoUsuario: 3, email: 'client5@teste.com', password: 'teste5', confirm: 'teste5', doc: '555', zipCode: '555', address: '1', number: '11', complement: '1', neighborhood: '111', city: '1', state: '11'},
    {id: 7, nome: 'Cliente 6', lastName: 'teste', tipoUsuario: 3, email: 'client6@teste.com', password: 'teste6', confirm: 'teste6', doc: '666', zipCode: '666', address: '1', number: '11', complement: '1', neighborhood: '111', city: '1', state: '11'},
    {id: 8, nome: 'Cliente 7', lastName: 'teste', tipoUsuario: 3, email: 'client7@teste.com', password: 'teste7', confirm: 'teste7', doc: '777', zipCode: '777', address: '1', number: '11', complement: '1', neighborhood: '111', city: '1', state: '11'},
    {id: 9, nome: 'Cliente 8', lastName: 'teste', tipoUsuario: 3, email: 'client8@teste.com', password: 'teste8', confirm: 'teste8', doc: '888', zipCode: '888', address: '1', number: '11', complement: '1', neighborhood: '111', city: '1', state: '11'},
]

app.post('/pushs', function(request, response){
    console.log(request.body)
});

app.get('/usuario/listar', function(request, response){
    response.status(200).json(users);
});

app.get('/users/:id', function(request, response){
    const user = users.find((e) => request.params.id == e.id);
    response.status(200).json(user);
});

app.get('/users/:id/tickets/:status', function(request, response){
    var ticketsList = [];
    tickets.forEach(element => {
        if(request.params.id == element.cliente && request.params.status == element.status) {
            ticketsList.push(element);
        }
    });
    response.status(200).json(ticketsList);
});

app.get('/chamado/listar/:status', function(request, response){
    var ticketsList = [];
    tickets.forEach(element => {
        if(request.params.status == element.statusId) {
            ticketsList.push(element);
        }
    });
    response.status(200).json(ticketsList);
});

app.get('/chamado/listar', function(request, response){
    response.status(200).json(tickets);
});

app.get('/tickets/:id', function(request, response){
    const ticket = tickets.find((e) => request.params.id == e.idChamado);
    response.status(200).json(ticket);
});

app.get('/tickets/:id/talk/', function(request, response){
    const talk = talks.find((e) => request.params.id == e.idChamado);
    response.status(200).json(talk);
});

app.post('/sessions', function(request, response){
    const {email, password} = request.body;
    const userData = users.find(i => i.email == email && i.password == password);

    if(userData){
        response.status(200).json(userData);
    }else{
        response.status(400).json({message: 'User not found'});
    }

});

app.listen(3333, function(){
    console.log("✌ Server On ");
})

