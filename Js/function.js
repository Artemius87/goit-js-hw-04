//Модуль 2. Занятие 4. Функции

//Функциональные выражения и функции объявления
//Параметры и параметры, параметры по умолчанию
//Возврат значения

// const add = function (a, b) {
  
//   const result = a + b;
//   return result;
// };
// const r1 = add(2, 3);
// console.log(r1);
// const r2 = add(5, 10);
// console.log(r2);
// const r3 = add(10, 20);
// console.log(r2, r3);

// const minus = function (a, c, b,) {
//     const result = a - c - b;
//     return result;
// }
// const m1 = minus(10, 5, 1);
// console.log(m1);
// const m2 = minus(20, 0, 1);
// console.log(m2);
// const m3 = minus(10, 10, 1);
// console.log(m3);

// const multiply = function (a, b) {
//     const result = a*b;
//     return result;

// }
// const m1 = multiply(2, 2);
// console.log(m1);
// const m2 = multiply(2, 3);
// console.log(m2);
// const m3 = multiply(4, 5);
// console.log(m3);

// const delenie = function (a, b, c) {
//     const result = (a + b) * c;
//     return result;
// }

// const d1 = delenie(10, 2, 2);
// console.log(d1);
// const d2 = delenie(5, 2, 2);
// console.log(d2);
// const d3 = delenie(12, 3, 2);
// console.log(d3);

// ФУНКЦИЯ logItems ДЛЯ ПЕРЕБОРА МАССИВА 
// const friends = ['artem', 'ivan', 'divan', 'kolyan'];


// const logItems = function (items) {
//     for (const item of items) {
//         console.log(item);
//     }
// };
// logItems(friends);
// logItems(numbers);

// Функция findFriends для  поиска друзей----------

// const friends = ['artem', 'ivan', 'divan', 'kolyan'];
// const nameToFind1 = 'artem';

// const findFriend = function (allFriends, name) {
//     console.log(allFriends);
//     console.log(name);

//     for (const friend of allFriends) {
//         if (name === friend) {
//             return 'нашли такого друга';
//         }
//     }
//     return 'не нашли';
// };

// const r1 = findFriend(friends, 'artem');
// console.log(r1);
// const r2 = findFriend(friends, 'loh');
// console.log(r2);

// Функция findFriends для поиска друзей через Include---
// const friends = ['artem', 'ivan', 'divan', 'kolyan'];
// const nameToFind1 = 'artem';

// const findFriend = function (allFriends, name) {
//     const isInFriends = allFriends.includes(name);
 
// if (isInFriends) {
//     return 'нашли такого друга';
// } else {
//     return 'не нашли';
// }
 // или вывод return через тернарный оператор (тернарник)
//     return isInFriends ? 'нашли такого друга': 'не нашли';
// };

// const r1 = findFriend(friends, 'artem');
// console.log(r1);
// const r2 = findFriend(friends, 'loh');
// console.log(r2);


//Делаем slug в URL из названия статьи ---------------
// const slugify = function (string) {
//     const words = string.toLowerCase().split(' ');
//     const slug = words.join('-');
//     return slug;
// };

// const slug1 = slugify('Data Protection and protecting your users in light of GDPR');
// console.log(slug1);
// const slug2 = slugify('How to Find Unique and Memorable Name for Your Product');
// console.log(slug2);

//Делаем массив слагов--------------

// const articles = [
//     'Top 10 benefits of React framework',
//     'Data Protection and protecting your users in light of GDPR',
//     'How to Find Unique and Memorable Name for Your Product',
//     'Build Mean Stack Application',
//     '11 fruitful resources to improve Javascript knowledge',
// ];

// const slugs = [];

// for (const article of articles) {
//     const slug = slugify(article);
//     slugs.push(slug);
// }
// console.log(slugs);

// Функция findSmallestNumber посика самого маленького числа----
// const numbers = [54, 55, 324, 7, 23, 2, 34, 16];
// const findSmallestNumber = function (items) {
//     let smallestNumber = items[0];
//     for (let i = 1; i < items.length; i += 1) {
//         if (items[i] < smallestNumber) {
//             smallestNumber = items[i];
//         }
//     }
//     return smallestNumber;
// };
// const r1 = findSmallestNumber(numbers);
// console.log(r1);


// Работаем с коллекцией карточек в библиотеке
// Удалить , Добавить, Обновить.
const cards = ['card-1', 'card-2', 'card-3', 'card-4', 'card-5'];
console.log(cards);

const removeCard = function (allCards, cardsToRemove) {
    const index = allCards.indexOf(cardsToRemove);

    allCards.splice(index, 1);
};
removeCard(cards, 'card-3');
console.log(cards);
removeCard(cards, 'card-5');
console.log(cards);

const addCard = function (allCards, cardToInsert, index) {
    allCards.splice(index, 0, cardToInsert);
};
addCard(cards, 'card-25', 2);
console.log(cards);
addCard(cards, 'artem23', 0);
console.log(cards);