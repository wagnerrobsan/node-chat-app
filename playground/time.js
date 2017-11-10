var moment = require('moment');

// Jan 1st 1970 00:00:00 am
//0
// Jan 1st 1969 11:59:50 pm
//-10000
var date = moment();

console.log(date.format('MMMM Do YYYY, h:mm:ss a'));
console.log(date.format());
console.log(date.format('MMM Do YYYY hh:mm:ss a'));
date.add(2, 'year').subtract(9, 'months');
console.log(date.format('MMMM Do YYYY, h:mm:ss a'));

// 10:35 am
date.subtract(41, 'minutes');
console.log(date.format('h:mm a'));

var now = moment(new Date().getTime());

var sometimeNow = moment().valueOf();
console.log(sometimeNow);

var createdAt = 1234;
var date2 = moment(createdAt);
console.log(date2.format('h:mm a'));
