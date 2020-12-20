/*
 * @Author: huangxingyuan
 * @Date: 2020-12-20 12:36:34
 * @LastEditors: huangxingyuan
 * @LastEditTime: 2020-12-20 18:44:59
 * @Description: 文件功能描述
 */
// 给定一个字符串 s，找到 s 中最长的 子串。你可以假设 s 的最大长度为 1000。

// 示例 1：
// 输入: "babad"
// 输出: "bab"
// 注意: "aba" 也是一个有效答案。
// 示例 2：
// 输入: "cbbd"
// 输出: "bb"
var longestPalindrome = function(s) {
    function isPalindrome(str){
        return res.join('') === res.reverse().join('')
    }
    let tempStr = ''
    let maxStr = ''
    for(let i = 0; i < s.length; i++){
        tempStr =  tempStr+String[s[i]]
        if(isPalindrome(tempStr)){
            maxStr = tempStr.length > tempStr.length ?  tempStr : maxStr
        }
        if(maxStr && !isPalindrome(tempStr)){
            tempStr = s[i]
        }
    }
    return maxStr
};
