/***
 * 输入N个（N<=10000）数字，求出这N个数字中的最大值和最小值。每个数字的绝对值不大于1000000。
 * 
 */

let readline = require('readline');
let rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout,
})
let num = 0;
rl.on('line',function(input){
    if(num == 0){
        num = input.trim();//去除前后的空格
    }
    else{
        let iptArr = input.split(' ')
        if(iptArr.length == num){
            let maxNum = Math.max.apply(null,iptArr)//Math.min(),Math.max(),其参数不能是数组，而是单个元素值
            let minNum = Math.min.apply(null,iptArr)//apply可以将一个数组默认的转换为一个参数列表([param1,param2,param3] 转换为 param1,param2,param3)
            let result = maxNum + ' ' + minNum;
            console.log(result);
            return result
        }
   }
})