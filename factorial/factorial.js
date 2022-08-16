// factorial number

let n=prompt('enter the value');
console.log('value:',n);
ans= factorial(n);
console.log('the factorial value of:',ans);

function factorial(n){
    if(n==0|| n==1){
        return 1;
    }
    else{
        return n*factorial(n-1);
    }
}
