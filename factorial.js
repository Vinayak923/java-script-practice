function factorial(n) {
    var fact = 1;
    for(var index =1; index<=n; index++){
        fact*= index;
    }
    console.log('factorial of number is:', fact);
};

factorial(4);