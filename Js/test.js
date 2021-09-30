// вывести в консоль набор чисел через запятую в промт
// присвоисть числа в массив
// вывести массив обратно в строку

// const userInput = prompt('ведите последовательность чисел');
// console.log(userInput);

// if (userInput !== null) {
//     let arr = userInput.split(',');
//     console.log(arr);
//     console.log(arr.join(','));
// };

//1. вывести в консоль числа которые чётные в length
//2. вывести в консоль числа которые не чётные в length

// const userInput = prompt('ведите последовательность чисел');
// console.log(userInput);
// let arr;

// if (userInput !== null) {
//     let arr = userInput.split(',');
//     console.log(arr);
//     for (let i = 0; i < arr.length; i += 1) {
//         // if (i % 2 === 0)
//         //     console.log(arr[i]);
//     }
//     for (let i = 0; i < arr.length; i += 1) {
//         if (i % 2 === 1)
//             console.log(arr[i]);
//     }
// };

// Итерация по массиву
// split

// Если параметров несколько, то они перечисляются через запятую в круглых скобках.

// Если параметров нет, то обязательно должны быть пустые круглые скобки.
// const fn = () => {
//   console.log('Hello! :]');
// };
// ------------------------
// ЗАДАЧА обмен валют(07.09.21)
// Написать две функции покупка и продажа

// const usdBuy = 28.5;
// const usdSell = 27.5;

// const euroBuy = 32.5;
// const euroSell = 31.5;

// const rubBuy = 0.5;
// const rubSell = 0.3;

// const exBuy = (amount, currency) => {
//     let response = 0;
//     switch (currency) {
//         case 'usd':
//             response = amount / usdBuy;
//             break;
//         case 'euro':
//             response = amount / euroBuy;
//             break;
//         case 'rub':
//             response = amount / rubBuy;
//             break;
//         default:
//             alert('Такой валюты нет');
//     }
//     return response;
// };
// const exSell = (amount, currency) => {
//      let response = 0;
//     switch (currency) {
//         case 'usd':
//             response = amount / usdSell;
//             break;
//         case 'euro':
//             response = amount / euroSell;
//             break;
//         case 'rub':
//             response = amount / rubSell;
//             break;
//         default:
//             alert('Такой валюты нет');
//     }
//     return response;
// };
// console.log(exBuy(100, 'usd'));
// console.log(exSell(100, 'euro'));
// Упрощаем этот же код - рефакторинг
// const usdBuy = 28.5;
// const usdSell = 27.5;

// const euroBuy = 32.5;
// const euroSell = 31.5;

// const rubBuy = 0.5;
// const rubSell = 0.3;

// const exBuy = (amount, currency) => amount / currency;
// const exSell = (amount, currency) => amount * currency;

// console.log(exBuy(100, rubBuy));
// console.log(exSell(100, euroSell));
// ---------------------------------
//рандомные числа от 1 до 100 добавлять в массив округляя их
//и вывести среднее арифметическое
// const randomArr = (amount, min, max) => {
//   let num = [];

//   for (let i = 0; i < amount; i++) {
//     num.push(parseInt(Math.random() * (max - min) + min));
//   }
//   console.log(num); //массив с рандомными числами
//   let sumItem = 0;
//   for (let item of num) {
//     sumItem += item;
//   }
//   return sumItem / num.length;
// };

// console.log(randomArr(10, 1, 100)); // среднее арифметическое
// --------------------------------

// У нас есть три симфола ( '<' '-' '>') нужно из этих символов
// сгенерировать строку
// и посчитать колл-во образовавшихся стрелочек :  ( <-   -> )
const strFn = (amount) => {
  // <- стрелочная запись функции
  let str = "";
  let randomNumber = 0;
  for (let i = 0; i < amount; i++) {
    randomNumber = parseInt(Math.random() * (4 - 1) + 1);
    if (randomNumber === 1) {
      str += "<";
    } else if (randomNumber === 2) {
      str += ">";
    } else {
      str += "-";
    }
  }
  return str;
};

let randomString = strFn(250);

const arrowsAmount = (str) => {
  const arrowArr = ["<-", "->"];
  let counter = 0;
  for (let item of arrowArr) {
    let tempString = str;
    let indexOfString = tempString.indexOf(item);
    while (indexOfString > -1 && tempString.length > 2) {
      counter++;
      tempString = tempString.substr(indexOfString + 2);
      indexOfString = tempString.indexOf(item);
    }
  }
  return counter;
};
console.log(randomString);
console.log(arrowsAmount(randomString));
