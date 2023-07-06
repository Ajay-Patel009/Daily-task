function fun1()
{
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            console.log("calling fun1");
            console.log("this is printing after5 sec");
            resolve();
        },5000);
    })
    
}
function fun2()
{
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            console.log("calling fun2");
            console.log("this is printing after 2 sec");
            resolve();
        },2000);
    })
  
}
function fun3()
{
   return new Promise((resolve, reject) => {
    setTimeout(()=>{
        console.log("calling fun3");
        console.log("this is printing after 4 sec");
        resolve();
    },4000);
   })
    
}
function fun4()
{
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            console.log("calling fun4");
            console.log("this is printing after 3 sec");
            resolve();
        },3000);
    }
)}

    

// fun1()
//   .then(fun2)
//   .then(fun3)
//   .then(fun4);

async function caller()
{

await fun1();

await fun2();

await fun3();

await fun4();
}
caller();
 