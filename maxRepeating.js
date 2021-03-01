// 找出字符串最大重复

var maxRepeating = function(sequence, word) {
    let shortString = sequence.length > word.length ? word : sequence
    let longString = sequence.length > word.length ? sequence : word
    let shortLength = shortString.length
    let res = ''
    // 遍历取最大重复长度为i
    for(let i = shortLength; i>0; i--){
        // 最大重复长度为i,存在shortLength -i种可能
        for(let j =i; j <=shortLength -i;j++){
            let repeatPart =  shortString.substr(j,i)
            if(longString.includes(repeatPart)) return repeatPart.length
            
        }
        
    }
    return 0
};

let sequence = 'abab'
let word = 'ab'
console.log(maxRepeating(sequence,word));