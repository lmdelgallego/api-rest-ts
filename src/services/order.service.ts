import ItemModel from "../models/item";

const getCars = async () => {
  const responseGet = await ItemModel.find({});
  return responseGet;
};


export { getCars };