import { Router } from "express";

import { showCreateForm, showPosts, createPostLogic } from "../controllers/postController.js";

//Router
const postRouter = Router();

//show homepage
postRouter.get("/", (req, res) => {
    res.render("index");
});

//! Show the create form
postRouter.get("/create", showCreateForm);
//! To get all posts
postRouter.get("/list", showPosts);
//! Create the post (The main logic)
postRouter.post("/create", createPostLogic);

export default postRouter;