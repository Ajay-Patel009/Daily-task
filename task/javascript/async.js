function fun1()
{
    
    setTimeout(()=>{
        console.log("calling fun1");
        console.log("this is printing after5 sec");
    },5000);
}
function fun2()
{
    
    setTimeout(()=>{
        console.log("calling fun2");
        console.log("this is printing after 2 sec");
    },2000);
}
function fun3()
{
   
    setTimeout(()=>{
        console.log("calling fun3");
        console.log("this is printing after 4 sec");
    },4000);
}
function fun4()
{
    
    setTimeout(()=>{
        console.log("calling fun4");
        console.log("this is printing after 3 sec");
    },3000);
}

async function caller()
{

await fun1();

await fun2();

await fun3();

await fun4();
}
caller();
 