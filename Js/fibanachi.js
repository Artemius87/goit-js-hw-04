// Последовательность Фибоначчи .Написание Алгоритма
let firstNumber = 1;
let secondNumber = 0;
let sum; //- Временное хранилище результата

for (let i = 0; i < 10; ++ i ) {
    sum = firstNumber + secondNumber; // 1 + 0 = 1
    firstNumber = secondNumber; //  1 = 0 ( 0  =  1)
    secondNumber = sum;  //  1 = 1
    console.log(sum);
};
1
1
2
3
5
8
13
21
34
55