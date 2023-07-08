// const express=require('express');
// const multer=require('multer');
const fs=require('fs-extra');

// const bodyParser=require('body-parser');
// // const upload = multer({ dest: 'upload' }).single("file1");
// const app=express();
// app.use(bodyParser.json());
// const port=3000;


// app.get('/', function (req, res) {
//     res.send('Hello World! this is File system');
//   })



fs.emptyDir('./upload', err => {
  if (err) return console.error(err)
  console.log('success!')
})


























// app.listen(port, (error) => {
//     console.log(`Example app listening on port ${port}`);
//   });
  