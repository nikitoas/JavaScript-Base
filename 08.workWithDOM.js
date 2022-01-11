///DON (Document Object Model////
//H1-заголовок///
//Dom-дерево не является частью JavaScript, оно является IP браузера, просто у JavaScript есть к нему доступ
//JavaScript Frontend// работа с IP браузера
//window.prompt('как тебя зовут?')
//document.getElementById('hello')

const heading = document.getElementById("hello")
//const heading2 =document.getElementsByTagName('h2')[0]
//const heading2 = document.getElementsByTagName('h2-class')
const heading2 = document.querySelector('h2')//возвращает всешда один селектор.
//Для вызова множественных селекторов использовать метод querySelectorAll.
console.dir(heading2)
//const heading3 = heading2.nextElementSibling
const h2List = document.querySelectorAll('h2')
console.log(h2List)
const heading3 = h2List[h2List.length -1]
console.log(heading3)

setTimeout(() => {
    addStylesTo(heading,'Yjinia Ovcharenko')
},1500)

setTimeout(() => {
    addStylesTo(heading3.children[0],'I love you!!!!', 'Green')
},3000)

setTimeout(() => {
    addStylesTo(heading2, 'Very much','yellow')
},4500)

function addStylesTo (node, text, color = `red`) {
    node.textContent = text
    node.style.color = color
    node.style.textAlign = 'center'
    node.style.backgroundColor = 'black'
    node.style.padding = '2rem'
    node.style.width = '100%'
    node.style.display = 'block'
}
heading.onclick = ()=> {
   if (heading.style.color ==='red') {
       heading.style.color = '#000'
       heading.style.backgroundColor = '#fff'
   }else {
       heading.style.color = 'red'
       heading.style.backgroundColor = '#000'
          }
}

heading2.addEventListener('dblclick', () => {
    if (heading2.style.color ==='yellow') {
        heading2.style.color = '#000'
        heading2.style.backgroundColor = '#fff'
    } else {
        heading2.style.color = 'yellow'
        heading2.style.backgroundColor = '#000'
    }
})

