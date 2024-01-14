/*
Задание 1
В прошлом модуле в юните «Циклы» вы выполняли следующее задание:
Дан массив. Нужно вывести в консоль количество чётных и нечётных элементов в массиве. Если в массиве есть нулевой элемент,
то он учитывается и выводится отдельно. 
При выполнении задания необходимо учесть, что массив может содержать не только числа, но и знаки, например null и так далее.
На этот раз оформите решение в виде функции: постарайтесь дать этой функции корректное название, вызовите функцию, проанализируйте синтаксис.

*/

let arr = [2, 6, 5, 11, 10, 14, 55, 0, 16];

function countNumber() {
  const even = arr.filter((element) => element % 2 === 0 && +element !== 0);
  const odd = arr.filter((element) => element % 2 !== 0);
  const zero = arr.filter((element) => element === 0);

  console.log(`Чётных чисел -> ${even.length}`);
  console.log(`Нечётных чисел -> ${odd.length}`);
  console.log(`Нулей -> ${zero.length}`);
}

countNumber(arr);

/*
Задание 2

Напишите функцию, которая принимает на входе любое число (но не больше 1 000), определяет, является ли оно простым, и выводит, простое число или нет. 
Если введено больше 1 000, то выводится сообщение, что данные неверны. Обратите внимание на числа 0 и 1.
Здесь вам пригодятся знания из предыдущего модуля — циклы и условные операторы.
*/

function isNumberPrime(number) {
  let flag = true;
  if (number === 2 || number === 3) {
    flag = true;
  } else {
    for (let i = 2; i * i <= number; i++) {
      if (number % i === 0) {
        flag = false;
      }
    }
  }
  return flag;
}

const number = prompt("Введите число от 2 до 1000 :");

if (number < 2 || number > 1000) {
  console.log("Вы ввели число меньше 2 или больше 1000.");
} else if (isNumberPrime(number)) {
  console.log("Число простое.");
} else {
  console.log("Число не простое.");
}

/*
Задание 3
Напишите функцию, которая принимает число как аргумент и возвращает функцию, которая также принимает число как аргумент и возвращает сумму этих двух чисел. Выведите в консоль результат.
*/
function sumNumber(a) {
  return function (b) {
    return a + b;
  };
}

console.log(sumNumber(3)(4));
