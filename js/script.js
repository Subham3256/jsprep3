// 1.How do you loop through an array in JavaScript using fo?
// let arr = [10, 20, 30, 40];
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// 2.How do you find the length of an array?

// let arr = [10, 20, 30,40,50,60,70,80,90];
// console.log(arr.length); 


// 3.How do you remove the last element of an array?
// let arr = [10, 20, 30];
// arr.pop();
// console.log(arr); 



// 4.How do you remove the first element of an array?
// let arr = [10, 20, 30,40,50];
// arr.shift();
// console.log(arr); 

// 5.How do you add elements to the beginning of an array?

// let arr = [10, 20];
// arr.unshift(5);
// console.log(arr); 


//6. How do you merge two arrays?

// const arr1 = [1,2,3,4,5,6,7,8,9,10];
// const arr2 = ["Aditya", "Aryan", "Subham"];


// const mergedArray = [...arr1, ...arr2];
// const mergedArray = arr1.concat(arr2);

// console.log(mergedArray);




//7. How do you check if an element exists in an array?
// const arr = [1];

// function checkArray(arr){
//     if(arr.length > 0){
//         console.log("An element exist in an array");
        
//     }else{
//        console.log("An element doesn't exist in an array");
//     }
// }

// checkArray(arr);


// 8.How do you reverse an array?
// let arr = [1, 2, 3];
// arr.reverse();
// console.log(arr); 

// 9.How do you generate an array of numbers using loops?
// let numbers = [];
// for (let i = 1; i <= 5; i++) {
//     numbers.push(i);
// }
// console.log(numbers); 


// 10.How do you sort an array in ascending order?

// const names = ["Aditya", "Rahul", "Neha", "Subham"];
// console.log(names.sort().reverse());




//setTimeout()
// const container = document.querySelector("#container");

// const btn = document.querySelector("#button");

// btn.addEventListener("click",(event)=>{
//    setTimeout(() => {
        // container.classList.toggle("bg-red-500")
    // }, 2000);

//     console.log(event);
    

// })

//setIntervel()

// setInterval(() => {
//     console.log("Hello World!");
    
// }, 2000);



//preventing event

const link = document.querySelector("#link");


link.addEventListener("click",(event)=>{
  event.preventDefault();
})


//propagration

link.addEventListener("click",(event)=>{
  event.stopPropagation();
})