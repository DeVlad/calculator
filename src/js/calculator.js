/* Calculator without eval() */

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
    this.operator = null;
    this.operand = null;    
    this.osd = '';
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

    document.getElementById(buttons.plus).addEventListener("click", this.add.bind(this));
    document.getElementById(buttons.minus).addEventListener("click", this.subtract.bind(this));
    document.getElementById(buttons.multiply).addEventListener("click", this.multiply.bind(this));
    document.getElementById(buttons.divide).addEventListener("click", this.divide.bind(this));

    document.getElementById(buttons.back).addEventListener("click", this.back.bind(this));
    document.getElementById(buttons.clear).addEventListener("click", this.clear.bind(this));
};

Calculator.prototype.getNumber = function (number) {
    //console.log(number);   
    this.osd += number;
    this.display();
};

Calculator.prototype.add = function () {
    this.operator = '-';
    console.log('add');
    
    // this.display();
};

Calculator.prototype.subtract = function () {
    this.operator = '-';
    console.log('subtract');
};

Calculator.prototype.multiply = function () {
    this.operator = '*';
    console.log('multiply');
};

Calculator.prototype.divide = function () {
    this.operator = '/';
    console.log('divide');
};

Calculator.prototype.back = function () {
    this.osd = this.osd.slice(0, -1);
    this.display();
};

Calculator.prototype.clear = function () {
    console.log('clear');
    this.result = 0;
    this.operator = null;
    this.operand = 0;
    this.osd = '';
    this.display();
};

Calculator.prototype.display = function () {
    if (this.osd === '') { // Display zero
        document.getElementById('screen').innerHTML = this.result;
    } else {
        document.getElementById('screen').innerHTML = this.osd;
    }
};

var calc = new Calculator();
