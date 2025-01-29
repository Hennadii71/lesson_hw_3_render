import mongoose from "mongoose";
import app from "./app.js";
//OBJgFVnUwSl028iV
const DB_HOST =
  "mongodb+srv://Hennadii71:OBJgFVnUwSl028iV@cluster0.tibuo.mongodb.net/my-contacts?retryWrites=true&w=majority&appName=Cluster0";
mongoose
  .connect(DB_HOST)
  .then(() => {
    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
  })
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });
