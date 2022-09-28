import { Request, Response } from "express";
import { insertCar, getCars, getCar, updateCar, deleteCar } from "../services/item.service";
import { handleHttp } from "../utils/error.handle";

const getItem = async ({ params }: Request, res: Response) => {
  try {
    const response = await getCar(params.id);
    const data = response ? response : "NOT_FOUND";
    res.send(data);
  } catch (error) {
    handleHttp(res, 'ERROR_GET_ITEM', error);
  }
};

const getItems = async (req: Request, res: Response) => {
  try {
    const response = await getCars();
    res.send(response);
  } catch (error) {
    handleHttp(res, 'ERROR_GET_ITEMS');
  }
};

const updateItem = async ({params, body}: Request, res: Response) => {
  try {
    const response = await updateCar(params.id, body);
    res.send(response);
  } catch (error) {
    handleHttp(res, 'ERROR_UPDATE_ITEM');
  }
};

const postItem = async ({body}: Request, res: Response) => {
  try {
    const response = await insertCar(body);
    res.send(response);
  } catch (error) {
    console.log(error)
    handleHttp(res, 'ERROR_POST_ITEM', error);
  }
};

const deleteItem = async ({params}: Request, res: Response) => {
  try {
    const response = await deleteCar(params.id);
    res.send(response);
  } catch (error) {
    handleHttp(res, 'ERROR_DELETE_ITEM');
  }
};

export { getItem, getItems, updateItem, postItem, deleteItem };