

function convertDate (input) {
    if (parseInt(input).toString().length === input.length ) {
    // assume it is a timestamp
        var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        var inputMilliseconds = input * 1000; 
        var toDate = new Date(inputMilliseconds).getDate(); 
        var toMonth = new Date(inputMilliseconds).getMonth(); 
        var month = months[toMonth];
        var toYear = new Date(inputMilliseconds).getFullYear(); 
        var fullDate = `${month} ${toDate}, ${toYear}`;
        var fullDateString = `Date: ${fullDate}`
        console.log('Date.js fullDate: ',fullDate);
        console.log('a ', typeof fullDate);
        if (typeof fullDate === 'string') {
            return {
            fullDateString, 
            timestampString:`Timestamp: ${input}`
            };
        } else if (typeof fullDate === 'undefined' || 'NaN') {
            return {
                fullDateString: 'Date: null',  
                timestampString: 'Timestamp: null'
            }
        }
        
         

    } else {
        //it is a date
        var timestamp = String(new Date(input).getTime() / 1000);
        console.log('1', timestamp)
        console.log('2 ', typeof timestamp); 
        if (typeof timestamp !== 'string') {
            return {fullDateString: null,  
            timestampString: null
            }
        }
        console.log('3 ', timestamp);
        return {
            fullDateString: `Date: ${input}`,  
            timestampString:`Timestamp: ${timestamp}`
        };
    }
}

module.exports.convertDate = convertDate; 






// var input = '111111111111'; 
// var date = '12-6-1989';

// console.log(parseInt(input).toString().length);
// console.log(input.length);
// console.log(parseInt(date).toString().length);
// console.log(date.length);

