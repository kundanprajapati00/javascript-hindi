let name = "kundan";
const age ="18";
var city ="ranchi"

console.table([name,age,city]);
/* let can not be redeclared but can be updated 
    A block scope variable
*/
 name ="kundan prajapati";
 console.log(name);
 

/* const can not be redeclared or can not be updated 
    A block scope variable
*/

/* var can be redeclared or can be updated 
    A global scope variable
*/
var city ="delhi";
console.log(city);

console.table([name,age,city]); // you can write all variable under square barakets (another methods of console)