/**
 * 请实现一个函数，将一个字符串中的每个空格替换成“%20”。
 * 例如，当字符串为We Are Happy.则经过替换之后的字符串为We%20Are%20Happy
 */

let readline = require('readline');

let rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
})

rl.on('line',function(input){
    // let result = deal(input);
    let result = input.trim().replace(/ /g,'%20');    
    console.log(result);
    
    return result;
})

// function deal(input){
//     let iptArr = input.trim().split(' ');
//     let result = iptArr[0];    
//     for(let i=1;i<iptArr.length;i++){
//         result = result + '%20' + iptArr[i]
//     }
//     return result;
// }