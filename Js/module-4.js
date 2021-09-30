//Функция фильрации

// const filter = function (array, test) {
//   const filteredElements = [];

//   for (const element of array) {
//     const passed = test(element);

//     if (passed) {
//       filteredElements.push(element);
//     }
//   }

//   return filteredElements;
// };

// const fruits = [
//   { name: "apples", quantity: 200, isFresh: true },
//   { name: "grapes", quantity: 150, isFresh: false },
//   { name: "bananas", quantity: 100, isFresh: true },
// ];

// const freshFruits = filter(fruits, (fruit) => fruit.isFresh);
// console.log(freshFruits); // массив с объектами apples и bananas

// const fruitsWithQuantity = filter(fruits, (fruit) => fruit.quantity >= 120);
// console.log(fruitsWithQuantity); // массив с объектами apples и grapes
//---------------------

// ------   КЛЮЧЕвOE СЛОВО  this
//КАК МЕТОД ОБЬЕКТА. В КОНТЕКСТЕ ОБЬЕКТА.
// const user = {
//   tag: "Mango",
//   showTag() {
//     console.log("this:", this);
//     console.log("this tag:", this.tag);
//   },
// };
// user.showTag();

// ----- ВЫЗОВ БЕЗ КОНТЕКСТА
// const foo = function () {
//   console.log("this", this); // this undefined
// };
// foo();

// КАК МЕТОД ОБЬЕКТА, НО ОБЬЯВЛЕНА КАК ВНЕШНЯЯ ФУНКЦИЯ. В КОТЕКСТЕ ОБЬЕКТА
// const swowTag = function () {
//   console.log("this:", this);
//   console.log("this.tag:", this.tag);
// };
// // showTag();

// const user = {
//   tag: "Mango",
// };
// user.showTag = swowTag;
// user.showTag();

//Вызов без котекста, но обьявлена как метод обьекта.

// const user = {
//   tag: "Mango",
//   showTag() {
//     console.log("this:", this);
//     console.log("this.tag:", this.tag);
//   },
// };
// user.showTag();
// const outerShowTag = user.showTag;
// outerShowTag();

//Контекст в Callback-функциях.
// const user = {
//   tag: "Mango",
//   showTag() {
//     console.log("this:", this);
//     console.log("this.tag:", this.tag);
//   },
// };

// const invokeAction = function (action) {
//   console.log(action);
//   action();
// };
// invokeAction(user.showTag);

// const makeChangeColor = function () {
//   const changeColor = function (color) {
//     console.log(this);
//     this.color = color;
//   };
//   return changeColor;
// };
// const hat = {
//   color: "blue",
//   changeColor: makeChangeColor(),
// };
// hat.changeColor("orange"); //цвет измениться потому что эта ссылка
// // вызвана в контексте этого обьекта.
// console.log(hat);
//----  --Call  --Apply  --Bind
const showTag = function (arg1, arg2, arg3) {
  console.log(arg1, arg2, arg3);
  console.log("this:", this);
  console.log("this.tag:", this.tag);
};
const mango = {
  tag: "Mango",
};
const poly = {
  tag: "Poly",
};
// showTag.call(mango, 1, 2, 3);
// showTag.call(poly, 10, 20, 30);

// showTag.apply(mango, [5, "pass", "go_go"]);
// showTag.apply(poly, [101, 201, 301]);

const showMangoTag = showTag.bind(mango);
showMangoTag(2, 4, 7);
const showPolyTag = showTag.bind(poly);
showPolyTag(22, 42, "44");
