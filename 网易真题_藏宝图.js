/**
 * 题目描述
    牛牛拿到了一个藏宝图，顺着藏宝图的指示，牛牛发现了一个藏宝盒，藏宝盒上有一个机关，机关每次会显示两个字符串 s 和 t，
    根据古老的传说，牛牛需要每次都回答 t 是否是 s 的子序列。注意，子序列不要求在原字符串中是连续的，
    例如串 abc，它的子序列就有 {空串, a, b, c, ab, ac, bc, abc} 8 种。
    
    输入描述:
        每个输入包含一个测试用例。每个测试用例包含两行长度不超过 10 的不包含空格的可见 ASCII 字符串。
    
    输出描述:
        输出一行 “Yes” 或者 “No” 表示结果。
    
    示例1
        输入
            x.nowcoder.com
            ooo
        输出
            Yes
 */

let readline = require('readline');
let rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
})
let code = 0;
let testCode = '';
rl.on('line',function(input){
    if(code == 0){
        code = input.trim();
    }
    else{
        testCode = input.trim();
        let result = deal(code,testCode);
        console.log(result);
    }
})

function deal(code,testCode){
    let codeArr = code.split('');
    let testCodeArr = testCode.split(''); //把字符串每一个字符都转换成数组
    for(let i=0,j=0;i<codeArr.length;i++){
        //不断增加,之前判断的值都不再判断
        if(testCodeArr[j] == codeArr[i]){
            j++;    //当前值符合的话 就继续判断下一个,直到最后一个也符合 输出Yes
            if(j == testCodeArr.length){
                return 'Yes'
            }
        }

    }
    return 'No'
}