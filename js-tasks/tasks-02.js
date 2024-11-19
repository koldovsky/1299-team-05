  // https://www.codewars.com/users/tarasnoha/completed_solutions

  // https://www.codewars.com/kata/convert-a-string-to-an-array/train/javascript
  function stringToArray(string){
    return string.split(' ');
  }

 //https://www.codewars.com/kata/dna-to-rna-conversion/train/javascript 
  function DNAtoRNA(dna) {
    return dna.split('').map(s => s==='T' ? 'U' : s).join('');
  }

 //https://www.codewars.com/kata/577a98a6ae28071780000989/train/javascript 
  var min = function(list){
    //Math.min(...list); - видає помилку при пустому list
    return list.reduce((min, current) => (current < min ? current : min), Infinity);
  }

  var max = function(list){
    return list.reduce((max, current) => (current > max ? current : max), -Infinity);
  }

// якщо обов'язково повинно бути return list[0] то можна відсортувати
// min = list.sort((a, b) => (a - b))
// max = list.sort((a, b) => (b - a))

//https://www.codewars.com/kata/544a54fd18b8e06d240005c0/train/javascript
function min(arr, toReturn) { 
    const min = Math.min(...arr);
    return toReturn === 'value' ? min : arr.indexOf(min);
}

function doubleInteger(i) {
    return i *= 2;
}

function twiceAsOld(dadYearsOld, sonYearsOld) {
    return Math.abs(dadYearsOld - sonYearsOld * 2);
}

function nthEven(n) {
    return n * 2 - 2;
}

function getRealFloor(n) {
    return n <= 0 ? n : n < 13 ? n - 1 : n - 2;
}

function past(h, m, s){
    return (h * 3600 + m * 60 + s) * 1000;
}

function isDivisible(n, x, y) {
    return (n % x === 0) && (n % y === 0);
}