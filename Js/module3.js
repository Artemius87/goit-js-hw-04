// const houses = ["Arryn", "Frey", "Greyjoy", "Stark", "Lannister", "Tyrell"];

// // Вертикальная запись удобнее для чтения
// const updatedHouses = [...houses.slice(2)];

// console.log(updatedHouses);
// ['Arryn', 'Frey of the Crossing', 'Greyjoy', 'Stark', 'Lannister', 'Tyrell']
//ПРАКТИКА 3 модуль - обьекты
// задача 1
//нужно написать функции которая принимала в себя ИНТ-овое число
//и возращала б нам массив всех делителей этого числа кторые делятся
//на - цело
// const number = 808;

// const intr = (number) => {
//   const result = [];
//   for (let i = 1; i <= number; i++) {
//     if (number % i === 0) {
//       result.push(i);
//     }
//   }
//   return result;
// };

// console.log(intr(number));

//  ----------------------
//ЗАДАЧА
// Cгенерировать обьект с рандомными названиями ключей.
// мы должны в значении каждого ключа поместить число - это колл-во
// символов ключа умноженоое на порядковый номер в алфовите
// последней буквы ключа

// const alphabet = "abcdefghijklmnopqrstuvwxyz";

// const generateRandomString = function (minlength, maxlength) {
//   const strLength = parseInt(
//     Math.random() * (maxlength - minlength) + minlength
//   );
//   let stringResponse = "";
//   for (let i = 0; i < strLength; i++)
//     stringResponse += alphabet.charAt(
//       parseInt(Math.random() * alphabet.length)
//     );

//   return stringResponse;
// };
// const generateRandomObject = function (minlength, maxlength) {
//   const objectResponse = {};
//   const keyCount = parseInt(
//     Math.random() * (maxlength - minlength) + minlength
//   );
//   for (let i = 0; i < keyCount; i++) {
//     let randomString = generateRandomString(5, 8);
//     objectResponse[randomString] =
//       randomString.length * alphabet.indexOf(randomString.substr(-1));
//   }
//   return objectResponse;
// };

// console.log(generateRandomString(5, 8));
// console.log(generateRandomObject(5, 8));
//---------------------------------
//ЗАДАЧА
//сгенерировать строку цифр от 0 до 9 длинной, кот передадим в фунцкию
//определить наибольшую последовательность цифр подряд (1.2.3.4.5 и т.д.)
// const strNumbers = (amount) => {
//   let responseString = "";
//   for (let i = 0; i < amount; i++) {
//     responseString += parseInt(Math.random() * 10);
//   }
//   return responseString;
// };
// const longestChain = (string) => {
//   let responseChain = "";
//   let isChain = false;
//   let tempChain = "";
//   for (let i = 1; i < string.length; i++) {
//     if (Number(string[i]) + 1 === Number(string[i + 1])) {
//       isChain = true;
//       tempChain += string[i];
//     } else {
//       if (isChain === true) {
//         tempChain += string[i];
//       }
//       isChain = false;
//       if (tempChain.length > responseChain.length) {
//         responseChain = tempChain;
//       }
//       tempChain = "";
//     }
//   }
//   return responseChain;
// };
// let stringNumbers = strNumbers(1000);

// console.log(stringNumbers);
// console.log(longestChain(stringNumbers));
// -------------
// Задача 1. написать функцию которая генерирует массив сл.чисел
// 2. функция принимает массив случ чисел
// 3. Возвращает обьект с мин и макс. значением

// const generateRandomArray = (count, min, max) => {
//   const responseArray = [];
//   for (let i = 0; i < count; i++) {
//     responseArray.push(parseInt(Math.random() * (max - min) + min));
//   }
//   return responseArray;
// };

// const minMaxObject = (arrayNum) => {
//   return {
//     min: Math.min(...arrayNum),
//     max: Math.max(...arrayNum),
//   };
// };
// let result = generateRandomArray(15, 5, 20);
// console.log(result);
// console.log(minMaxObject(result));
//---------------------
//Задача - написать функцию которая будет принимать произвольное
//колл-во  элементов и вернёт среднее арифметическое

// const avarage = (...numbers) => {
//   let total = 0;
//   for (let number of numbers) total += number;
//   return total / numbers.length;
// };
// console.log(avarage(4, 55, 12, 65, 22));
//----------------------
//ЗАДАЧА Создать котолог у которого были бы следующие возможности
//Добавить, удалить, создать, изменить, вернуть колл-во, фильтрация по типу

const catalog = {
  list: [],

  add: function (product) {
    this.list.push(product);
  },
  remove: function (id) {
    for (let i = 0; i < this.list.length; i++)
      if (product.id === id) this.list.splice(i, 1);
  },
  create: function (name, type, quantity) {
    return { id: this.list.length + 1, name, type, quantity };
  },
  change: function (id, props) {
    let index;
    for (let i = 0; i < this.list.length; i++) {
      if (this.list[i].id === id) {
        index = i;
        break;
      }
    }
    for (let key in props) this.list[index][key] = props[key];
  },
  filterType: function (type) {
    let response = [];
    for (let product of this.list)
      if (product.type === type) response.push(product);

    return response;
  },
  count: function () {
    let total = 0;
    for (let product of this.list) total += product.quantity;
    return total;
  },
};
let product = catalog.create("apple", "phone", 1000);
catalog.add(product);
let product2 = catalog.create("meyzu", "TV", 2000);
catalog.add(product2);
console.log(catalog.list);
// catalog.remove(1);
catalog.change(2, { name: "samsung" });
console.log(catalog.filterType("TV"));
console.log(catalog.count());
