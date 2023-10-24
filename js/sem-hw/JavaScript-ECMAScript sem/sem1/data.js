// 1. Создайте функцию mergeArrays, которая принимает два
// массива и возвращает новый массив, содержащий все
// элементы из обоих массивов. Используйте spread
// оператор для объединения массивов.
// mergeArrays([1, 2, 3], [4, 5, 6]); // Ожидаемый результат: [1,
// 2, 3, 4, 5, 6]

function mergeArrays(arr1, arr2) {
    return [...arr1, ...arr2];
}

console.log(mergeArrays([1, 2, 3], [4, 5]));

// 2. Создайте функцию removeDuplicates, которая принимает
// любое количество аргументов и возвращает новый
// массив, содержащий только уникальные значения.
// Используйте rest оператор для сбора всех аргументов в
// массив а затем filter для определения дубликатов.
// removeDuplicates(1, 2, 3, 2, 4, 1, 5); // Ожидаемый
// результат: [1, 2, 3, 4, 5]

// function removeDuplicates(...args) {
//     return [...args].filter((el, i) => [...args].indexOf(el) === i)
// }

function removeDuplicates(...args) {
    return [...new Set([...args])]; //Set собирает коллекцию уникальных значений 
}

console.log(removeDuplicates(1, 2, 3, 2, 4, 1, 5));


// 1. Напишите функцию getEvenNumbers, которая принимает массив
// чисел в качестве аргумента и возвращает новый массив,
// содержащий только четные числа.

function getEvenNumbers(arr) {

    return [...arr].filter(item => item = item % 2 === 0);
}

console.log(getEvenNumbers([1, 2, 3, 4, 5, 6]));

// 2. Задача: Напишите функцию calculateAverage, которая принимает
// массив чисел в качестве аргумента и возвращает среднее значение
// этих чисел.

function calculateAverage(arr) {

    const sumOfArr = arr.reduce((acc, num) => acc + num, 0);

    return sumOfArr / arr.length;
}

console.log(calculateAverage([1, 2, 3, 4, 5, 6]));

// 3. Напишите функцию capitalizeFirstLetter, которая принимает строку в
// качестве аргумента и возвращает новую строку, в которой первая
// буква каждого слова является заглавной.

function capitalizeFirstLetter(string) {

    return string.split(' ').map(item => item[0].toUpperCase() + item.slice(1)).join(' ');
}

console.log(capitalizeFirstLetter('ones upon a time'));


// 1. Напишите функцию createCalculator, которая принимает начальное
// значение и возвращает объект с двумя методами: add и subtract.
// Метод add должен увеличивать значение на переданное число, а
// метод subtract должен уменьшать значение на переданное число.
// Значение должно быть доступно только через методы объекта, а не
// напрямую.

function createCalculator(number1) {
    const obj = {
        add: (number) => number + number1,
        subtract: (number) => number - number1
    }
    return obj;
}
const newObj = createCalculator(5);
console.log(newObj.add(2));
console.log(newObj.subtract(7));

// Напишите функцию createGreeting, которая принимает имя
// пользователя и возвращает функцию, которая будет выводить
// приветствие с использованием этого имени.
// // Пример использования:
// const greeting = createGreeting('John');
// greeting(); // Ожидаемый результат: "Hello, John!"

const createGreeting = (name) => {
    const greeting = (name) => `Hello, ${name}!`;//2 шаг
    return greeting(name);//1 шаг
}
console.log(createGreeting('John'));

// Напишите функцию createPasswordChecker, которая
// принимает допустимую длину пароля в качестве аргумента и
// возвращает функцию для проверки введенного пароля.
// Возвращаемая функция должна принимать пароль и возвращать
// true, если его длина соответствует допустимой, и false в противном
// случае.
// // Пример использования:
// const isPasswordValid = createPasswordChecker(8);
// console.log(isPasswordValid('password')); // Ожидаемый результат:
// false
// console.log(isPasswordValid('secret')); // Ожидаемый результат: true

// function createPasswordChecker(string, length = 8) {

//     const check = (string) => (string.length < length) ? true : false;
//     console.log(typeof check);
//     return check(string);
// };

// const isPasswordValid = createPasswordChecker('secret', 6);
// console.log(isPasswordValid);

const createPasswordChecker = (length) => {
    return function (pass) {
        return pass.length < length;
    };
};
const isPasswordValid = createPasswordChecker(8);
console.log(isPasswordValid('password'));
console.log(isPasswordValid('secret'));

// Напишите рекурсивную функцию sumDigits, которая принимает
// положительное целое число в качестве аргумента и возвращает
// сумму его цифр.
// Пример использования:
// console.log(sumDigits(123)); // Ожидаемый результат: 6 (1 + 2 + 3)
// console.log(sumDigits(456789)); // Ожидаемый результат: 39 (4 + 5 + 6
// + 7 + 8 + 9)

let result = 0;
const sumDigits = function (num) {
    result += num % 10;
    num = Math.trunc(num / 10);
    if (num > 0) sumDigits(num);
    return num;
}

// function sumDigits(n) {
//     n = `${n}`;
//     if (n.length == 1) return +n;

//     return +n[0] + sumDigits(n.slice(1));
// }

// const sumDigits = (num) => {
//     let sum = 0;
//     for (const numb of `${num}`) {
//         sum += +numb;
//     }
//     return sum;
// };

sumDigits(456789);
console.log(result);