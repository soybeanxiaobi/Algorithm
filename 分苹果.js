/**
 * 
    题目描述
        n 只奶牛坐在一排，每个奶牛拥有 ai 个苹果，现在你要在它们之间转移苹果，使得最后所有奶牛拥有的苹果数都相同，
        每一次，你只能从一只奶牛身上拿走恰好两个苹果到另一个奶牛上，问最少需要移动多少次可以平分苹果，如果方案不存在输出 -1。
    输入描述:
        每个输入包含一个测试用例。每个测试用例的第一行包含一个整数 n（1 <= n <= 100），接下来的一行包含 n 个整数 ai（1 <= ai <= 100）。
    输出描述:
        输出一行表示最少需要移动多少次可以平分苹果，如果方案不存在则输出 -1。
    示例1
        输入
            4
            7 15 9 5
        输出
            3
 */

var readline = require('readline');

var rd = readline.createInterface({
    input:process.stdin,
    output:process.stdout
})

let n = 0;
let numArr = [];
rd.on('line',function(input){
    if(n==0){
        n = input.trim();
    }
    else{
        numArr = input.trim().split(' ');
        let result = deal(n,numArr);
        console.log(result);
        return result;
    }
})

function deal(n,numArr){
    let numAll = 0;
    var minusCount = 0;
    var addCount = 0;
    numArr.map(item => numAll+=Number(item));
    // console.log(numAll);
    if(numAll % n == 0){    
        numArr.map( item => {
            // console.log(typeof(item))   //string
            item = Number(item);
            while(item > 9){
                item = item - 2;
                minusCount++;
                if(item < 9){
                    return -1;
                }
            }
            while(item < 9){
                
                item = item + 2;
                addCount++;
                if(item > 9){
                    return -1;
                }
            }
        })
        // console.log(minusCount)
        // console.log(addCount)
        if(minusCount == addCount){
            return minusCount
        }
        else{
            return -1;
        }
    }
    else{
        return -1;
    }
}