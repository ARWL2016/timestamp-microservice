
// // var unix = Date.parse(date);

var input = 'June 20 1985'; 
// var input = '488041200'; 

function convertDate (input) {
    if (parseInt(input).toString().length === input.length ) {
    // it is a timestamp
        var inputMilliseconds = input * 1000; 
        var toDate = new Date(inputMilliseconds).getDate(); 
        var toMonth = new Date(inputMilliseconds).getMonth() + 1; 
        var toYear = new Date(inputMilliseconds).getFullYear(); 
        var fullDate = `${toMonth}/${toDate}/${toYear}`;
        var fullDateString = `The natural language date is ${fullDate}`
        console.log('Date.js fullDate: ',fullDate);
        return fullDateString; 

    } else {
        //it is a date
        var timestamp = new Date(input).getTime() / 1000;
        console.log('Date.js timestamp: ', timestamp);
        var timestampString = `The unix timestamp is ${timestamp}`;
        return timestampString; 
    }
}

module.exports.convertDate = convertDate; 






// var input = '111111111111'; 
// var date = '12-6-1989';

// console.log(parseInt(input).toString().length);
// console.log(input.length);
// console.log(parseInt(date).toString().length);
// console.log(date.length);

