const accountId = 1443355
let accountEmain="AlokGoogle.com"
var accountPassword="12345"
accountCity="ganjam "
let accountState

// accountId=2
accountEmain="alokpra572@gmail.com"
accountPassword=9078
accountCity="BBSR"

// console.log(accountId);
console.table([accountId,accountEmain,accountPassword,accountCity,accountState]); 

let a = 10;
var b = 20;

function m1() {
    a = 30;
    console.log(a);

    b = 40;
    console.log(b);
}
m1();

/*
// Dont use the var datatype
beacause of issue in block scope and functionla code  
*/


console.log(a);
console.log(b);