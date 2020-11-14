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
    return `${year}${separator}${month<10?`0${month}`:`${month}`}${separator}${date}`
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