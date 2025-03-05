// Only Javascript parctice code goes here

import { useEffect } from "react";

const JsPractice = () => {
  // const arr1 = [1, 3];
  // const arr2 = [3,4,5];
  // const result_arr = [1, 3, 7, 10, 14]

  const arr1 = [1, 3, 5, 7, 9, 10, 14, 15];
  const arr2 = [1, 2, 3, 7, 10, 11, 13, 14];
  const arrayDuplicates = [1, 2, 3, 4, 2, 5, 6, 3, 7, 8, 1];

  const commonChar=["jelo","hello","fuel"];


  // Case 2:
  const arrayInterSection = (arr1, arr2) => {
    return arr1.filter((el) => arr2.includes(el));
  };

  const findCommonChar=(array)=>{
    if(arr2.length ===0) return [];
    const charSet =array.map(str=>str.split(''));
    console.log("char set",charSet)
    // const common=[...charSet[0]].filter(char=>charSet.every(set=>set.has(char)));
    // return common;
  }

  useEffect(() => {
    // console.log(arrayInterSection(arr1, arr2));
    // console.log("Duplicates",arrayDuplicates.filter((item,index)=>arrayDuplicates.indexOf(item)!==index));
    // console.log("Remove Duplicates",arrayDuplicates.filter((item,index)=>arrayDuplicates.indexOf(item)==index))
    // arrayInterSection(arr1, arr2);
      console.log("common Char",findCommonChar(commonChar));
  });

  return (
    <>
      <h1>JS Practice</h1>
    </>
  );
};

export default JsPractice;
