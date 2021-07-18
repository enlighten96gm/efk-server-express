import Post from "./Post.js";
import fileService from "./../commonServices/fileService.js";


class PostService {

  async create(post, picture) {
    const fileName = fileService.saveFile(picture, post.author)
    const createdPost = await Post.create({ ...post, picture: fileName });
    return createdPost
  }

  async getAll() {
    try {
      const posts = await Post.find();
      return posts
    } catch (error) {
      res.status(500).json(error)
    }
  }

  async getOne(id) {
    if (!id) {
      throw new Error('id не найден')
    }
    const post = await Post.findById(id);
    return post
  }

  async update(post) {
    if (!post._id) {
      throw new Error('id не найден')
    }
    const updatedPost = await Post.findByIdAndUpdate(post._id, post, { new: true })
    return updatedPost;
  }

  async delete(id) {
    try {
      if (!id) {
        throw new Error('id не найден')
      }
      const post = await Post.findByIdAndDelete(id)
      return post
    } catch (error) {
      res.status(500).json(error)
    }
  }



}

export default new PostService();