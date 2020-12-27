/*
 * @Author: huangxingyuan
 * @Date: 2020-12-21 23:51:44
 * @LastEditors: huangxingyuan
 * @LastEditTime: 2020-12-27 11:38:28
 * @Description: 文件功能描述
 */
// 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。

// 有效字符串需满足：

// 左括号必须用相同类型的右括号闭合。
// 左括号必须以正确的顺序闭合。
// 注意空字符串可被认为是有效字符串。
// 示例 1:

// 输入: "()"
// 输出: true
// 示例 2:

// 输入: "()[]{}"
// 输出: true
// 示例 3:= {}

// 输入: "(]"
// 输出: false
// 示例 4:

// 输入: "([)]"
// 输出: false
// 示例 5:

// 输入: "{[]}"
// 输出: true

var isValid = function (s) {
    const cache = []
    const map = new Map()
    map.set("(", ")")
    map.set("[", "]")
    map.set("{", "}")
    for (let i = 0; i < s.length; i++) {
        if (map.has(s[i])){
             cache.push(s[i])
        }else {
            if (cache.length === 0) return false
            if (map.get(cache[cache.length - 1]) === s[i]) cache.pop()
            else return false
        }
    }
    return cache.length ? false : true 
    
};