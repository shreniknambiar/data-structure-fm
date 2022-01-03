/*
  Write a function that performs mergesort
  Name the function mergeSort
  It will take in a array of numbers and return a sorted array numbers

  You'll need to write more than just one function
*/

const mergeSort = (nums) => {
    if (nums.length<2) {
        return nums
    }

    const middle = Math.floor(nums.length/2);
    const left = nums.slice(0,middle);
    const right = nums.slice(middle);

    const leftSorted = mergeSort(left);
    const rightSorted = mergeSort(right);

    return merge(leftSorted, rightSorted);
  };

const merge = (left, right) => {
    const results = [];
    
    while(left.length && right.length) {
        if(left[0]<=right[0]) {
            results.push(left.shift());
        }
        else {
            results.push(right.shift());
        }
    }

    return results.concat(left, right);
}
  
