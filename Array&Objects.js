function sumAll(start,end,step){
    console.log(step);
    let sum = 0;
    for(let i=start; i<=end; i = i`{step}`){
        sum += i;
        console.log(i);
        
    }
    return sum;
}
console.log(sumAll(5,2,-1));