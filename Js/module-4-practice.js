//Генератор случ чисел принимает Калбек функцию, которая должна
//превратить нечётные в чётные и получить массив с нечётными
//которые и возвращаем максимальное нечётоне число

// const generateRandomArr = (count, min, max, callback) => {
//   let arr = [];
//   for (let i = 0; i < count; i++)
//     arr.push(parseInt(Math.random() * (max - min) + min));
//   if (callback !== undefined) return callback(arr);
//   return arr;
// };

// console.log(
//   generateRandomArr(100, 10, 100, (arr) =>
//     Math.max(...arr.map((item) => ++item).filter((item) => item % 2 !== 0))
//   )
// );
//-------
//генерируем случайную строку из символов и чисел - отфильтровать
// строку по цифрам - получить среднее арифметическое .
const baseSrting = "abcdefghijklmnopqrstuvwxyz0123456789";
const generateRandomString = (length, callback) => {
  let randomValue = "";
  for (let i = 0; i < length; i++)
    randomValue += baseSrting[parseInt(Math.random() * baseSrting.length)];

  if (callback !== undefined) return callback(randomValue);
  return randomValue;
};

//в переменную tempFn мы присваиваем функцию которая
// являеться параметром callback функции
const tempFn = (str) => {
  const arrayNum = str
    .split("")
    .filter((item) => !Number.isNaN(Number(item)))
    .map((item) => (item = parseInt(item)));
  let total = 0;
  arrayNum.forEach((element) => {
    total += element;
  });
  return total / arrayNum.length;
};

console.log(generateRandomString(250, tempFn));
