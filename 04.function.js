    /////Function/////
    //1.Функции//
//Function Declaration лутше использовть его
//function greet (name) {
    //console.log('Привет-', name)
//}
//Function Expression
//const greet2 = function greet2(name) {
//console.log('Привет2-',name)
//}
//greet('Лена')
//greet2( 'Лена')
//console.log(typeof greet)
//console.dir(greet)

//2.Анонимные функции//
//let counter = 0
//setInterval(function () {
//  console.log(++counter)
//},1000)
//const interval = setInterval(function () {
// if (counter == 7) {
//clearInterval(interval)
// }else{
//console.log(++counter)
// }
// },1000)

    //3.Cтрелочные  функции//

//function greet (name,age){
//console.log('Привет',name,age)
//}
//const arrow = (name) =>{
//console.log('Привет -',name)
//}
//const arrow2 = name => console.log('Привет -',name)
//arrow2('Mikita')
//const pow2 = num => num ** 2
//console.log(pow2(5))

    //4.Параметры по умолчянию//
//const sum = (a,b=1) => a + b
//console.log(sum(41, 4))
//function sumAll(...all) {
//let result = 0
//for (let num of all){
//result += num
//}
//return result
//    }
//const res = sumAll(1,2,3,4,5,6,7
//console.log(res)

    //5.Замыкание//
//function createMember(name) {
//return function (lastName) {
//console.log(name + lastName)
//    }
//}
//const logWithLastName = createMember('Mikita')
//console.log(logWithLastName)
//console.log(logWithLastName('Mikita'))
//console.log(logWithLastName('Aucharenka'))


////Функции, начинающиеся с…
    //
    // "get…" – возвращают значение,
    // "calc…" – что-то вычисляют,
    // "create…" – что-то создают,
    // "check…" – что-то проверяют и возвращают логическое значение, и т.д.
    //getAge – будет плохим выбором, если функция будет выводить alert с возрастом (должна только возвращать его).
    //createForm – будет плохим выбором, если функция будет изменять документ, добавляя форму в него (должна только создавать форму и возвращать её).
    //checkPermission – будет плохим выбором, если функция будет отображать сообщение с текстом доступ разрешён/запрещён (должна только выполнять проверку и возвращать её результат).

