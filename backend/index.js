const express = require('express')
const connectToMongo = require('./db.js')
const cors = require('cors');
const multer =require('multer')
const path = require('path')
const bookModel = require('./model.js');
const app =express()
app.use(cors());
app.use(express.json())

connectToMongo()
//MIDDLEWARE
app.use(express.static(path.join(__dirname,'public')))


// Configure Multer for handling file Uploads...
const storage = multer.diskStorage({
    destination: function (req,file,cb){
      cb(null,'uploads/');// create the uploads folder...
    },
    filename:function(req,file,cb){
      const ext = path.extname(file.originalname)
      cb(null,Date.now() +ext)
    }
  })
  const upload = multer({storage:storage});



// ENDPOINTS
app.get('/hello',(req,res)=>{
    res.send('Hello World!')
})
// POST request to handle image uploads...
app.post('/uploads',upload.single('image'),(req,res)=>{
    if(req.file){
      res.json({message:'Image Uploaded Successfully'})
    }
    else{
      res.status(400).json({error:'No file Uploaded'})
    }
  })
// book CRUD Endpoints.
app.post('/createbook', upload.single('image'), async (req, res) => {
    try {
        const { title, writer, description, price, available } = req.body;

        // Validation.
        if (!title || !writer || !description || !price || !available) {
            return res.status(400).json({ error: 'All fields are required!' });
        }

        // Get the filename of the uploaded image.
        const imageFileName = req.file.filename;

        // Create a new book instance with all fields.
        const book = new bookModel({
            title,
            writer,
            description,
            price,
            available,
            image: imageFileName, // Save the image filename
        });

        // Save the book to the database.
        await book.save();

        res.status(201).json({ book });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});


app.listen(8000,()=>{
    console.log('server is running at 8000')
})