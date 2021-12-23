//👉 Write your tests below here:

import {sortList} from "./main.js";

describe(`Test function sortList for correct output`, () => {
    test(`it must return an array where all words start & finish with a vowel`, () => {
        const input = ["Australia", "Thailand", "Africa", "Bali", "India", "England", "America", "Asia",]
         const actual = sortList(input);
         const expected = ["Australia", "Africa", "India", "America", "Asia",]
         expect(actual).toStrictEqual(expected);     
    })

     test(`Check same items different order`, () => {
         const input2 = ["Thailand", "Africa", "Bali", "India", "England", "America", "Asia","Australia",]//different order
         const actual = sortList(input2);
         const expected2 = ["Africa", "India", "America", "Asia", "Australia",]
         expect(actual).toStrictEqual(expected2);
     })   
        
    test(`Check different items different order`, () => {
        const input3 = ["awesome", "idea", "ala", "eau","everybody", "alternative","something"] //different words
        const actual = sortList(input3);
        const expected3 = ["awesome", "idea", "ala", "eau", "alternative",]
        expect(actual).toStrictEqual(expected3);
    }) 

    test(`if no words sart & finish with a vowel`, function (){

        const input4 = ["cat", "dog", "lake", "hello"]
        const actual = sortList(input4);
        const expected4 = [];
        expect(actual).toStrictEqual(expected4);

    })
       

})



