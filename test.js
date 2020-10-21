/**
 * @param {number[]} numbers
 * @return {number}
 */
var minArray = function(numbers) {
  let len = numbers.length;
  let left = 0;
  let right = len - 1;
  let mid  = 0
  while(left < right){
       mid = left + Math.floor((right - left) / 2)
      if(numbers[left] < numbers[right]){// 完全有序
        right = mid
      }else if(numbers[left] > numbers[right]){
          left++
      }else{
          right--
      }
  }
  return numbers[left]
};