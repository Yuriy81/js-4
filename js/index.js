let teslaX = {};
teslaX.name = 'Tesla X';
teslaX.color = 'red';
teslaX.price = '100000';
teslaX.beep = function(){
    alert(teslaX.name + ' beep-beep!');
}
teslaX.beep = beep;
teslaX.beep();
/*alert(teslaX.color);*/

let teslaS = {}
teslaS.name = 'TeslaS ';
teslaS.color = 'black';
teslaS.price = '90000';
teslaS.beep = beep;
teslaS.beep();
/*alert(teslaS.price);*/

function beep(){
    alert(this.name + ' beep-beep!')
}

let tesla3 = {
    name:'Tesla3',
    color: 'blue',
    price: '50000',
    beep: beep
}
tesla3.beep()

function Car(name, color, price){
    this.name = name;
    this.color = color;
    this.price = price;
    return this;
}
Car.prototype.beep = beep;
let teslaRoadster = new Car('Tesla Roadster', 'red', 20000);
teslaRoadster.beep();

class SuperCar{
    constructor (name, color, price){
        this.name = name;
        this.color = color;
        this.price = price;
    }
    beep(){
        alert(this.name + ' ' + this.color + ' beep-beep!');
    }
}

let ferrariF430 = new SuperCar('Ferrari F430', 'red', 300000);
ferrariF430.beep()
let ferrariF430Black = Object.create(ferrariF430);
ferrariF430Black.color = 'black';
ferrariF430Black.beep();

const carStr = `{
    "name": "Chevrolet Corvette",
    "color": "silver",
    "price": 90000
}`
let corvette = JSON.parse(carStr);
corvette.beep = beep;
corvette.beep();