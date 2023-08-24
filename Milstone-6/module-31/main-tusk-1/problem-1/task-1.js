
const oddNumbers = [1, 3, 5, 7, 9];

// for(let odd of oddNumbers){
//     odd++;
//     console.log(odd);
// }


const evenNumbers = oddNumbers.map(num => num + 1)
console.log(evenNumbers);