const express = require('express');
const app = express();

app.use(express.json());

app.post('/', (req, res) => {
  res.send('Hello World!')
  
});
app.post("/validation",(req,res)=>{
    try{
    var name=req.body.name1;
    var passwrd=req.body.name2;
    if(passwrd=="12345")
    {
        
            // res.send("valid user");
            res.send(`welcome ${name} to our website`);
        

    }
    else
    {
        res.send("not valid");
    }}
    catch{
        console.log("error");
    }
})
app.listen(4000,()=>{
    console.log("liseing");
});