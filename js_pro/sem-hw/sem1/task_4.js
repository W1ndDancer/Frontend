// Представьте себе ситуацию: у нас есть группа студентов, и мы хотим отследить, кто из них посетил какие уроки и кто из преподавателей вёл данные уроки.
// Map будет использоваться для хранения соответствия между уроком и преподавателем.
// Set будет использоваться для хранения уникальных уроков, которые посетил каждый студент.

let lessons = new Map()
// 1. Map: урок => преподаватель ("Математика", "Смирнов"), ("История", "Иванова")
lessons.set("Математика", "Смирнов")
    .set("История", "Иванова")
    .set("География", "Сидоров")

// 2. Map: студент => Set уроков
let IvanLesons = new Set()

for (const l of lessons.keys()) {
    IvanLesons.add(l)
}

let studentsLessons = new Map()

studentsLessons.set("Иван", IvanLesons)

// Проверка:
console.log(`Преподаватель по Математике: ${lessons.get("История")}`); // Смирнов
console.log(`Уроки Ивана: ${[...studentsLessons.get("Иван")]}`); // Математика, История