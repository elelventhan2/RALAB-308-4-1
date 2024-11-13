// for (let i=1; i>0 && i<=100; i++){
//     if (i%3==0 && i%5==0){
//         console.log("FizzBuzz")}
    
//            else if (i%5==0){
//             console.log("Buzz");}
        
//                 else if(i%3==0){
//                     console.log("Fizz");}
                    
                 
//     else {
//         console.log(i);
//     }
// }

// testing
// while (let n=x+1,x>=1 && x<n;x++){
//     while ((y=n+1)%x==0)
//         console.log(n,"is next prime number");
//         break if y=0
// }



function Sieveoferatosthenes(n,given){
    var integers = [];
    for (var i=2; i< n+1; i++) {
        integers[i] =true;
    }
    for (var p=2; p+p <=n; p++) {
        if(integers[p] == true) {
            for (var i=p*2; i<=n; i+=p) {
                integers[i] = false
            }
        }
    }
    return Sieveoferatosthenes(n,given)
}

function Search(arr, numberToFind) {
    let start=0;
    let end=arr.length-1;
    var answer=0;
    const EXTRA_MILE=70
    let middle= Math.floor((start+end)/2);
    if (numberToFind< middle) {
        for (var p=2; p<=middle; p++) {
        // console.log(`p=${p}`)
        if (arr[p]==true){
            if (p>numberToFind){
                return p
            }
        }
        }
    }else {
        for (var p= middle; p<=end; p++){
                // console.log(`p=${p}`)
                if (arr[p]==true){
                    if(p>numberToFind){
                        return p
                    }
                }
        }
    }
}

function nextPrime(n){
    //console.log(`n=` +n)
    const EXTRA_MILE = 70
    let answer = Sieveoferatosthenes(n+EXTRA_MILE, n)
    // console.log(`answer= ${answer}`)
    return answer
}

nextPrime(75)



