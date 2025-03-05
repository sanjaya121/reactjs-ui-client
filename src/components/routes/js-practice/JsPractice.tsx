// Only Javascript parctice code goes here

import { useEffect } from "react";

const JsPractice = () => {
  // const arr1 = [1, 3];
  // const arr2 = [3,4,5];
  // const result_arr = [1, 3, 7, 10, 14]

  const arr1 = [1,3, 3, 5, 7, 9, 10, 14, 15];
  const arr2 = [1, 2, 3, 7, 10, 11, 13, 14];
  const arrayDuplicates = [1,2,1,2,3,1,3,3,3,3,33,3,33];

  // const commonChar=["jelo","hello","fuel"];


  // Case 2:
  // const arrayInterSection = (arr1, arr2) => {
  //   return arr1.filter((el) => arr2.includes(el));
  // };

  // const findCommonChar=(array)=>{
  //   if(arr2.length ===0) return [];
  //   const charSet =array.map(str=>str.split(''));
  //   // console.log("char set",charSet)

  // }

  useEffect(() => {
    // console.log(arrayInterSection(arr1, arr2));
    console.log("Duplicates",arrayDuplicates.filter((item, index) => arrayDuplicates.indexOf(item) !== index).join())
    // console.log("Remove Duplicates",arrayDuplicates.filter((item,index)=>arrayDuplicates.indexOf(item)==index))
    // arrayInterSection(arr1, arr2);
      // console.log("common Char",findCommonChar(commonChar));

      // console.log(arrayDuplicates.filter((item,index)=>console.log("test test ",arrayDuplicates.indexOf((item))!==index)))
  });

  return (
    <>
      <h1>JS Practice</h1>
    </>
  );
};

export default JsPractice;
