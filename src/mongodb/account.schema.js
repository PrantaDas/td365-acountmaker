import { Schema, model } from 'mongoose';

const schema = new Schema({
  accountId: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
    trim: true,
  },
  percentage: [
    {
      itemName: {
        type: String,
        trim: true,
      },
      '100%': {
        type: Number,
        trim: true,
      },
      '75%': {
        type: Number,
        trim: true,
      },
      '50%': {
        type: Number,
        trim: true,
      },
      '25%': {
        type: Number,
        trim: true,
      },
      _id: false,
    }
  ],
  accountType: {
    type: String,
    enum: ['Primary', 'Secondary'],
  },
}, { timestamps: true });

schema.methods.toJSON = function () {
  const accountObj = this.toObject();
  delete accountObj.__v;
  delete accountObj.createdAt;
  delete accountObj.updatedAt;
  return JSON.parse(JSON.stringify(accountObj).replace(/_id/g, 'id'));
};

export default model('Account', schema);