import moment from 'moment'

export function validatePicoYPlaca(plate, date) {
    const today = new Date(date);   
    var lastDigit = plate.substr(plate.length -1);  
    if(validateDaysPicoYPlaca(today.getDay() + 1, lastDigit )) {  
        return true
    }
    return false;
}


export function validateDaysPicoYPlaca(day, lastDigit) {    
    if(day == 1) {
        const plates = [1,2]
        if(!validateRestriction(plates, lastDigit)) 
            return false;
    }
    else if (day == 2) {        
        const plates = [3, 4]
        if (!validateRestriction(plates, lastDigit)) {           
            return false;
        }
    }            
    else if( day == 3){
        const plates = [5,6]
        if(!validateRestriction(plates, lastDigit)) 
            return false;
    }
    else if( day == 4){
        const plates = [7,8]
        if(!validateRestriction(plates, lastDigit)) 
            return false;
    }
    else if( day == 5) {
        const plates = [9,0]
        if(!validateRestriction(plates, lastDigit)) 
            return false;    
    }

    return true;
}

function validateRestriction( plates, lastDigit){    
    const restriction = plates.filter((x) => { return x == lastDigit; })   
    if(restriction.length > 0) {
        
        return false;
    }
    return true;
}

export function validateMorning(hours) {
    var format = 'hh:mm:ss'    
    var currentTime = moment(hours+':00',format)
    console.log(currentTime)
    var hourStartMorning = moment('07:00:00', format)
    var hourFinishMorning = moment('09:30:00', format)
    if (currentTime.isBetween(hourStartMorning, hourFinishMorning)) {
        return false     
    } 
    return true;           
}

export function validateAfternoon(hours) {
    var format = 'hh:mm:ss'    
    var currentTime = moment(hours+':00',format)
    var hourStartAfternoon = moment('16:00:00', format)
    var hourFinishAfternoon = moment('19:30:00', format)
    if (currentTime.isBetween(hourStartAfternoon, hourFinishAfternoon)) {
        return false     
    } 
    return true;           
}