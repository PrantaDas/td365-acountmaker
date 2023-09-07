import chalk from 'chalk';
import Account from './account.schema.js';
import percentage from './percentage.js';

export const createAccount = async (data = []) => {
  try {
    console.log(chalk.magentaBright('=> Creating account'));
    if (!data.length > 0) return console.log(chalk.redBright('No accounts found!'));
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