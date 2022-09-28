import { Schema, Types, model, Model } from 'mongoose';
import { Car } from '../interface/car.interface';

const ItemSchema = new Schema<Car>(
  {
    name: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      required: true,
    },
    gas: {
      type: String,
      enum: ['gasoline', 'diesel', 'electric'],
      required: true,
    },
    model: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    year: {
      type: Number,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
  },
  {
    versionKey: false,
    strict: false,
    timestamps: true,
  }
);

const ItemModel: Model<Car> = model<Car>('Items', ItemSchema);

export default ItemModel;
