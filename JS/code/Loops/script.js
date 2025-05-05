//Loops
let i = 1
while ( i < 10){
    console.log(i);
    i++;

}

// Do while
let j = 1;
do
{
    console.log(j);
    j++;
} while (j < 10);


i = 25;
 while (i >= 1) {
     if (i % 2 == 0)
     {
         console.log(i)
     }
 	i--
 }



 let asterisks = "";
for (let i = 0; i < 2; i++) {
  asterisks += "* ";
}
console.log(asterisks);


let r = 1;
while(r<=4){
    let c=1,stars='';
    while(c<=r){
        stars= stars+"*"
        c++;
    }
    console.log(stars)
    r++;
}

//for loops
for (let i = 10; i >=1; i--) {
    console.log(i)
}

//Arreys
let arr = [5,4,9,8,1];
for(let i = 0; i<=arr.length-1; i++){
    console.log(i)
}
let obj = {
    name:"Rajitha",
    age:20
}
//for of
for(let e of arr){
    console.log(e)
}
//for in
for(let e in arr){
    console.log(Obj[e],e)
}
