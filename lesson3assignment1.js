let arr = ['Captain James T Kirk', 'Captain Jean-Luc Picard', 'Captain Benjamin Sisko', 'Captain Kathryn Janeway', 'Captain Jonathon Archer'];
arr.push('Captain Philippa Georgiou');

console.log(arr);

arr.splice(2, 1);

console.log(arr);

let captains = arr.join(', ');

console.log(captains);
