/**
 * 输入一个链表，按链表值从尾到头的顺序返回一个ArrayList。
 */


let readline = require('readline');

let rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
})

rl.on('line',function(input){
    let result = deal(input.trim())
    console.log(result);
    return result
})

function deal(input){
    let iptArr = input.split(' ');
    return iptArr.reverse();
}