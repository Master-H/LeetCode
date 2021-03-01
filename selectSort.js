/*
 * @Author: huangxingyuan
 * @Date: 2020-10-13 21:08:19
 * @LastEditors: huangxingyuan
 * @LastEditTime: 2021-01-26 23:54:32
 * @Description: 文件功能描述
 */

// 默认第一个最小放在首位，不是找出最小的与之交换
function selectSort(arr){
  var len=arr.length;
  var minIndex,temp;
  for(i=0;i<len-1;i++){
      minIndex=i;
      for(j=i+1;j<len;j++){
          if(arr[j]<arr[minIndex]){
              minIndex=j;
          }
      }
    temp=arr[i];
    arr[i]=arr[minIndex];
    arr[minIndex]=temp;
  }
  console.timeEnd('选择排序耗时');
  return arr;
}

 const arr = [3, 77, 66, 55];
 const res = select(arr);
 console.log(res);
 

