// Используя Symbol.iterator, создайте объект "Библиотека", который можно итерировать.
// Каждая итерация должна возвращать следующую книгу из библиотеки.
// Создайте объект library, который содержит массив книг и имеет свойство - символ Symbol.iterator.
// Реализуйте кастомный итератор для объекта library.Итератор должен перебирать книги по порядку.
// Используйте цикл for...of для перебора книг в библиотеке и вывода их на консоль.

const books = [
    { title: "1984", author: "George Orwell" },
    { title: "Brave New World", author: "Aldous Huxley" },
    { title: "Fahrenheit 451", author: "Ray Bradbury" }
];

const library = {
    'booksInLib': books,
}

console.log(library.length);

library[Symbol.iterator] = function () {
    return {
        current: 0,
        last: this.booksInLib.length,
        next() {
            return this.current < this.last
            ? { done: false, value: library.booksInLib[this.current++] }
            : { done: true };
        }
    }
}

for (const item of library) {
    console.log(item.title + ' ' + item.author);
}