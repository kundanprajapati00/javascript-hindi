let str = " kundan";
let str1 = " kumar";
console.log(str+str1);
console.log(str1+str);  // outdated version don't use it 


// New version or modern javascript 
 
console.log(`first name ${str} ans last name ${str1} `); // use backtiks this is string interpolation

let name = new String('kundandc');    // another way of declaring string. it has some many methods
console.log(name.length);
console.log(name.at(-2));            //return the value of that index and also take negative values
console.log(name.charAt(2));           // return value of that index only positive values


let para = "hey rahul whats going on did you meet another rahul";
let search = "rahul"
let secondsearch = para.indexOf(search);
console.log(`the term you search ${search} in on ${secondsearch}`);

console.log(`the term you search ${search} 2 in on ${para.indexOf(search,secondsearch + 1)}`); 
