//ALAB Part1 

for (let i=1; i>0 && i<=100; i++){
    if (i%3==0 && i%5==0){
        console.log("FizzBuzz")}
    
           else if (i%5==0){
            console.log("Buzz");}
        
                else if(i%3==0){
                    console.log("Fizz");}
                    
                 
    else {
        console.log(i);
    }
}


// ALAB Part2

function nextPrime(n){
    if (++n<2){
        return `${2} is the next Prime number`
    }
    for (let x=2; x<Math.sqrt(n); x++){
        if (n%x===0){
            return nextPrime(n)
        }
    }
    return n

}

console.log(nextPrime(100))
