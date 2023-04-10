import { createCategoryR, getAllCategoriesR, getCategoryByIdR, updateCategoryR ,deleteCategoryR} from '../persistencia/Repository/repostory.js';


export const getAllCategories = async (req, res) => {
  try {
    // const categories = await CategoryModel.find();
    const categories = await getAllCategoriesR()
    // console.log(categories)
    res.json({
      data: categories
    });
  } catch (err) {
    res.status(500).json({
      error: err.message,
      stack: err.stack,
    });
  }
};

export const getCategoryById = async (req, res) => {
  try {
    const { id } = req.params;
    // const category = await CategoryModel.findById(id)
    const category = await getCategoryByIdR(id)
    if(!category)
     return res.status(404).json({
      msg: 'Category not found!'
     });
     res.json({
      data: category
     })
  } catch (err) {
    res.status(500).json({
      error: err.message
    });
  }
};

export const createCategory = async (req, res) => {
  try {
    const { name, description } = req.body;
    // const newCategory = await CategoryModel.create({
    //   name, 
    //   description,
    // });
    const newCategory = await createCategoryR({
      name, 
      description,
    });

    res.json({
      data: newCategory
    })
  } catch (err) {
    res.status(500).json({
      error: err.message
    });
  }
};

export const updateCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, description } = req.body;

    // const categoryUpdated = await CategoryModel.findByIdAndUpdate(
    //   id,
    //   {name, description},
    //   {new: true}
    // );
    const categoryUpdated = await updateCategoryR({
      id,
      name,
      description,
      new: true
    });
    res.json({
      msg: 'category updated',
      data: categoryUpdated,
    })
  } catch (err) {
    res.status(500).json({
      error: err.message
    });
  }
};

export const deleteCategory = async (req, res) => {
  try {
    const {id} = req.params;
    // await CategoryModel.findByIdAndDelete(id);
    await deleteCategoryR(id)
    res.json({
      msg: 'category deleted successfully'
    })
  } catch (err) {
    res.status(500).json({
      error: err.message
    });
  }
};