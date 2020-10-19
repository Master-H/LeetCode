
// 二维数组，从左到右递增，从上到下递增
// 1  2  3
// 4  5  6
// 7  8  9
function findNumInSortedArray(arr, num){
  if(!Array.isArray(arr)||typeof num !== 'number'|| isNaN(num)) return false
  let rows = arr.length; // 行
  let columns = arr[0].length // 列
  let row = 0;
  let column = columns - 1
  while(row < rows && column >= 0){
      const currentValue = arr[row][column]
     if(currentValue === num){
       return true
     }else if(currentValue < num){
       row ++
     }else{
       column--
     }
  }
  return false

}