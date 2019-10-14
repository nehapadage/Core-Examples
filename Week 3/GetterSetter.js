class Vehicle {
    constructor() {
        this.model = "";
    }
    
    set model(value) {               //setter
        this._model = value;
    }

    get model() {                   //getter
        return this._model;
    }

    
}

let v = new Vehicle()
v.model=1.8;
console.log(v.model);