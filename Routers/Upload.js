import express from "express";
import multer from "multer";

const router = express.Router();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./images");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, file.fieldname + "-" + uniqueSuffix + file.originalname);
    console.log(file)   
  },
});

const upload = multer({ storage: storage });

router.post("/", upload.single("file"), function (req, res) {
  res.send("successfully uploaded");
});
export default router;
