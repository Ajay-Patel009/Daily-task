const express=require('express');
const multer=require('multer');
const fs=require('fs');
const fse=require('fs-extra');
const bodyParser=require('body-parser');
// const upload = multer({ dest: 'upload' }).single("file1");
const app=express();
app.use(bodyParser.json());
const port=3000;


app.get('/', function (req, res) {
    res.send('Hello World! this is File system');
  })
  
const upload=multer({
    storage : multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null,"upload");
    },
    filename: (req, file, cb) => {
      console.log(file.originalname);
      cb(null, file.originalname,'.txt');
    },
  })
});
  

  app.post('/upload', upload.single("file"), function (req, res) {
    // req.file is the `avatar` file
    // req.body will hold the text fields, if there were any
    console.log("file uploaded");
    res.send("file uploaded succesfully")

    
  });


  app.get('/read/:filename',function(req,res){
    let file_name=req.params.filename;
    let n=file_name+".txt";
    let file=fs.readFile(`./backup/${n}`, 'utf-8',(err,data)=>{
        if(err) throw err;
        res.send(data);
    console.log(data)  
        })
  });


  // app.get('/merge',function(req,res){
  //   var data = (fs.readFileSync('./upload/file1.txt')).toString();  

  //    fs.appendFile("./upload/file2.txt",data,(err)=>
  //    {
  //       if(err)
  //       {
  //           console.log("err");
  //       }
  //       else{
  //         console.log(data.toString());
  //       }
  //    });
  //    fs.copyFile('./uploads/file2.txt', './uploads/destination.txt', (err) => {
  //     if (err) throw err;
  //     console.log('source.txt was copied to destination.txt');
  //   });
  //    res.send(data);

  //    console.log("Synchronous read: " + data.toString());  
  //    console.log("Program Ended");
  //    res.send("done")
  // })

  app.post('/merge',(req,res)=>{
    const file_1=req.body.file01;
    const file_2=req.body.file02;
    // console.log(file_1);

    const f1=fs.readFileSync(`./upload/${file_1}`,'utf-8');
    const f2=fs.readFileSync(`./upload/${file_2}`,'utf-8');

    const MergedFile= `${f1}`+`${f2}`;
    fs.writeFile("./upload/MergedFile.txt",MergedFile,(err)=>{
      if(err)
      {
        console.log("error");
      }
      else{
        res.send("succesfully merged");
      }
    })

    fs.mkdirSync('backup',(err)=>{
      if(err) console.log("err");
      console.log('directory made');
    })

    fs.rename('./upload/MergedFile.txt', './backup/RenamedMergedFile', function (err) {
      if (err){
        console.log("err");
      };
      console.log('File Renamed.');
    });
    
  })


  app.get('/delete',(req,res)=>{
    fse.emptyDir('./upload', err => {
      if (err) return console.error(err)
      console.log('File Deleted Successfully!')
      
    })
    res.send("files deleted successfully");
  })


  



  


 















  app.listen(port, (error) => {
    console.log(`Example app listening on port ${port}`);
  });
  