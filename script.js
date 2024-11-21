"use strict";

// Способ с итерацией

/* function pow(x, n) { // x - число, n - степень в которую возводим число
    let result = 1;
    for (let i = 0; i < n; i++) {
        result *= x;
    }

    return result;
} */



// Способ с рекурсией
// Рекурсия — это способ решения задач, при котором функция вызывает саму себя 

/* function pow(x, n) { // x - число, n - степень в которую возводим число
    if (n === 1) {
        return x;
    } else {
        return x * pow(x, n - 1); // используем n−1 чтобы вычислить меньшие степени, которые затем перемножаются для полного результата
    }
}

pow(2, 1) // 2
pow(2, 2) // 4
pow(2, 3) // 8
pow(2, 4) // 16 */



let students = {
    js: [{
        name: 'John',
        progress: 100
    }, {
        name: 'Ivan',
        progress: 60
    }],

    html: {
        basic: [{
            name: 'Peter',
            progress: 20
        }, {
            name: 'Ann',
            progress: 18
        }], 

        pro: [{
            name: 'Sam',
            progress: 10
        }],

        semi: {
            students: [{
                name: 'Test',
                progress: 100
            }]
        }
    }
};



// Способ с итерацией для вычисления общего результата
/* function getTotalProgressByIteration(data) {
    let total = 0;
    let students = 0;

    for (let course of Object.values(data)) { // Object.values() — это метод, который возвращает массив значений всех перечисляемых свойств объекта
        if (Array.isArray(course)) { // проверяем является ли course массивом при помощи свойства Array.isArray
            students += course.length; // считаем количество студентов

            for (let i = 0; i < course.length; i++) {
                total += course[i].progress; // складываем итоговый результат со всех студентов основных курсов в общее число
            }
        } else {
            for (let subCourse of Object.values(course)) {
                students += subCourse.length  // считаем количество студентов с подКурсов 
                for (let i = 0; i < subCourse.length; i++) {
                    total += subCourse[i].progress; // складываем итоговый результат со всех студентов под курсов в общее число
                }
            }
        }
    }

    return total / students;
}

console.log(getTotalProgressByIteration(students)); */


// Способ с рекурсией для вычисления общего результата
function getTotalProgressByRecursion(data) {
    if (Array.isArray(data)) { // проверяем является ли data массивом при помощи свойства Array.isArray
       /*  students += course.length; */ // считаем количество студентов
        let total = 0; // объявляем переменную

        for (let i = 0; i < data.length; i++) { 
            total += data[i].progress; // складываем прогресс каждого отдельного студента в общий прогресс
        }

        return [total, data.length];  // возвращаем общий результат
    } else {
        let total = [0, 0]; // объявляем переменную

        for (let subData of Object.values(data)) { // Object.values() — это метод, который возвращает массив значений всех перечисляемых свойств объекта
            const subDataArr = getTotalProgressByRecursion(subData); // объявляем хранилище данных для объектов subData и запускаем новую функцию
            total[0] += subDataArr[0]; // складываем массивы по индексу, первый массив (студенты)
            total[1] += subDataArr[1]; // складываем массивы по индексу, второй массив (прогресс)
        }

        return total; // выодим общий результат
    }
}

const result = getTotalProgressByRecursion(students); // возвращаем результат в хранилище данных 

console.log(result[0]/result[1]); // выводим общий результат деленный на студентов


function factorial(x) {
    if (typeof (x) !== 'number' || !Number.isInteger(x)) {
        return 'error'
    } else if (x <= 0) {
        return 1;
    } else {
        return x * factorial(x - 1);
    }

}
factorial(4);