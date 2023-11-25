import mongoose from 'mongoose';


/**
 * Establishes a connection to a MongoDB database using the provided URL.
 *
 * @function connect
 * @param {string} url - The MongoDB connection URL.
 * @returns {Promise<string>} A promise that resolves with a success message if the connection is successful.
 * @throws {string} Throws an error message if the connection fails.
 */
export default function connect(url) {
  /**
   * Returns a promise that resolves with a success message if the connection is successful.
   *
   * @async
   * @inner
   * @function
   * @param {string} resolve - The function to call when the connection is successful.
   * @param {string} reject - The function to call when the connection fails.
   * @throws {string} Throws an error message if the connection fails.
   */
  return new Promise(function (resolve, reject) {
    mongoose.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
      .then(() => resolve('=> Connected to mongodb!!'))
      .catch((err) => reject(err.message));
  });
};
