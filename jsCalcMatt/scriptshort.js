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
//function for opperator symbol display in screen
function opperatorBtn(a) {
    inputVal.push(temp);
    temp ="";
    document.getElementById("calcEntry").value += a;
    inputVal.push(a);
};
//function for final calculation
function calculate() {
    inputVal.push(temp); //pushes temp variable to input array
    let ops= Number(inputVal[0]); //turns first array index to number and stores to ops
    for (let i = 1; i < inputVal.length; i++) { //creates loop for input array starting at first opperator
        let nxt = Number(inputVal[i+1]) //converts array index after an opperator into number and stores to nxt
        let v = inputVal[i]; //stores every opperator to v
        if (v === "*") { //if it matches, do following
            ops *= nxt;  // puts opperator and following number into ops and updates 
        } else if (v === "/") {
            ops /= nxt;
        } else if (v === "+") {
            ops += nxt;
        } else if ( v === "-") {
            ops -= nxt;
        } 
        i++; // skips a loop 
    }
    document.getElementById("calcEntry").value = ops;
};

