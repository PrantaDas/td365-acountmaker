import mongoose from 'mongoose';

export default function connect(url) {
  return new Promise(function (resolve, reject) {
    mongoose.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
      .then(() => resolve('=> Connected to mongodb!!'))
      .catch((err) => reject(err.message));
  });
};
