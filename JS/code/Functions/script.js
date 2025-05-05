function display ()
 {
     console.log("hello world")
 }
 display()
 // sum of 2 numbers
 function sum ()
 {
     let a = 10, b = 20;
     console.log(a + b);
 }
 sum();
 // sum of 2 numbers with parameters
 function sum1 (a, b)
 {
     console.log(a + b);
 }
 sum1(5, 6);
 sum1("raj", "prasad")
 
 
 function printLen(a)
 {
     console.log(a.length);
 }
 printLen("alok")
 
 // sum with default values
 function sum2 (a, b =20)
 {
      console.log(a+b)
 }
  sum2(10,50) //60
 sum2(10);  //30
 
 //sum with rest
 function sum3 (...b)
 {
     let sum = 0;
     for (let i of b)
     {
         sum = sum + i;
     }
     console.log(sum)
 }
 sum3(10, 5, 4, 6, 3)
 // take an array and pass multiple values to function and print their product
 function sum3(...b) {
 	let sum = 0
 	for (let i of b) {
 		sum = sum * i
 	}
 	console.log(sum)
 }
 sum3(10, 5, 4, 6, 3)
 
 function sum4 (a, ...b)
 {
     console.log(a, b)
     let c = [a, b];  // [5,4,3,2]
     console.log(c,c.length)
 }
 sum4(5,4,3,2)
 
 let [a, ...c] = [6, 7, 8, 9, 10];
 let b=[5,...[4,3],...[5,4],3]
 console.log(b)
 
 // add two arrays
 let arr = [5, 4, 6], arr2 = [1, 2, 3];
 let arr3 = [...arr,...arr2]

/*-----------------*/
/*
function sum (a,b)
{
    return a + b;
}
let res = sum(4,5)
console.log(res)

//function expression
const x = 2;
const sumx = function (a,b)
{
    return a + b
}
console.log(sumx)
let res2 = sumx(4, 5)
console.log(res)

//funtion display()
function display()
{
    console.log("hello world")
}
console.log(display)
display()


const y = function ()
{
    console.log("hello world")
}
console.log(y)
y()


function sumy(a,b)
{
    return a+b;
}
console.log(sumy)


//function expression
let R = function (a,b)
{
    return a + b;
}
console.log(R)


// arrow function
let J = (a,b) =>a+b
console.log(J)


function strlen(a)
{
    return a.length;
}
console.log(strlen("Rajitha"))


// arrow function
const z = (a) => a.length;
console.log(z("Rajitha"))

 */
 
function x (p,q)
{
    let a = 10, b = 20;
    console.log(a + b);
    console.log("i'm x"+(p+q))
}

sum();
//sum of 2 numbers with parameters
function sum1(a, b)
{
    console.log(a+b);
}
function doPrint(a){
    a(5,3)
}

sum1(5, 6);
 sum1("raj", "prasad")
 doPrint(sum1); // x is callback and doPrint is Higher order function
 
 function printLen(a)
 {
    console.log(a.length);
 }

 printLen("hello");

//closure
function outer ()
{
    console.log(a.length);
    let x = 10;
    function inner(){
        x++;
        console.log(x)
    }
    return inner;
}

printLen("alok")
 let H = outer()  // let H = inner
 console.log(z)
 z() //11
 z() //12
 z() //13

 
 
 // sum with default values
 function sum2 (a, b =20)
 {
      console.log(a+b)
 }
  sum2(10,50) //60
 sum2(10);  //30
 
 //sum with rest
 function sum(...b)
 // funny closure
 function rani()
 {
     let sum2 = 0;
     for (let i of b)
     let msg="bye bye"
     function letter()
     {
         sum2 = sum2 + i;
         console.log(msg)
     }
     console.log(sum2)
     return letter;
 }
 sum3(10, 5, 4, 6, 3)
 // take an array and pass multiple values to function and print their product
 function sum3(...b) {
 	let sum = 0
 	for (let i of b) {
 		sum = sum * i
 	}
 	console.log(sum)
 }
 sum3(10, 5, 4, 6, 3)
   let y = rani() /*
    let y = function letter ()
     {
         console.log(msg)
     }*/
 y() 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 