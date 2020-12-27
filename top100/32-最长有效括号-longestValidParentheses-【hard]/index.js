/*
 * @Author: huangxingyuan
 * @Date: 2020-12-27 11:33:23
 * @LastEditors: huangxingyuan
 * @LastEditTime: 2020-12-27 11:38:47
 * @Description: 文件功能描述
 */
// 给定一个只包含 '(' 和 ')' 的字符串，找出最长的包含有效括号的子串的长度。
// 示例 1:
// 输入: "(()"
// 输出: 2
// 解释: 最长有效括号子串为 "()"
// 示例 2:
// 输入: ")()())"
// 输出: 4
// 解释: 最长有效括号子串为 "()()"

var longestValidParentheses = function(s) {

    function isValidParenthesis(str){
        let list = []
        for(let val of str){
            if(val === '('){
                list.push(val)
            }else{
                if(list.length === 0) return false
                list.pop()
                
            }
        }
    }
};
