/**
 * 题目描述
    牛牛想尝试一些新的料理，每个料理需要一些不同的材料，问完成所有的料理需要准备多少种不同的材料。

    输入描述:
        每个输入包含 1 个测试用例。每个测试用例的第 i 行，表示完成第 i 件料理需要哪些材料，各个材料用空格隔开，输入只包含大写英文字母和空格，输入文件不超过 50 行，每一行不超过 50 个字符。
    
    输出描述:
        输出一行一个数字表示完成所有料理需要多少种不同的材料。

    示例1
        输入
            BUTTER FLOUR
            HONEY FLOUR EGG
        输出
            4
 */

/**
 * 题坑:
 *    1.因为题目没有要求输入多少组数据,所以不能擅自要求用户输入多少组数据
 *      正确做法是:要求用户在结束数据的时候输入end,当rl收到end时候,关闭输入流,触发'close'事件,这时候再来处理数据,输出即可
 * 
 *    2.去掉数组重复方法:
 *          通过indexOf(数组内容) == -1即可,如果新数组没有这个内容,则返回-1
 */


let readline = require('readline');

let rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
})
let iArr = [];

rl.on('line',function(input){
    if(input === 'end'){
        rl.close();
    }
    iArr.push(input.trim());
})

rl.on('close',function(){
    let result = 0;
    result = deal(iArr);
    console.log(result);
    return result;
})

function deal(iArr){
    let allArr = [];
    for(let i=0;i<iArr.length;i++){
       iArr[i].split(' ').map(item => {     
           if(allArr.indexOf(item) == -1){  //检查是否已经添加过
               allArr.push(item)
           }
       }); 
    }
    // console.log(allArr);

    return allArr.length;
}