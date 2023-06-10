// Задание 1 
// Создайте функцию которая возводит переданное число в куб, необходимо вывести в консоль результат 2^3 степени + 3 ^ 3 степени

const cube = (number) => Math.pow(number, 3);
console.log(cube(2) + cube(3));

// Задание 2
// Пользователь вводит с клавиатуры число, если ввёл текст, необходимо вывести что значение задано неверно
// Создать фукнцию, которая высчитывает 13% от данного числа и выводит в консоль текст "Размер заработной платы за вычетом налогов равен значение"

const clearSalaryCalc = (bruttoSalary) => {
    const clearSalary = bruttoSalary * 0.87;
    console.log(`Your clear salary is ${clearSalary}`);    
}

let salary = Number(prompt('Enter your salary'));

if (salary !== salary) {
    alert('Number is required!')
} else {
    clearSalaryCalc(salary);
}

// Задание 3
// Пользователь с клавиатуры вводит 3 числа, необходимо создать функцию, которая определяет максимальное значение среди этих чисел

const getMaxNumber = (num1, num2, num3) => {
    if (num1 >= num2 && num1 > num3) {
        alert(`Number ${num1} is a MAX number`)
    } else if (num2 > num1 && num2 >= num3) {
        alert(`Number ${num2} is a MAX number`)
    } else if (num3 >= num1 && num3 > num2) {
        alert(`Number ${num3} is a MAX number`)
    } else {
        alert('All numbers are equal')
    }
}

let num1 = Number(prompt('Enter number 1'));
let num2 = Number(prompt('Enter number 2'));
let num3 = Number(prompt('Enter number 3'));

getMaxNumber(num1, num2, num3)

// Задание 4
// Необходимо реализовать четыре функции, каждая функция должна принимать по два числа и выполнять одну из операций (каждая функция выполняет одну из них):
// 1. Сложение
// 2. Разность
// 3. Умножение
// 4. Деление
// Необходимо сделать так, чтобы функция вернула число, например выражение console.log(sum(2, 6)); должно вывести число 8 в консоль (sum - функция сложения в данном примере, ваши названия функций могут отличаться). Округлять значения, которые возвращают функции не нужно, однако, обратите внимание на разность, функция должна вычесть из большего числа меньшее, либо вернуть 0, если числа равны. Функциям всегда передаются корректные числа, проверки на NaN, Infinity делать не нужно.

const sum = (n1, n2) => n1 + n2;
const diff = (n1, n2) => {
    if (n1 > n2) {
        return n1 - n2;
    } else  {
        return n2 - n1;
    }
}
const div = (n1, n2) => n1/n2;
const prod = (n1, n2) => n1*n2;

console.log(sum(2,3));

console.log(diff(3,1));
console.log(diff(2,6));
console.log(diff(3,3));

console.log(div(3,2));
console.log(div(3,0));

console.log(prod(4,4));