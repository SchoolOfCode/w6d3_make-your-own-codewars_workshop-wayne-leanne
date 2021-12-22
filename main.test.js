//👉 Write your tests below here:

import sortList from "./main.js";

test(`Should return an array where all words start & finish with a vowel`, function(){
    
    //arrange
    const input = ["Australia", "Thailand", "Africa", "Bali", "India", "England", "America", "Asia",]
    // act
    const actual = sortList(input);
    //assert
    const expected = ["Australia", "Africa", "India", "America", "Asia",]

    expect(actual).toStrictEqual(expected);
  
})






