const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const postRoute = require("./routes/posts");
const categoryRoute = require("./routes/categories");
const multer = require("multer");

dotenv.config();
app.use(express.json());

// MongoDBに接続
async function main() {
  try {
    await mongoose.connect(process.env.MONGO_URL); // 不要なオプション削除
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log("MongoDB connection error:", error);
  }
}

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "images");
  },
  filename: (req, file, cb) => {
    cb(null, req.body.name);
  },
});

const upload = multer({ storage: storage });
app.post("/api/upload", upload.single("file"), (req, res) => {
  res.status(200).json("File has been uploaded");
});

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/posts", postRoute);
app.use("/api/categories", categoryRoute);

main();

// ルート定義
app.get("/", (req, res) => {
  res.send("Backend is running!");
});

const PORT = 5001;
app.listen(PORT, () => {
  console.log(`Backend is running on port ${PORT}.`);
});
