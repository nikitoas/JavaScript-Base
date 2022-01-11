//const person = {
  //  name : 'Mikita',
  //  age: 29,
 //   isProgrammer: true,
 //   languages: ['ru,eng,de'],
//'conplex key': 'Complex value',
//['key_' + (1+3)]: 'Computed key' ,///key_4
  //  greet (){
  //  console.log('greet from person')
   // },
    //info(){
        //console.log('this',this)
       // console.info('информация по имени человека', this.name)

   // }
//}
//console.log(person.name)
//const ageKey = 'key'
//console.log(person['age'])
//console.log(person['conplex key'])
//console.log(person)
//person.greet()

//person.age++
//person.languages.push('by')
//console.log(person)
//person['key_4'] = undefined
//delete person['key_4']
//console.log(person)
//console.log(person['key_4'])

//const {name, age: personAge = 10 , languages} = person
    //console.log(person)
//for (let key in person){ //////опасен бежит по прототипу,нужно обьявлять проверку
//    if (person.hasOwnProperty(key)) {
//console.log('key',key)
//console.log('value', person[key])
  //}
//}

//const keys = Object.keys(person)
//keys.forEach((key)=>{
   // console.log('key',key)
   // console.log('value',person[key])
//})

/////Контекст////

//person.info(person)

//const logger = {
   // keys() {
     //   console.log('Object Keys', Object.keys(this))
   // },
   // keysAndValues() {
        //Object.keys(this).forEach( function(key=>) {
        //console.log('"${keys}": ${this[key]}')
        //})
      //  Object.keys(this).forEach(key => {
      //  console.log('"${keys}": ${this[key]}')
      //  })
   // }
//}
//const bound = logger.keys.bind(logger)
//bound()
//logger.keys.call(person)
//logger.keysAndValues.call(person)