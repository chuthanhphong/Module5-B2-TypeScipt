function Main(number :  number) :number{
    if(number<=2){
        return 1;
    }
    return Main(number - 1) + Main(number - 2)
    }
function getFibonacciList(number : number) :number[]{
    let fibonacciList: number[] = [1]
    if(number!=1){
        for(let i=2;fibonacciList.length;i++){
            fibonacciList.push(Main(i))
        }
    }
    return fibonacciList;
}
function Sum(number:number[]):number{
    let sum =0;
    for(let i =0;i<number.length;i++){
        sum+=number[i]
    }
    return sum
}
console.log(getFibonacciList(5))
console.log(`Số fibonacci ở vị trí thứ 5 : ${Main(5)}`);
console.log(`tổng 5 số fibonacci đầu tiên là : ${Sum(getFibonacciList(5))}`);