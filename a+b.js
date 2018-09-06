/**
 * 实现一个加法器，使其能够输出a+b的值。 
 * 输入
    2 6
    10000000000000000000 10000000000000000000000000000000

    输出
    8
    10000000000010000000000000000000
 */

let readline = require('readline');
let rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
})

rl.on('line',function(input){
    let arr = input.trim().split(' ');
    let result = deal(arr);
    console.log(result);
    return result;
})

function deal(arr){
    let result = 0;
    for(let i=0;i<arr.length;i++){
        result += Number(arr[i])        
    }
    return result; //数值过大超出范围,显示Infinty 
}