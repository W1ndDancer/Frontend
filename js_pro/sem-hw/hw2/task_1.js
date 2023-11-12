// Представьте, что у вас есть класс для управления библиотекой. В этом классе будет приватное свойство для хранения списка книг, а также методы для добавления книги, удаления книги и получения информации о наличии книги.
class Library {

    // Класс должен содержать приватное свойство _books, которое инициализируется пустым массивом и представляет собой список книг в библиотеке.
    _books = []

    // Реализуйте геттер allBooks, который возвращает текущий список книг.
    get getAllBooks() {
        return this._books
    }

    // Реализуйте метод addBook(title), который позволяет добавлять книгу в список. Если книга с таким названием уже существует в списке, выбросьте ошибку с соответствующим сообщением.
    addBook(title) {
        for (const book of this._books) {
            if (title.toLowerCase() === book.toLowerCase()) {
                throw new Error('Такая книга уже существует в библиотеке')
            }
        }
        this._books.push(title)
        return this._books
    }

    // Реализуйте метод removeBook(title), который позволит удалять книгу из списка по названию. Если книги с таким названием нет в списке, выбросьте ошибку с соответствующим сообщением.
    removeBook(title) {
        for (let i = 0; i < this._books.length; i++) {
            if (title.toLowerCase() === this._books[i].toLowerCase()) {
                this._books.splice(i, 1)
                break
            }
        }
        throw new Error('Такой книги не существует в библиотеке')
    }

    // Реализуйте метод hasBook(title), который будет проверять наличие книги в библиотеке и возвращать true или false в зависимости от того, есть ли такая книга в списке или нет.
    hasBook(title) {
        for (const book of this._books) {
            if (title.toLowerCase() === book.toLowerCase()) {
                return true
            }
        }
        return false
    }

    // Реализуйте конструктор, который принимает начальный список книг (массив) в качестве аргумента. Убедитесь, что предоставленный массив не содержит дубликатов; в противном случае выбрасывайте ошибку.
    constructor(startTitles) {
        startTitles.map(book => {
            if (this._books.includes(book)) throw new Error(`Книга ${book} уже есть в библиотеке`)
            this._books.push(book)
        });
    }
}

const library = new Library(['a', '2', '3'])
// const libraryTest = new Library(['1', '2', '2', '3'])
console.log(library.getAllBooks)
// console.log(library.addBook('A'));
console.log(library.addBook('4'))
console.log(library.hasBook('4'))
console.log(library.hasBook('5'))
console.log(library.getAllBooks)