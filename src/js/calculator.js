/* Calculator display limit: 15 symbols  */

var buttons = { // Button : Id
    b0: "btn-0",
    b1: "btn-1",
    b2: "btn-2",
    b3: "btn-3",
    b4: "btn-4",
    b5: "btn-5",
    b6: "btn-6",
    b7: "btn-7",
    b8: "btn-8",
    b9: "btn-9",
    plus: "btn-plus",
    minus: "btn-minus",
    multiply: "btn-multiply",
    divide: "btn-divide",
    equal: "btn-equal",
    percent: "btn-percent",
    back: "btn-backarrow",
    sign: "btn-sign",
    clear: "btn-clear"
};

function Calculator() {
    this.result = 0;
    this.lastOperation = null;
    this.lastNum = 0;
    this.display = '';

    this.initEvents(buttons);
}

Calculator.prototype.initEvents = function (buttons) {
    document.getElementById(buttons.b0).addEventListener("click", this.getNumber.bind(this, 0));
    document.getElementById(buttons.b1).addEventListener("click", this.getNumber.bind(this, 1));
    document.getElementById(buttons.b2).addEventListener("click", this.getNumber.bind(this, 2));
    document.getElementById(buttons.b3).addEventListener("click", this.getNumber.bind(this, 3));
    document.getElementById(buttons.b4).addEventListener("click", this.getNumber.bind(this, 4));
    document.getElementById(buttons.b5).addEventListener("click", this.getNumber.bind(this, 5));
    document.getElementById(buttons.b6).addEventListener("click", this.getNumber.bind(this, 6));
    document.getElementById(buttons.b7).addEventListener("click", this.getNumber.bind(this, 7));
    document.getElementById(buttons.b8).addEventListener("click", this.getNumber.bind(this, 8));
    document.getElementById(buttons.b9).addEventListener("click", this.getNumber.bind(this, 9));    
};

Calculator.prototype.getNumber = function (number) {
    console.log(number);
};

/*
Calculator.prototype.add = function (input) {    
    this.result += input;
    this.lastOperation = '+';
    return this.result;    
};*/

Calculator.prototype.multiply = function (input) {

};

Calculator.prototype.display = function (input) {    
    if (input == 'C') {
        document.getElementById('screen').innerHTML = '';
        this.display = '';
    }

    document.getElementById('screen').innerHTML += input;
};

var calc = new Calculator();
