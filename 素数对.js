/**
 * 题目描述
        给定一个正整数，编写程序计算有多少对质数的和等于输入的这个正整数，并输出结果。输入值小于1000。
    如，输入为10, 程序应该输出结果为2。（共有两对质数的和为10,分别为(5,5),(3,7)）

    输入描述:
        输入包括一个整数n,(3 ≤ n < 1000)

    输出描述:
        输出对数

    示例1
        输入
            10
        输出
            2
 */


let readline = require('readline');
let rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
})

rl.on('line',function(input){
    let result = deal(input.trim());
    console.log(result);
    return result;
})

function deal(input){
    let primeNumberArr = [];
    for(let i=3;i<input;i++){
        if(jugPrimeNum(i)){
            primeNumberArr.push(i)
        }
        else{
            continue;
        }
    }
    console.log(primeNumberArr);
}

function jugPrimeNum(number){
    console.log(number);
    for(let j=2;j<number;j++){
        if(j==number){
            return true;    
        }
        if(number%j == 0){
            //存在非自身和1的公约数
            return false;
        }
    }
}