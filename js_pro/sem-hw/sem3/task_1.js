// Вы разрабатываете прототип веб-приложения для чтения новостей. Статьи "хранятся" во внутреннем массиве (имитируя базу данных). Когда пользователь нажимает на кнопку "Загрузить новости", ваш код должен имитировать задержку, словно происходит реальная загрузка данных из внешнего источника, а после этой задержки — отображать новости на странице.
// Создайте базовую HTML-структуру с кнопкой для загрузки новостей и контейнером для их отображения.
// Реализуйте функцию fetchNews(), возвращающую промис. Эта функция должна имитировать задержку в 2 секунды перед успешным возвращением данных из "виртуальной" базы данных. Для добавления интереса: с вероятностью 10% она должна возвращать ошибку вместо данных.
// При нажатии на кнопку "Загрузить новости" вызывайте функцию fetchNews(), обрабатывая успешное выполнение и ошибки с использованием then() и catch().
// При успешной загрузке отобразите статьи на странице. При ошибке покажите сообщение об ошибке.

// Добавьте функционал, который отключает кнопку загрузки на время "загрузки" новостей и активирует её снова после завершения операции (будь то успешная загрузка или ошибка).

const mockDatabase = [
    { title: "Новость 1", content: "Содержимое новости 1..." },
    { title: "Новость 2", content: "Содержимое новости 2..." },
    // ... другие статьи
];

const fetchNews = () => {
    btn.disabled = true
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const rnd = Math.random()
            if (rnd < 0.9) {
                resolve(mockDatabase)
            } else {
                reject(new Error('No news today'))
            }
        }, 200);
    })
        .then(resolve => {
            const box = document.querySelector('.news-box')
            resolve.forEach(element => {
                const textBox = document.createElement('div')
                const textTitle = document.createElement('h3')
                textTitle.innerHTML = element.title
                textBox.append(textTitle)
                const text = document.createElement('p')
                text.innerHTML = element.content
                textBox.append(text)
                box.append(textBox)
            });
        })
        .catch((error) => {
            console.log('Error: ' + error);
        })
        .finally(() => {
            btn.disabled = false
        })
}

const btn = document.querySelector('.news-loader')
btn.addEventListener('click', fetchNews)

