// Написать, функцию, которая принимает в качестве аргумента объект и выводит в консоль все ключи и значения только собственных свойств. 
// Данная функция не должна возвращать значение.

let buz = {
  name1: 'Artem',
  name2: 'Ilay'
}

function OwnProperty(){

  for (let name in buz) {
    if (buz.hasOwnProperty(name)) {
    console.log(name)
    }
  
  }
}
OwnProperty()