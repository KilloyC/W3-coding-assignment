//1.	Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.
//1a.	Programmatically subtract the value of the first element in the array from the value in the last element of the array 
//	Do not use numbers to reference the last element, find it programmatically, 
//	ages[7] – ages[0] is not allowed!
//1b.	Add a new age to your array and repeat the step above to ensure it is dynamic. (works for arrays of different lengths).
//1c.	Use a loop to iterate through the array and calculate the average age. 

let ages = [3, 9, 23, 64, 2, 8, 28, 93];


console.log(ages[0] - ages[ages.length -1]);

ages.push(102);

console.log(ages[0] - ages[ages.length - 1]);

 let sumOfNumbers = 0;

    for(let i = 0; i < ages.length; i++){

            sumOfNumbers += ages[i];

    }
    let average = sumOfNumbers / ages.length;
    console.log(Math.round(average));

//2.	Create an array called names that contains the following values: ‘Sam’, ‘Tommy’, ‘Tim’, ‘Sally’, ‘Buck’, ‘Bob’.
//2a.	Use a loop to iterate through the array and calculate the average number of letters per name. 

let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];

function arrayNames(lett){

    let total = 0;

    for(let i = 0; i < lett.length; i++){
        total += lett[i].length;
       
    }
    let ave1 = total / lett.length;

    return Math.round(ave1);
}
console.log(arrayNames(names));

//2b.	Use a loop to iterate through the array again and concatenate all the names together, separated by spaces. 

let result = "";

for(let i = 0; i < names.length; i++){
    result += names[i] + ' '; 
}
console.log(result);

//3.	How do you access the last element of any array?

let finalElement = names[names.length-1];
console.log(finalElement);


//4.	How do you access the first element of any array?

let firstElement = names[0];
console.log(firstElement);

//5.	Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.
//For example:
//namesArray = ["Kelly", "Sam", "Kate"] //given this array
//nameLengths = [5, 3, 4] //create this new array

let nameLengths = [];

for(let i = 0; i < names.length; i++){

    nameLengths.push(names[i].length);

}
console.log(nameLengths);

//6.	Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array. 

let total2 = 0;

for(let i = 0; i < nameLengths.length; i++){
        total2 += nameLengths[i];
}
console.log(total2);

//7.	Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times. (i.e. if I pass in ‘Hello’ and 3, I would expect the function to return ‘HelloHelloHello’).

function repeatWord(word, n){

    return word.repeat(n);
}

console.log(repeatWord('Hello', 3));

//8.	Write a function that takes two parameters, firstName and lastName, and returns a full name.
//	The full name should be the first and the last name separated by a space.

function firstAndLastName(firstName, lastName){

    return firstName + lastName;
}
console.log(firstAndLastName('Tom', ' Smith'));

//9.	Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.

let num = [1, 12, 15, 48, 24, 56]

let total1 = 0;
function sumNumbers(num2){
    for(let i = 0; i < num2.length; i++){

        total1 += num2[i];

    } if(total1 > 100){
        return true;
    } 
    return false;
}
console.log(sumNumbers(num));

//10.	Write a function that takes an array of numbers and returns the average of all the elements in the array.

let arrNumbers = [1, 2, 3, 5, 8, 13, 21, 34, 55, 89];

let arrSum = 0;
function findNumbers(arrNum){
    for(let i = 0; i < arrNum.length; i++){

        arrSum += arrNum[i];
    }
    let aveg = arrSum / arrNum.length;
    return Math.round(aveg);
}
console.log(findNumbers(arrNumbers));

//11.	Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array.

let one = [9, 20, 8, 12, 15, 27, 7, 44];
let two = [4, 25, 41, 1];


function greaterAverage(arr1, arr2){ 
let total = 0;
let total2 = 0;

for(let i = 0; i < arr1.length; i++){
    total += arr1[i]; 
}
for(let j = 0; j < arr2.length; j++){
    total2 += arr2[j];
}
    if(total / arr1.length > total2 / arr2.length){
        return true;
} 
return false;
} 
console.log(greaterAverage(one, two));

//12.	Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.

function willBuyDrink(isHotOutside, moneyInPocket){
    if(isHotOutside === true && moneyInPocket > 10.50){
        return true;
    }
        return false;
}
let moneyInPocket = 10.25;
let isHotOutside = true;
console.log(willBuyDrink(isHotOutside, moneyInPocket));

//13.	Create a function of your own that solves a problem. 
//	In comments, write what the function does and why you created it.

function whatShouldIReadNext(newBooks){

    return newBooks[Math.floor(Math.random()*newBooks.length)];
} 
let numOfHoursToRead = Math.floor(Math.random() * 5);    
let newBooks = ['Magicians', 'The Shadow of The Gods', 'The City of Brass', 'Spellslinger', 'Mother of Learning'];

    if(numOfHoursToRead < 1){
        console.log("You cant read today")
    } else 
    
console.log(`The book you should read next is: ${whatShouldIReadNext(newBooks)}, you can read this book for up to ${numOfHoursToRead} hours.`);

//this function allows me to find a book to read without have to pick it myself, which can be a problem at times. So this function will randomly pick a
//new book for me to read and set the number of hours I can read that book.

