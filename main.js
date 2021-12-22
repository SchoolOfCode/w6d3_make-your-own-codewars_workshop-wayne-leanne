/* 
👉 Write your kata here!
*/

// take an array of words, and return a new array where the words only start & finish with vowel in the same order.

//For example ["Australia", "Thailand", "Africa", "Bali", "India", "England", "America", "Asia",]
//Should Return ["Australia", "Africa", "India", "America", "Asia",]


//👉 Write the function your CodeWarriors will start with below here:

export function sortList(array){
    // Your function goes here.
    let newArray = [];

    array.forEach(element => {
        let lst = element.length -1;
       if (element[0].match(/[aeiou]/i) && element[lst].match(/[aeiou]/i) ) {

            newArray.push(element); 
       }
       
    });
    return newArray;
}

