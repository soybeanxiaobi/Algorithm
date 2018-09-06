/***
 * 链接：https://www.nowcoder.com/questionTerminal/40d83e5509b04d20825ae68fe35e9ca8

    不借用任何字符串库函数实现无冗余地接受两个字符串，然后把它们无冗余的连接起来。 
    
    输入描述:
        每一行包括两个字符串，长度不超过100。

    输出描述:
        可能有多组测试数据，对于每组数据，

    示例1
        输入
            abc def
        输出
            abcdef
 */

let readline = require('readline');
let rl =  readline.createInterface({
    input:process.stdin,
    output:process.stdout
})
let str = '';
rl.on('line',function(input){
    let strArr = input.trim().split(' ');
    if(strArr.length == 2){
        str = strArr[0] + strArr[1];
        console.log(str);
        return str;
    }
    
})