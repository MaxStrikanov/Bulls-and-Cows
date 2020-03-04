const numCode = '5489';
const readlineSync = require('readline-sync');
var bulls = 0;
var cows = 0;

console.log(numCode);
for (var i = 0; i < numCode.length ; i++) {
console.log(numCode[i]); 
}

//let numInput = prompt ('Введите четырехзначный код ' );
const numInput = readlineSync.question('Введите четырехзначный код ' );
console.log(numInput);
//for (var j = 0; j < numInput.length ; j++) {
/console.log(numInput[j]); 
//}

for (let k = 0; k < numInput.length; k++ ) {
	if (numInput[k] == numCode[k] ){
		//console.log ('Цифр на своих местах '+ numInput[k]);
	bulls++;
	}
else if (numCode.indexOf(numInput[k])>= 0){
    cows++;
    //console.log('Совпавших цифр не на своих местах! ');
}
}
console.log('Цифр на своих местах: '+bulls);
console.log('Совпавших цифр не на своих местах: '+cows);




