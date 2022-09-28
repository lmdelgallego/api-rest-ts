import { Schema, Types, model, Model } from 'mongoose';
import { User } from '../interface/user.interface';

const UserSchema = new Schema<User>(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      default: 'Soy la descripción del usuario',
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const UserModel: Model<User> = model<User>('users', UserSchema);

export default UserModel;
