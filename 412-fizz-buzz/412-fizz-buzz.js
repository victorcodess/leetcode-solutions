var fizzBuzz = function(n) {
   let ans = new Array(n).fill(0);
   for(let i=1; i<=n; i++){
       if(i%3===0 && i%5===0){
           ans[i-1]="FizzBuzz";
       }
       else if(i%3===0 && i%5!==0){
           ans[i-1]="Fizz";
       }
       else if(i%3!==0 && i%5===0){
           ans[i-1]="Buzz";
       }
       else{
           ans[i-1]=String(i);
       }
   }
    return ans;
};