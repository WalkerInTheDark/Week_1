 import {halfOf, multiply, parent} from "./lib.js";

 /* Divide by 2*/
document.getElementById("Divide").onclick = function a() { 
    var x = prompt("Enter a number you want to divide by 2 and look at Console"); 
        console.log("Divide by 2 answer: " + halfOf(x));};

/* multiply */
document.getElementById("Multiply").onclick = function b() { 
    var a = prompt("Enter first number you want to multiply");
        var b = prompt("Enter second number you want to multiply");
            console.log("Multiply answer: " + multiply(a, b));};

/* parent, child */
document.getElementById("ParentChildID").onclick = function c() { 
    const childFN = parent();
    childFN();
}
          