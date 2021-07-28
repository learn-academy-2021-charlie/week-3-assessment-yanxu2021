// ASSESSMENT 3: Coding practical questions with Jest

const { isArray } = require("lodash")

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Add appropriate dependencies to the repository:
// $ yarn add jest

// Use test driven development to complete the following questions
// Run the file with the following command:
// $ yarn jest

// Reminder: The test will call your function


// --------------------1) Create a function that takes in a number (greater than 2) 
// and returns an array of that length containing the numbers of the Fibonacci.

// a) Create a test with expect statements for each of the variables provided.
// Test with expect statement format: describe("",()=>{test("",()=>{expect(functionName(testData).toEqual(expectResult))})})
// Input "number", output "array"

// Example input: 6
// Expected output: [1, 1, 2, 3, 5, 8]

// Example input: 10
// Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

describe("The fibonacci function.", () =>{
    test("takes in a number(>2) and returns an array of that length of Fibonacci.", ()=>{
        expect(fibonacci(6)).toEqual([1, 1, 2, 3, 5, 8])
        expect(fibonacci(10)).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55])
        expect(fibonacci(`yan`)).toEqual(`Please input a number(greater than 2).`)
        expect(fibonacci(1)).toEqual(`Please input a number(greater than 2).`)
    })
})

// b) Create the function that makes the test pass.
// Fibonacci logic: arr[i] = arr[i - 1] + arr[i - 2] 
// and start from : arr[0] = 1, arr[-1] = 0
// arr[1] = arr[0] + arr[-1] =1 + 0 = 1
// arr[2] = arr[1] + arr[0] = 1 + 1 = 2
// i > 2, is easier, e.g. arr[3] = arr[2] + arr[1] = 2 + 1 = 3
// arr[4] = arr[3] + arr[2] = 3 + 2 = 5
// input num ---> arr.length--->iterate  let i = 2(start from 2, simply may arr[0], arr[1] both equal to 1),i < num, i++

const fibonacci = (num) =>{
    if(typeof num !== `number` || num <= 2){
        return `Please input a number(greater than 2).`
    }else{
        let arr = []
        arr[0] = 1
        arr[1] = 1
        for(let i = 2; i < num; i++){
            arr[i] = arr[i-1] + arr[i-2]
        }
        return arr
    }
}

//console.log(fibonacci(6)) Manually test the for loop.


// --------------------2) Create a function that takes in an array and returns a new array of only odd numbers sorted from least to greatest.

// a) Create a test with expect statements for each of the variables provided.
describe("The sortOdds function.", () =>{
    test("takes in an array and returns a new array of only odd numbers sorted from least to greatest.", ()=>{
        var fullArr1 = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"]// Expected output: [-9, 7, 9, 199]
        var fullArr2 = ["hello", 7, 23, -823, false, 78, null, "67", 6, "number"]// Expected output: [-823, 7, 23]
        expect(sortOdds(fullArr1)).toEqual([-9, 7, 9, 199])
        expect(sortOdds(fullArr2)).toEqual([-823, 7, 23])
        expect(sortOdds(`yan`)).toEqual(`Please input an array.`)
    })
})

// b) Create the function that makes the test pass.
// Odd number selector: typeof arr[i] == `number` and arr[i] % 2 !== 0
// .filter() method creates a new array with all elements that pass the test implemented by the provided function.
// Array sorted from least to greatest--> The .sort() method
// .sort() method sorts the elements of an array in place and returns the sorted array. 
// The default sort order is ascending.<---perfect! 
// Recall, high-order function--> applies a function to each element of another function.

const sortOdds = (arr) =>{
    // One of the weired behaviour and spec in JavaScript is the typeof Array is Object.
    // Check if the variable is an array, using the isArray method.
    if(isArray(arr)){
        // return arr.filter(value => (typeof value == `number` && value % 2 !== 0))--->Output: [ 9, 7, 199, -9 ]
        // return (arr.filter(value => (typeof value == `number` && value % 2 !== 0))).sort()--->Output: [ -9, 199, 7, 9 ]   
        // Numeric Sort: by default, the .sort() sorts values as strings.
        // Get numeric sort done by: .sort(function(a,b){return a-b})
        return (arr.filter(value => (typeof value == `number` && value % 2 !== 0))).sort(function(a,b){return a-b})
        //Output: [ -9, 7, 9, 199 ]
    }else{
        return `Please input an array.`
    }
}
var fullArr1 = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"]//Expected output: [-9, 7, 9, 199]
console.log(sortOdds(fullArr1))
console.log(sortOdds(`yan`))


// --------------------3) Create a function that takes in an array and returns an array of the accumulating sum. 
// An empty array should return an empty array.

// a) Create a test with expect statements for each of the variables provided.
describe("The accSum function.", () =>{
    test("takes in an array and returns an array of the accumulating sum.", ()=>{
        var numbersToAdd1 = [2, 4, 45, 9]
        // Excpected output: [2, 6, 51, 60]
        
        var numbersToAdd2 = [0, 7, -8, 12]
        // Expected output: [0, 7, -1, 11]
        
        var numbersToAdd3 = []
        // Expected output: []
        expect(accSum1(numbersToAdd1)).toEqual([2, 6, 51, 60])
        expect(accSum1(numbersToAdd2)).toEqual([0, 7, -1, 11])
        expect(accSum1(numbersToAdd3)).toEqual([])
        // expect(accSum([0, `yan`, -1, 11]).toEqual(`Please input an numeric array.`))
        expect(accSum1(`yan`)).toEqual(`Please input an array.`)

        expect(accSum2(numbersToAdd1)).toEqual([2, 6, 51, 60])
        expect(accSum2(numbersToAdd2)).toEqual([0, 7, -1, 11])
        expect(accSum2(numbersToAdd3)).toEqual([])
    })
})

// b) Create the function that makes the test pass.
// Solution 1: 
// The accumulating sum logic: newArr[0] = arr[0], 
// newArr[1] = arr[0] + arr[1]---->newArr[1] = +newArr[0] + arr[1]  
// newArr[2] = arr[0] + arr[1] +arr[2]---->newArr[2] = newArr[1] + arr[2]
//......newArr[i] = newArr[i-1] + arr[i] 

const accSum1 = (arr) =>{
    if(isArray(arr)){
        let newArr = []
        for(let i = 0; i < arr.length; i++){
            newArr.push((newArr[i-1] || 0) + arr[i])//i, newArr[i] = newArr[i-1] + arr[i]--->push to newArr[i]
            //An empty array should return an empty array.
        }
        return newArr
    }else{
        return `Please input an array.`
    }
}
        
console.log(accSum1([1,3,5]))// Expected output: [1,4,9]
console.log(accSum1(`yan`))

// Solution 2:
// . reduce() method in JavaScript is used to reduce the array to a single value and executes a provided function for each value of array
// from left to right and the return value of the function is stored in an accumulator.
// Syntax review: the reducer function takes four arguments: accumulator, current value, current index, source array.
// Arrow function:using `fat arrow`=> replacing `function`
// reduce((accumulator, currentValue) => { ... } )
// reduce((accumulator, currentValue, index) => { ... } )
// reduce((accumulator, currentValue, index, array) => { ... } )
// reduce((accumulator, currentValue, index, array) => { ... }, initialValue)

const accSum2 = (arr) =>{
    if(isArray(arr)){
        let newArr = arr.reduce((accumulator,currentValue,index) =>{
            return [...accumulator , currentValue + (accumulator.length > 0 ? accumulator[index-1] : 0)]
        },[])//[]-->initialValue return empty array
        return newArr
    }else{
        return `Please input an array.`
    }
}

// Test Suites: 1 passed, 1 total
// Tests:       3 passed, 3 total
// Snapshots:   0 total
// Time:        0.617 s, estimated 1 s
// Ran all test suites.
// ✨  Done in 2.63s.
// yanxu@Yans-MacBook-Air week-3-assessment-yanxu2021 % 