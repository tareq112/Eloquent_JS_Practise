function sumAll(start,end,step){
    let sum = 0;
    for(let i=start; i<=end; i+=step){
        sum += i;
        console.log(i);
        
    }
    return sum;
}
console.log(sumAll(1,10,2));