/*
 * @Author: huangxingyuan
 * @Date: 2021-01-31 15:45:38
 * @LastEditors: huangxingyuan
 * @LastEditTime: 2021-01-31 15:52:08
 * @Description: 文件功能描述
 */
function twoSum(array,target){
    let obj = {}
    for(let [index,value] of array.entries()){
        let remain = target - value
        if(obj[remain] === undefined){ 
             obj[value] = index
        }else{
            return [obj[remain],index]
        } 
       
    }
}