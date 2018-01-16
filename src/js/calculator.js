function Calc(input) {
    this.result = 0;
    this.input = input | 0;
    this.lastOperation = null;
}

Calc.prototype.getInput = function (input) {
    this.input = input;
};

Calc.prototype.add = function (input) {
    //Todo verify input
    this.result += input;
    this.lastOperation = '+';
    return this.result;    
};

var calc = new Calc();

calc.add(3)
