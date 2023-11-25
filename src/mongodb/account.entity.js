import chalk from 'chalk';
import Account from './account.schema.js';
import percentage from './percentage.js';


/**
 * Creates accounts in the MongoDB database based on the provided data.
 *
 * @async
 * @function createAccount
 * @param {Object[]} data - An array of account data objects.
 * @param {string} data[].email - The email address associated with the account.
 * @param {string} data[].password - The password for the account.
 * @param {string} data[].accountId - The unique identifier for the account.
 * @returns {Promise<Account[]>} A promise that resolves with an array of created Account instances.
 */
export const createAccount = async (data = []) => {
  try {
    console.log(chalk.magentaBright('=> Creating account'));
    if (!data.length > 0) return console.log(chalk.redBright('=> No accounts found!'));
    console.log(chalk.magentaBright('=> Accounts data found'));
    let accounts = [];

    await Promise.all(data.map(async (d) => {
      d.percentage = percentage;
      const account = new Account(d);
      await account.save();
      accounts.push(account);
    }));

    console.log(chalk.greenBright('=> Accounts Created Successfully'));
    return accounts;
  }
  catch (err) {
    console.log(err);
  }
};