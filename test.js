/*
 * @Author: your name
 * @Date: 2020-10-18 22:52:08
 * @LastEditTime: 2020-12-13 21:35:09
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /code/fe/leetcode-js/test.js
 */
function quickSort(list){
    const len = list.length
    for(let i = 0 ;i < len-1;i++){
        let val = list[i]
        for(let j = i+1; j < len-1-i;j++){
            if(val > list[j]){
                let tmp = val
                list[i] = list[j]
                list[j] = tmp
            }
        }
    }
    return list
}