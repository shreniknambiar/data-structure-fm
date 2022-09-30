/*

  Implement a radix sort in a function called radixSort.

  You'll probably need several functions
  
  You can implement it using a binary or decimal based bucketing but I'd recommend the decimal based buckets because
  it ends up being a lot more simple to implement.

*/

function getDigit(number, place, longestNumber) {
    const string = number.toString();
    const size = string.length;
  
    const mod = longestNumber - size;
    return string[place - mod] || 0;
  }
  
  function findLongestNumber(array) {
    let longest = 0;
    for (let i = 0; i < array.length; i++) {
      const currentLength = array[i].toString().length;
      longest = currentLength > longest ? currentLength : longest;
    }
    return longest;
  }
  
  function radixSort(array) {
    const longestNumber = findLongestNumber(array);
  
    const buckets = new Array(10).fill().map(() => []); // make an array of 10 arrays
  
    for (let i = longestNumber - 1; i >= 0; i--) {
      while (array.length) {
        const current = array.shift();
        buckets[getDigit(current, i, longestNumber)].push(current);
      }
  
      for (let j = 0; j < 10; j++) {
        while (buckets[j].length) {
          array.push(buckets[j].shift());
        }
      }
    }
  
    return array;
  }
  
