
// 1. Определение текущего размера окна браузера:
// ○ Напишите функцию, которая будет выводить текущую
// ширину и высоту окна браузера при его изменении.

// function UserWindowSize() {
//     const windowSize = console.log(`height: ${document.documentElement.clientHeight}, width: ${document.documentElement.clientWidth}`)
//     return windowSize
// }

// window.addEventListener('resize', UserWindowSize)

// console.log(UserWindowSize())

// 2. Подтверждение закрытия страницы:
// ○ Создайте всплывающее окно или диалоговое окно, которое появляется при попытке закрыть вкладку браузера и спрашивает пользователя, уверен ли он в своем решении закрыть страницу.

// window.addEventListener('beforeunload', (event) => {
//     // Отмените событие, как указано в стандарте.
//     event.preventDefault();
//     // Chrome требует установки возвратного значения.
//     event.returnValue = 'STOP'
//   });

// 3. Управление историей переходов:
// ○ Используйте объект history для управления историей
// переходов на веб-странице. Создайте кнопки "Назад" и "Вперед" для перемещения по истории.

// const back = document.querySelector('#backBtn')
// const fwd = document.querySelector('#fwdBtn')

// fwd.addEventListener('click', () => window.history.forward())
// back.addEventListener('click', () => window.history.back())
