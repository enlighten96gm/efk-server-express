import Set from "./Set.js";
import fileService from "../../commonServices/fileService.js";
class SetService {
    async create(set, image) {
      // console.log(image);
      // if (image !== undefined) {
      //   const fileName = fileService.saveFile(image, set.user_id)
      //   const createdSet = await Set.create({ ...set, image: fileName });
      //   return createdSet
      // } else {
        const createdSet = await Set.create({ ...set });
        return createdSet
      // }
    }
    async getOne(id) {
        if (!id) {
          throw new Error('id не найден')
        }
        const user = await Set.findById(id);
        return user
      }
    async update(set) {
    if (!set._id) {
      throw new Error('id не найден')
    }
    const updatedSet = await Set.findByIdAndUpdate(set._id, set, { new: true })
    return updatedSet;
  }
  async getAll(id) {
    try {
      const Sets = await Set.find()
      const SingleIdSet = Sets.filter(item => {
        return item.user_id === id
      })
      return SingleIdSet
    } catch (error) {
      res.status(500).json(error)
    }
  }
  async delete(id) {
    try {
      if (!id) {
        throw new Error('id не найден')
      }
      const category = await Set.findByIdAndDelete(id)
      return category
    } catch (error) {
      res.status(500).json(error)
    }
  }
}

export default new SetService();