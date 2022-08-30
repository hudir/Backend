var express = require('express');
var router = express.Router();
const path = require('path')
const fixPath = require('../modules/fixPaht')
const fs = require('fs')

/* GET home page. */
router.get('/', function(req, res, next) {
  // console.log(req.query)
  console.log(path.join(__dirname+'../uploads'))
  res.render('index', { title: 'Express' });
});

// with .mv method
router.post('/', (req, res)=>{
   // upload multi files
  if (req.files && Array.isArray(req.files.myFile)){
    let errorMsg = ''
    req.files.myFile.forEach(file=>file.mv(fixPath(__dirname + '../uploads/' + file.name), err=>err ? errorMsg += err+ '\b' : null ))
    errorMsg ? res.json(errorMsg) : res.json({success: true, error: null, multi: true})
    }
   // upload single file
   else if(req.files) req.files.myFile.mv(fixPath(__dirname + '../uploads/' + req.files.myFile.name), err=>err ? res.json(err) : res.json({success: true, error: null, single: true}))
   // without file
   else res.json(req.body)
})

router.post('/imgupload', (req, res)=>{
  if(req.files && req.files.img.mimetype.split('/')[0]=='image') req.files.img.mv(fixPath(__dirname+'../uploads/'+req.files.img.name), err=>err?res.json(err):res.json("nice") )
  else res.json({error: "only for images"})
})

// with fs
router.post('/fs', (req, res)=>{
  // upload multi files
 if (req.files && Array.isArray(req.files.myFile)){
   let errorMsg = ''
   req.files.myFile.forEach(file=>fs.writeFile(fixPath(__dirname + '../uploads/' + file.name), file.data, err=>err ? errorMsg += err+ '\b' : null ))
   errorMsg ? res.json(errorMsg) : res.json({success: true, error: null, multi: true})
   }
  // upload single file
  else if(req.files) fs.writeFile(fixPath(__dirname + '../uploads/' + req.files.myFile.name), req.files.myFile.data, err=>err ? res.json(err) : res.json({success: true, error: null, single: true}))
  // without file
  else res.json(req.body)
})



router.get('/download', (req, res)=>{
  res.download(fixPath(__dirname + '../uploads/DSCF4612.JPG'))
})


module.exports = router;
