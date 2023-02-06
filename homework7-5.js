// Переписать консольное приложение из предыдущего юнита на классы.

// Реализуйте следующее консольное приложение подобно примеру, который разбирался в видео. Реализуйте его на прототипах.
// Определите иерархию электроприборов. Включите некоторые в розетку. Посчитайте суммарную потребляемую мощность всех включенных приборов (передайте аргумент). 
// Таких приборов должно быть как минимум два (например, настольная лампа и компьютер). Выбрав прибор, подумайте, какими свойствами он обладает.

class Parents{
  constructor(type){
  this.type = 'Digital';
  this.turnIt = true;
  }
  getInfo(){
    return this.name + ' Turn it off';
  }
}

class Child extends Parents{
  constructor(isPhone, name, type){
    super(type);
    this.isPhone = isPhone;
    this.name = name + this.type;
  }
  getInfo(){
    if(this.isPhone){
      return  this.name + ' Turn it on'
    }else {
      return super.getInfo()
    }
  }
}

const phone = new Child(true, 'Iphone12 ');
const TV = new Child(false, 'TV ');

console.log(phone.getInfo())
console.log(TV.getInfo())