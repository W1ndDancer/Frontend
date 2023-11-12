// У вас есть базовый список пользователей.Некоторые из них имеют информацию о своем премиум - аккаунте, а некоторые – нет.
// Ваша задача – создать структуру классов для этих пользователей и функцию для получения информации о наличии премиум - аккаунта, используя Опциональную цепочку вызовов методов, оператор нулевого слияния и instanceof.
// Создайте базовый класс User с базовой информацией(например, имя и фамилия).
// Создайте классы PremiumUser и RegularUser, которые наследуются от User.Класс PremiumUser должен иметь свойство premiumAccount(допустим, дата истечения срока действия), а у RegularUser такого свойства нет.
// Создайте функцию getAccountInfo(user), которая принимает объект класса User и возвращает информацию о наличии и сроке действия премиум - аккаунта, используя Опциональную цепочку вызовов методов и оператор нулевого слияния.
// В функции getAccountInfo используйте instanceof для проверки типа переданного пользователя и дайте соответствующий ответ.
class Govno {
    
}

class User {
    #name = ''
    #surname = ''

    constructor(name, surname) {
        this.#name = name
        this.#surname = surname
    }
}

class PremiumUser extends User {
    premiumAccount = true
}

// создать RegularUser
class RegularUser extends User {

}

function getAccountInfo(user) {
    // Премиум аккаунт действителен до такой-то даты или информация отсутствует
    // пользователь без премиум аккаунта
    // Тип пользователя не определен"
    if (user instanceof User) {
        return console.log(`Премиум: ${user.premiumAccount ?? false}`)
    } else {
        console.log('Тип пользователя не определен')
    }
}

const ivan = new User('Ivan', 'Golovko')
const artem = new PremiumUser('Artem', 'Cherniy')
const ded  = new RegularUser('Ded', 'Dedich')
const govno = new Govno()
getAccountInfo(ivan)
getAccountInfo(artem)
getAccountInfo(ded)
getAccountInfo(govno)