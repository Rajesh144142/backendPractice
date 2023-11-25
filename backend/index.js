import express from 'express';
import dotenv from 'dotenv'
import cors from 'cors'
import { upload } from './middlewares/multer.middleware.js'
import uploadOnCloudinary from './utils/cloudinary/cloudinary.js'
import Db from './DataBaseConnection/db.js'
const app = express();

app.use(cors());
app.use(express.json({ limit: "16kb" }))
app.use(express.urlencoded({ extended: true, limit: "16kb" }))
app.use(express.static("public"))
dotenv.config();
app.use(express.static('dist'));






app.post('/api/upload', upload.single('myfile'), async (req, res) => {

    try {
        if (!req.file) {
            return res.status(400).json({ error: "No file uploaded" });
        }
        const response = await uploadOnCloudinary(req.file.path);
        return res.status(200).json({ message: "File uploaded successfully", data: response});
    } catch (error) {
        console.error("Error uploading file:", error);
        return res.status(500).json({ error: "Internal Server Error" });
    }
});

app.post('/api/get', (req, res) => {
    console.log(req.body.num)
    return res.status(200).json({msg:'Massege is ok'});
})







Db().then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`App is running at http://localhost:${process.env.PORT}`);
    });
  }).catch((error) => {
    console.error(error);
  });
  
