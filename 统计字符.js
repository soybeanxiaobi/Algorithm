/**
 * 题目描述
    给定一个英文字符串,请写一段代码找出这个字符串中首先出现三次的那个英文字符(需要区分大小写)。
   输入描述:
    输入数据一个字符串，包括字母,数字等。
   输出描述:
    输出首先出现三次的那个英文字符
   示例1
    输入
        Have you ever gone shopping and
    输出
        e
 * 
 */

let readline = require('readline');
let rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
})

rl.on('line',function(input){
    let result = deal(input.trim());
    // console.log(result);
    return result;
})

function deal(input){
    let object = {};
    let reg =  /[a-zA-z]+/;
    for(let i=0;i<input.length;i++){
        //如果是英文字母,则进行下一步
        if(reg.test(input[i])){
            if(!object[input[i]]){
            //如果不存在字符
            object[input[i]] = 1;
            }
            else{
                object[input[i]]++;
            }
            //如果字符数量超过三个
            if(object[input[i]] == 3){
                console.log(input[i])//输出这个字符
                return input[i]
            }
        }
        
    }
}