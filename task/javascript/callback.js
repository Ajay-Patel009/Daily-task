// function fun1()
// {
    
//     setTimeout(()=>{
//         console.log("calling fun1");
//         console.log("this is printing after 2 sec");
        
//     },5000);

// }
// function fun2()
// {
    
//     setTimeout(()=>{
//         console.log("calling fun2");
//         console.log("this is printing after 5 sec");
//     },4000);
// }
// function fun3()
// {
   
//     setTimeout(()=>{
//         console.log("calling fun3");
//         console.log("this is printing after 4 sec");
//     },3000);
// }
// function fun4()
// {
    
//     setTimeout(()=>{
//         console.log("calling fun4");
//         console.log("this is printing after 3 sec");
//     },2000);
// }


// console.log("BEFORE CALL BACK");
// fun1();

// fun2();

// fun3();

// fun4();


//  CALL BACK////////////




function fun1(callback)
{
    
    setTimeout(()=>{
        console.log("calling fun1");
        console.log("this is printing after 5 sec");
        callback();
    },5000);
}
function fun2(callback)
{
    
    setTimeout(()=>{
        console.log("calling fun2");
        console.log("this is printing after 3 sec");
        callback();
    
    },3000)
}
function fun3(callback)
{
   
    setTimeout(()=>{
        console.log("calling fun3");
        console.log("this is printing after 4 sec");

     callback();
        
        
    },4000);
}
function fun4()
{
    
    setTimeout(()=>{
        console.log("calling fun4");
        console.log("this is printing after 2 sec");
        
    },2000);
}
console.log("AFTER CALLBACK FUNCTION");

fun1(function(){
    
    fun2(function(){
        fun3(function(){
            fun4();
        })
    })
        
});
        

    




 

 