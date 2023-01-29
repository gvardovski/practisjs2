try{
    console.log(a);
    let a = 3;
}
catch (e)
{
    console.log("let must be declared’ before use");
}

try{
    let a=1,b=0;
    if ((a / b) === Infinity ){
        throw new Error("cannot be divided by zero");
    } else {let x = a / b;}
}
catch (err)
{
    console.log(err.message);
}