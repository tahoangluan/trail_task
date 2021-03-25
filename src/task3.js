/* eslint-disable */
//Write a function that uses an array of non-negative integers and strings and returns a new
// array without strings. Return an empty array if there is no match.
function filterArray(array) {
    let newArray = []
    for (let i in array){
        if (/^[0-9]\d*$/.test(array[i]) && typeof array[i] !== "string"){
            newArray.push(array[i])
        }
    }
    return newArray
}

//) Write a function that converts an object into an array, where each element represents a keyvalue pair in form of an array.
// Return an empty array if the object is empty
function toArray(json) {
    let array = Object.keys(json).map(function (d) {
        let arr = []
        arr.push(d)
        arr.push(json[d])
        let total =[]
        total.push(arr)
        return total
    })
    return array
}

//Write a function that, given a number, returns an array containing the two halves of that
// number. If the number is odd, make the rightmost number higher
function numberSplit(input) {
    let array = []
    if (Math.abs(input)%2 === 1){
        console.log()
        console.log("roud",Math.round(input/2))
        array.push(Math.floor(input/2))
        array.push(Math.floor(input/2)+1)
    }if (Math.abs(input)%2 === 0) {
        array.push(input/2)
        array.push(input/2)
    }
    return array
}

// Write a function that takes an array of numbers and returns the second largest number.
function secondLargest(array) {
//lazy version
    //the array must contain only Number
    var sortedArray = array.sort(function(first,second){
        //the array will be sorted from big to small
        return second-first});
    //Now we have the new sorted array
    //we just have to get the second element
    var secondLargest = sortedArray[1]
    //console.log("secondLargest With Version 1 ",secondLargest)

    //or we can do it
    var sortedArray2 = array.sort(function(first,second){
        //the array will be sorted from small to big
        return first-second});
    //and now the second largest
    var secondLargest2 = sortedArray2[sortedArray2.length-2]
    //console.log("secondLargest With Version 2",secondLargest2)

    //For loop version
    for (let index = 1; index< array.length; index++){
        for (let nextIndex = 0; nextIndex<index; nextIndex++){
            if (array[index]<array[nextIndex]){
                let temp = array[index]
                array[index] = array[nextIndex]
                array[nextIndex] = temp
            }
        }
    }
    //console.log("the second Largest With For Loop", array[array.length-2])
    return secondLargest
}

//Write a function that returns true if all parameters are true, otherwise false. 
function allTruthy(array) {
    let check = true
    for (let i = 0; i<array.length;i++){
        if (array[i] === 0 ||
            typeof array[i] === "undefined" ||
            array[i] === ""||
            isNaN(array[i]) ||
            array[i] === null || array[i] === false){
            check = false
            break
        }
    }
    return check
}
function exportFunction(input, check) {
    if (check === "filterArray"){
        return filterArray(input)
    }if (check === "toArray"){
        return toArray(input)
    }if (check === "numberSplit"){
        return numberSplit(input)
    }if (check === "secondLargest"){
        return secondLargest(input)
    }if (check === "allTruthy"){
        return allTruthy(input)
    }
}
export {exportFunction}
