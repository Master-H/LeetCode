
// 默认第一个最小放在首位，不是找出最小的与之交换
function select(arrayList) {
  for(let i = 0 ;i < arrayList.length - 1; i++){
    let min  = i;
    let minValue =arrayList[min]
    for(j = i + 1; j< arrayList.length ; j++){
     if(arrayList[j] < minValue) min = j 
    }
    let tmp = arrayList[i]
    arrayList [i]= arrayList[min]
    arrayList[min] =  tmp
  }
  return arrayList
}

 const arr = [3, 77, 66, 55];
 const res = select(arr);
 console.log(res);
 

