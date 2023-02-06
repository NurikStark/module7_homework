// Написать функцию, которая принимает в качестве аргументов строку и объект, 
// а затем проверяет есть ли у переданного объекта свойство с данным именем. 
// Функция должна возвращать true или false.


function fanc(string, object){
  if(typeof string == "string" || typeof object == "object"){
    console.log(true)
  }
  else{
    console.log(false)
  }

}
const res = fanc("ssdsd", {ssd: 13, dsd: "dsd"}, 12)
console.log(res)
