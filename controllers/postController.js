//Show the create form

import  Post  from "../model/Post.js";

const showCreateForm = (req, res) => {
  res.render("createPost");
};

//Show post list
const showPosts = async (req, res) => {
  const posts = await Post.find();
  res.render("list", { posts });
};
//create post logic
const createPostLogic = async (req, res) => {
  const { title, content, author } = req.body;
  await Post.create({
    title,
    content,
    author,
  });
  //redirect to the post list
  res.redirect("/list");
};
export {
  showCreateForm,
  showPosts,
  createPostLogic,
};