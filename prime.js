function prime(n)
{
    for(var i=2;i<=Math.sqrt(n);i++){
        if(n%i==0)
        console.log('not a prime number');
        return true;
    }
    console.log('prime number')
}
prime(46)