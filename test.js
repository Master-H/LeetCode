var maxRepeating = function(str1, str2) {
    let shortString = str1.length > str2.length ? str2 : str1
    let longString = str1.length > str2.length ? str1 : str2
    let shortLength = shortString.length
    let res = ''
    // 遍历取最大重复长度为i
    for(let i = shortLength; i>0; i--){
        // 最大重复长度为i,存在shortLength -i种可能
        for(let j =0; j <=shortLength -i;j++){
            let res =  shortString.substr(j,i)
            if(longString.includes(repeatPart)) return res 
            
        }
        
    }
    return res
};


let str1 = "ababc"
let str2 = 'ab'
console.log(maxRepeating(str1,str2));