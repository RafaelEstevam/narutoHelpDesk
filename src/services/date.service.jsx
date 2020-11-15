export function getCurrentDate(separator=''){

    let newDate = new Date();
    let date = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();
    
    return `${year}${separator}${month<10?`0${month}`:`${month}`}${separator}${date}`
}

export function convertDate(separator, getDate){
    let newDate = getDate;
    let date = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();
    return `${date}${separator}${month<10?`0${month}`:`${month}`}${separator}${year}`
}

export function convertDateDefault(separator, getDate){
    let newDate = getDate;
    let date = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();

    console.log(month);
    
    switch(month){
        case 1:
            month = 'Janeiro';
            break;
        case 2:
            month = 'Fevereiro';
            break;
        case 3:
            month = 'Março';
            break;
        case 4:
            month = 'Abril';
            break;
        case 5:
            month = 'Maio';
            break;
        case 6:
            month = 'Junho';
            break;
        case 7:
            month = 'Julho';
            break;
        case 8:
            month = 'Agosto';
            break;
        case 9:
            month = 'Setembro';
            break;
        case 10:
            month = 'Outubro';
            break;
        case 11:
            month = 'Novembro';
            break;
        case 12:
            month = 'Dezembro';
            break;
    }

    return `${date}${separator}${month<10?`0${month}`:`${month}`}${separator}${year}`
}

export function getCurrentDateDefault(){
    return convertDateDefault(' de ', new Date);
}

export function getDateTime(){
    return new Date().getTime();
}

export function getDate(){
    return new Date().getTime();
}

export function millisecondsToDate(milliseconds){
    let date = new Date(milliseconds);
    return convertDate('/', date);
}

export function millisecondsToDateDefault(milliseconds){
    let date = new Date(milliseconds);
    return convertDateDefault('-', date);
}

export function reformatDate(dateStr){
    if(dateStr){
        let dArr = dateStr.split("-"); 
        return dArr[2]+ "-" +dArr[1]+ "-" +dArr[0];
    }
}