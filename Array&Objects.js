function sumAll(start,end){
    let sum = 0;
    for(let i=start; i<=end; i++){
        sum+= i;
        
    }
    return sum;
}
console.log(sumAll(1,10));