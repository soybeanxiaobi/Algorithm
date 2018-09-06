/**
 * 
 * 给定一个十进制的正整数number，选择从里面去掉一部分数字，希望保留下来的数字组成的正整数最大。
    输入描述:
        输入为两行内容，第一行是正整数number，1 ≤ length(number) ≤ 50000。第二行是希望去掉的数字数量cnt 1 ≤ cnt < length(number)。
    输出描述:
        输出保留下来的结果。
    示例1
        输入
            325 
            1
        输出
            35
 */

let readline = require('readline');
let rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
})
let num = 0;
let delNumCount = 0;
rl.on('line',function(input){
    if(num == 0){
        num = input.trim();
    }
    else{
        delNumCount = input.trim();
        let result = deal(num,delNumCount);
        console.log(result);
        return result;
    }
    
})

function deal(num,delNumCount){
    // let num = input.split(' ')[0];
    // let delNumCount = input.split(' ')[1];
    let numArr = num.split('');
    let delNum = numArr[0];
    for(let i=0;i<delNumCount;i++){
        for(let j=1;j<numArr.length;j++){
            if(numArr[j]<delNum){
                delNum = numArr.indexOf(numArr[j]);
            }
        }
        numArr.splice(delNum,1);    //改变原数组,删除最小值
        console.log(numArr);
    }
    // console.log(numArr.join(''));
    let numStr = numArr.join('');
    return numStr;
}