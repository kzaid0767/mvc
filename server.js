import express, { urlencoded } from "express";
import { connect } from "mongoose";
import postRouter from "./router/postRouter.js";
const app = express();
const uri = "mongodb+srv://kzaid0767:Reometry123$@cluster0.8d1aj.mongodb.net/mvc-db";

//-----Connect DB------

connect(uri)
  .then(() => {
    console.log("DB has been connected");
  })
  .catch((e) => {
    console.log(e);
  });

const PORT = 8082 || process.env.PORT;
//!Configure ejs
app.set("view engine", "ejs");
//!Middlewares
app.use(urlencoded({ extended: true }));


//!---Router----
app.use("/", postRouter);

//Start the server
app.listen(PORT, console.log(`The server is running on port ${PORT}`));

