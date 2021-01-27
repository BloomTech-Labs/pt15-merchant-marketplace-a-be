const db = require('../data/db-config');

const findAll = async (text) => {
  return await db(text);
};

const findItemByProfile = async (store_id) => {
  return await db('products').select('*').where({ store_id });
};

const createBySellerID = async (sellerID, item) => {
  return await db('products').insert(item).where({ store_id: store_id });
};

const findAllProducts = async (text, id) => {
  return await db(text).select('*').where({ id });
};

const findBy = (text, filter) => {
  return db(text).where(filter);
};

const findById = async (text, id) => {
  return db(text).where({ id }).first().select('*');
};

const create = async (text, profile) => {
  return db(text).insert(profile).returning('*');
};
const createAndInsertById = async (text, item, id) => {
  return db(text).insert(item).where({ id });
};

const update = (text, id, obj) => {
  return db(text).where({ id: id }).first().update(obj).returning('*');
};

const remove = async (text, id) => {
  return await db(text).where({ id }).del();
};

const findOrCreate = async (text, obj) => {
  const foundObj = await findById(text, obj.id).then((obj) => obj);
  if (foundObj) {
    return foundObj;
  } else {
    return await create(text, obj).then((newObj) => {
      return newObj ? newObj[0] : newObj;
    });
  }
};
// GET info from join table
const getTagByItemId = async (productID) => {
  return db('products as p')
    .join('product_tags as pt', 'p.id', 'pt.product_id')
    .join('tags as t', 't.id', 'pt.tag_id')
    .where('pt.product_id', productID)
    .returning('*');
};
// GET info from join table
const getCategoryItem = async (productID) => {
  return db('products as p')
    .join('product_categories as pc', 'p.id', 'pc.product_id')
    .join('categories as c', 'c.id', 'pc.category_id')
    .where('pc.product_id', productID)
    .returning('*');
};

// GET info from join table
const getPhotoByItemID = async (productID) => {
  return db('product_images').where({ product_id: productID }).select('*');
};

// connect items and tags
const connectItemsAndTags = async (productID, tagID) => {
  return db('product_tags').insert({ product_id: productID, tag_id: tagID });
};

//connect categories and items
const connectItemsAndCategories = async (productID, catID) => {
  return db('product_categories').insert({
    product_id: productID,
    category_id: catID,
  });
};

module.exports = {
  findAll,
  findBy,
  findById,
  findItemByProfile,
  create,
  update,
  remove,
  findOrCreate,
  findAllProducts,
  getCategoryItem,
  getTagByItemId,
  createAndInsertById,
  getPhotoByItemID,
  createBySellerID,
  connectItemsAndCategories,
  connectItemsAndTags,
};
