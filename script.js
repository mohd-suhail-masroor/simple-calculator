let value = document.getElementById("input");
let temp;
let result,calculation = "";

function constructor(instant) {
    this.number = function () {
        temp = value.value;
        temp = temp + instant;
        value.value = temp;
    }
    this.operator = function () {
        temp = value.value;
        if(temp != ""){
            let m = temp.substring(temp.length-1,temp.length);
            if(m == 1 || m == 2 || m == 3 || m == 4 || m == 5 || m == 6 || m == 7 || m == 8 || m == 9 || m == 0 || m == "." ){
                if(calculation == "")
                    calculation = temp;
                else{
                    calculation = calculation + temp;
                    calculation = eval(calculation);
                    result = calculation;
                }
                calculation = calculation + instant;
                temp = value.value = "";
            }
        }
        value.value = temp;
    }
}
// numbers declaration

let zero = new constructor(0);
let one = new constructor(1);
let two = new constructor(2);
let three = new constructor(3);
let four = new constructor(4);
let five = new constructor(5);
let six = new constructor(6);
let seven = new constructor(7);
let eight = new constructor(8);
let nine = new constructor(9);

// operators declaration

let plus = new constructor("+");
let minus = new constructor("-");
let multiply = new constructor("*");
let divide = new constructor("/");

// cancel function

function cancel() {
    temp = result = calculation = value.value ="";

}

// backspace function

function backspace() {
    temp = value.value;
    temp = temp.substring(0,temp.length-1);
    value.value = temp;
}

// dot function

function dot() {
    let check;
    temp = check = value.value;
    if (temp == "")
        temp = temp + "0.";
    else{
        if(check = check.indexOf(".")==-1)
        temp = temp + ".";
        else
        temp = temp;
    }
    value.value = temp;
}

// equal function

function equals() {
    if(value.value == ""){
        value.value = result;
        result = "";
    }
    else{
        calculation = calculation + value.value;
		console.log(calculation);
        result = eval(calculation);
        value.value = result;
        result = calculation = "";
    }
}
