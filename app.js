// function fetchdata(){
//     return new Promise((resolve)=> {
//         setTimeout(() => {
//            resolve("Hello World") 
//         }, 1000);
//     })
// }


// async function getData() {
//     console.log("Fetching data...");
//     let data = await fetchdata();
//     console.log(data);
// }


// getData(); 


// function fetchdata(){
//     return new Promise((resolve, ) => {
//         setTimeout(() => {
//             resolve("data fetched successfully!")
//         }, 4000);
//     })
// }


// async function getData(){
//     console.log("fetching data...");
//     let data = await fetchdata();
//     console.log(data);
// }
// getData();


// function fetchUserDetails(){
//     return new Promise((resolve)=>{
//       setTimeout(() => {
//         resolve({name: "john", age: "25"});
//       }, 5000);
//     })
// }


// async function getUserDetails(){
//     console.log("fetchng data..");
//     let userData = await fetchUserDetails();
//     console.log("UserDetails:", userData);
// }

// getUserDetails();



// function fetchitem1(){
//     return new Promise((resolve)=>{
//         setTimeout(() => {
//            resolve({name: "john", age: 23, work:"remote"}) 
//         }, 2000);
//     });
// }

// function fecthitem2(){
//     return new Promise((resolve)=>{
//        setTimeout(() => {
//         resolve({name:"aasma", age:32, work:"remote"})
//        }, 7000);
//     });
// }


// async function getBothItems(){
//     console.log("fetching data....");
//     let item1 = await fetchitem1();
//     let item2 = await fecthitem2();
    
//     console.log(item1);
//     console.log(item2);
// }


// getBothItems();


// async function fetchData(){
//   try {
//     const response = await fetch ("https://jsonplaceholder.typicode.com/invalid");
//     if(!response.ok){
//         throw new error(`HTTP Error! Statue: ${response.status}`);
//     }
//     const data = await response.json();
//     console.log('Data fetched:' , data);
//   } catch (error) {
//     console.error('Error:', error.message);
//   }
// }

// fetchData();

// function age(num){
    
//     if(num < 18){
//         throw new Error("age less then 18 is not appropriate");
//     }
//     return num;
// }
// try{
//     const userAge = 13;
//     console.log(`user age is: ${age(userAge)}`);
// }catch (error){
//     console.error("caught an error:", error.message);
// }


// const numbers = [5, 10, 15, 20];
// const doubled = numbers.map(num => num*2);
// console.log(doubled);


// const numbers = [10, 15, 20, 25, 30];
// const greaterThan15 = numbers.filter(num => num > 15);
// console.log(greaterThan15);



// const numbers = [10, 15, 20, 25, 30];
// const sum = numbers.reduce((acc , res) => acc + res, 0 );
// console.log(sum);

// const numbers = [10, 15, 20, 25, 30];
// numbers.forEach(num => console.log (num/2));


// const book = {title: "English", author: "Jhonjay", year: 1990}
// const keys = Object.keys(book);
// console.log(keys);

// const values = Object.values(book);
// console.log(values);

// const entries = Object.entries(book);
// console.log(entries);


// const bookName = {name: "english"};
// const details = {author: "jhonjay", year: 1965};
// const merged = Object.assign({}, bookName, details );
// console.log(merged);

// const userName = {name: "raani"};
// Object.freeze(userName);
// userName.name = "aashi";
// console.log(userName);


// function createMultiplier(multiplier){
//      return function (num){
//         return num*multiplier;
//      };
// }

// const double = createMultiplier(2);
// console.log(double(8));  


// let age= prompt("enter your age");
// age = Number.parseInt(age);

// f(age > 10 && age < 20){
//    console.log("your age is between 10 and 20");
// }else {
//    conisole.log("your age is not between 10 and 20");
// }

// switch (age) {
//    case 12:
//       console.log("you are eligible");
//       break;
//       case 13:
//       console.log("you are eligible");
//       break;
//       case 15:
//          console.log("you are eligible");
//          break;
//          case 18:
//             console.log("you are eligible");
//             break;
//    default:
//       console.log("you are not eligible");
//       break;
// }  

// let number = 22;
// if(number%2===0 && number%3===0){
//    console.log("number is divisible by 2 and 3");
// }else{
//    console.log("number is not divisible by 3 and 2");
// }

// let age = 34;
// let a = age>18 ? "you can drive ": "you cannot drive";
// console.log(a);

// let n = prompt("enter a number");
//  n = Number.parseInt(n);
// let factorial = 1;
// for(let i=1 ;i<=n; i++){
//     factorial = factorial * i;
// }
// console.log("fac of n numbers are" + factorial); 

// let marks = {
//     aasma: 100,
//     usama: 90,
//     maryam: 99,
//     ayesha: 94
// }
// for(let i = 1; i< Object.keys(marks).length ; i++){
//     console.log("the marks of " + Object.keys(marks)[i] + " are " + marks[Object.keys(marks)[i]]);
// }

// for(let key in marks){
//     console.log("The marks of " + key + " are " + marks[key]);
// }


// let cn = 47;
// let i;
// while(i != cn ){
//     console.log("Try again");
//     i = prompt("Enter a number");
// } 
// console.log("You entered a right number");

// const mean = (a, b, c, d) => {
//    return (a+b+c+d)/4;
// }
// console.log(mean(4, 5, 6, 7));
// let str = "har\"";
// console.log(str.length);

// let sentence = "The quick brown fox jumps over the lazy dog";
// // let word = "fox";
// // console.log(sentence.includes(word));

// console.log(sentence.toLowerCase());

// let str = "please give rs 1000";
// let amount = str.slice("please give rs".length);
// console.log(amount);   

// let runAgain = true;

// const canDrive = (age) => {
//     return age>=18?true:false;
// }

// while(runAgain){
// let age = prompt("Enter your age");
// age = Number.parseInt(age);
// if(age<0){
//     console.error("Please enter a valid age");
//     break;
// }

// if(canDrive(age)){
//     alert("Yes you can Drive");
// }else {
//     alert("You cannot drive");
// }
// runAgain = confirm("Do you want to play again")
// }