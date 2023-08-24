const people = [
    {name: 'Mena', age: 25 },
    {name: 'Tina', age: 30 },
    {name: 'Maiya', age: 40}
]


// let summ = 0;
// for(let sum of people){
//     const total = sum + summ;
//     console.log(total);
// }


const total = people[1].reduce((previous, current) => previous + current, 0)
console.log(total);
