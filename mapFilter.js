let numbers=[3,4,5,6,7,8,9];
let output=[];

// for(let i=0; i<numbers.length; i++){
//     const element=numbers[i];
//     const result=element*element;
//     output.push(result);
// }

// console.log(output);

 output=numbers.map(function(element){
    return element*element;
})
console.log(output);

output=numbers.filter(x=>x>5);
console.log(output);

output=numbers.find(x=>x>5);
console.log(output);
