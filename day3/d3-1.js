// function fun(a,b=7,c=42){
//     console.log(a,b,c);
//     return a+b+c;
// }


// console.log(fun(1,undefined));

// function fun1(x,y,...z){
//     console.log({x,y,z});
// }
// fun1(10,20,'hello',40,50,60)

function myfun(a,b,...manyMoreArgs){
    console.log('a',a);
    console.log("b",b);
    console.log("manyMoreArgs".manyMoreArgs);
}

myfun("one","two","three","four","five","six");