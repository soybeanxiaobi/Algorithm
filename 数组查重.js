
function duplicates(arr) {
    var optArr = [];    //存储数组
    for(var i=0;i<arr.length;i++){
        //先赋值给判断数组
        var jugleArr = arr.slice(i+1,arr.length);
        //先判断jugleArr数组里的所有元素是否和arr[i]重复
        //如有，再判断当前元素是否加入了optArr,如没有，返回-1
        if(jugleArr.indexOf(arr[i])!= -1 && optArr.indexOf(arr[i])==-1){
            optArr.push(arr[i]);
        }
    }
    console.log(optArr);
    return optArr;
}
duplicates([1,2,4,4,3,3,1,5,3]);