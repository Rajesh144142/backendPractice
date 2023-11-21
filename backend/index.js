import express from 'express';
import dotenv from 'dotenv'
import cors from 'cors'
import { upload } from './middlewares/multer.middleware.js'
import uploadOnCloudinary from './utils/cloudinary/cloudinary.js'
const app = express();

app.use(cors());
app.use(express.json({ limit: "16kb" }))
app.use(express.urlencoded({ extended: true, limit: "16kb" }))
app.use(express.static("public"))
dotenv.config();


app.post('/upload', upload.single('myfile'), async (req, res) => {

    try {
        if (!req.file) {
            return res.status(400).json({ error: "No file uploaded" });
        }
        const response = await uploadOnCloudinary(req.file.path);
        console.log(response);
        return res.status(200).json({ message: "File uploaded successfully", data: response });
    } catch (error) {
        console.error("Error uploading file:", error);
        return res.status(500).json({ error: "Internal Server Error" });
    }
});

app.get('/', (req, res) => {
    res.send('Hello World');
})








app.listen(process.env.port, () => {
    console.log(`app is running at http://localhost:${process.env.port}`)
})