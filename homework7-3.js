
//Написать функцию, которая создает пустой объект, но без прототипа.

function create (){
  const emptyObj = Object.create(null)
  console.log(emptyObj)
}
create()

