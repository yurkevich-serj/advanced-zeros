'use strict'
module.exports = function getZerosCount(number, base) {

let multipliers =  multipliersCount(base);
let array = [];

for(const key in multipliers){
    let count = 0;
	for (let i = +key; i <= number; i = i * +key){
		count += Math.floor(number/i);
	}
	array.push(Math.floor(count/multipliers[key]));
}
return array.sort((a, b) => a - b)[0];




  function multipliersCount(base){
   let object = {};
   for(let i = 2 ; i <= base; i++){
   	 while (true) {
        if (base % i === 0) {
          base = base / i;
          if (object[i] === undefined){
          	object[i] =  1;
          } else {
          	object[i] = object[i]+1;
          }
          
        } else {
          break;
        }
      }
   }
   return object;
  }
}

