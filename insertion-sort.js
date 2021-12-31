/*
  Insertion sort!
  
  The idea here is that the beginning of your list is sorted and the everything else is assumed to be an unsorted mess.
  The outer loop goes over the whole list, the index of which signifies where the "sorted" part of the list is. The inner
  loop goes over the sorted part of the list and inserts it into the correct position in the array.
  
  Like bubble sort, there's a visualization mechanism available to you. Just call snapshot(myArray) at the beginning of
  your inner loop and it should handle the rest for you!
*/

function insertionSort(nums) {
    for(let i=1;i< nums.length;i++) {
        let numberToInsert = nums[i];
        for(let j=i-1;j>=0 && numberToInsert < nums[j]; j--) {
            nums[j+1] = nums[j];
        }
        nums[j+1] = numberToInsert;
    }
    return nums;
  }
