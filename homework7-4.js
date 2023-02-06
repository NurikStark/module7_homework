
// Реализуйте следующее консольное приложение подобно примеру, который разбирался в видео. Реализуйте его на прототипах.
// Определите иерархию электроприборов. Включите некоторые в розетку. Посчитайте суммарную потребляемую мощность всех включенных приборов (передайте аргумент). 
// Таких приборов должно быть как минимум два (например, настольная лампа и компьютер). Выбрав прибор, подумайте, какими свойствами он обладает.

function TypeInstrument(turnIt){
  this.type = "Digitally",
  this.turnIt = turnIt 
}

function PropertiesInstrument(turnIt, dimensions,){
    this.turnIt = turnIt,
    this.dimensions = dimensions
}
PropertiesInstrument.prototype = new TypeInstrument()

PropertiesInstrument.prototype.getConsumption = function(name, consumption){
  console.log(`${name} Consumption is ${consumption} Вт`)
}
const phone = new PropertiesInstrument('On', '15,5 cm',)
const TV = new PropertiesInstrument('Off', '42 cm',)

console.log(phone)
console.log(TV)

phone.getConsumption('Iphone 12', 180)
TV.getConsumption('TV 55', 210)