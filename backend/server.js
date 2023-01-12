require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const categoryRoutes = require("./routes/categories");
const multer  = require('multer')

//express app
const app = express();

//image uploading
const ImageModel = require ('../frontend/src/components/image.model')

//Storege 
const Storege = multer.diskStorage({
  destination:'uploads',
  filename:(req,file,cb) =>{
    cb(null, file.originalname)
  }
})
const upload = multer({
  storage:Storege
}).single('testImage')
app.get("/", (req,res)=>{
  res.send("upload file")
})
app.post('/upload', (req, res)=>{
  upload(req,res,(err)=>{
    if(err){
      console.log(err)
    }else{
      const newImage = new ImageModel({
        image:{
          data:req.file.filename,
          contentType:'image/png'
        }
      })
      newImage.save()
      .then(()=>res.send('successfully uploaded'))
      .catch((err)=>console.log(err))
    }
  })
})

//connect to DB
mongoose.set("strictQuery", false);
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    //listen for request
    app.listen(process.env.PORT, () => {
      console.log("connected on port",process.env.PORT,'!!!');
      console.log('connected to DB')
    });
  })
  .catch((error) => {
    console.log(error);
  });

//middleware
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

//routes
app.use("/api/categories", categoryRoutes);
