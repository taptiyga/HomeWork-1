//Создать массив чисел [1,2,3,4,5]
const a = [1, 2, 3, 4, 5]
//Умножить каждое число на 3 с помощью map
const b = a.map(value => value * 3)
console.log(b)
//Отфильтровать числа больше 10
const c = b.filter(value => value > 10)
console.log(c)
//Найти сумму всех чисел с помощью reduce
const d = b.reduce((previousValue, currentValue) => previousValue += currentValue)
console.log(d)