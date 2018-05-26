/*
let inputVal = [];
let temp ="";
//function for ac reset button
function amount() {
    document.getElementById("calcEntry").value ="";
    inputVal = [];
    temp = "";
};
//funciton for ce button
function backspace() {
    document.getElementById("calcEntry").value ="";
    temp = "";
};

//function for number buttons
function numberAdd(a) {
 temp += a;
  document.getElementById("calcEntry").value += a;
 console.log(temp);
 console.log(inputVal);

};
//function for division symbol display in screen
function divideBtn(a) {
    inputVal.push(temp);
    temp="";
    document.getElementById("calcEntry").value += "/";
    inputVal.push(a);
};
//function for multiply symbol display in screen
function multiplyBtn(a) {
    inputVal.push(temp);
    temp ="";
    document.getElementById("calcEntry").value += "*";
    inputVal.push(a);
};
// function for minus symbol to display on screen
function takeawayBtn(a) {
    inputVal.push(temp);
    temp ="";
    document.getElementById("calcEntry").value += "-";
    inputVal.push(a);
};
// function for addition symbol to display on screen
function additionBtn(a) {
    inputVal.push(temp);
    temp ="";
    document.getElementById("calcEntry").value += "+";
    inputVal.push(a);
    
    console.log(inputVal);
};


function calculate() {
    inputVal.push(temp);
    let ops= Number(inputVal[0]);
    for (let i = 1; i < inputVal.length; i++) {
        let nxt = Number(inputVal[i+1])
        let v = inputVal[i];
        if (v === "*") {
            ops *= nxt;
        } else if (v === "/") {
            ops /= nxt;
        } else if (v === "+") {
            ops += nxt;
        } else if ( v === "-") {
            ops -= nxt;
        } 
        i++;
    }
    document.getElementById("calcEntry").value = ops;

};


/* create a function that runs when push =
function loops through the whole inputVal array starting at the first index
if the the index is ('*' or '/' or '+' or '-'),
turn it into the real symbol; (an push to ops?)
else if the index is a string,
turn into a number; (an push to ops?) */
