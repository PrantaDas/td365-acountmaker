import * as readline from 'node:readline/promises';
import clipboard from 'clipboardy';
import process from 'node:process';
import { stdin as input, stdout as output } from 'node:process'; import chalk from "chalk";
import Account from "./utils/account.js";
import { generateRandomEmail } from "./utils/getEmail.js";
import { generateRandomFirstName, generateRandomLastName } from "./utils/namegen.js";
import connect from "./mongodb/connect.js";
import { createAccount } from "./mongodb/account.entity.js";

const rl = readline.createInterface({ input, output });

const api = new Account('https://portal-api.tradenation.com/signup/TD365/auth0/');

/**
 * Crashes the system by generating and creating multiple accounts using the Trade Nation API and MongoDB.
 *
 * @async
 * @function crash
 * @throws {Error} Throws an error if any exception occurs during the process.
 *
 * @returns {Promise<void>} A promise that resolves once the account creation process is complete.
 */
async function crash() {
  try {
    let data = [];
    let mongodbUrl;
    /**
     * Number of accounts to be created.
     *
     * @type {number}
     */
    const accountCount = await rl.question(chalk.magentaBright('> How many Account do you need? :  ')) || 1;

    /**
    * Flag indicating whether to create accounts in MongoDB.
    *
    * @type {string}
    */
    const isMongodb = await rl.question(chalk.magentaBright('> Do you need to create account on MONGODB (y/n)? :  '));

    if (isMongodb.toLowerCase() === 'y') {
      mongodbUrl = await rl.question(chalk.magentaBright('> Please provide a MONGODB URL :  '));
    }

    for (let i = 0; i < Number(accountCount); i++) {
      const firstName = generateRandomFirstName();
      console.log(chalk.magentaBright('=> First Name: ') + chalk.greenBright(firstName));
      const lastName = generateRandomLastName();
      console.log(chalk.magentaBright('=> Last Name: ') + chalk.greenBright(lastName));
      const email = await generateRandomEmail();
      console.log(chalk.magentaBright('=> Email: ') + chalk.greenBright(email));
      const { data: { access_token } } = await api.oAuth(firstName, lastName, email);
      console.log(chalk.magentaBright('=> Got access token: ') + chalk.greenBright(access_token));
      const { data: { status } } = await api.submit(firstName, lastName, email, access_token);
      console.log(chalk.magentaBright('=> Got Submit Status: ') + chalk.greenBright(status));
      const { data: { access_token: token } } = await api.getToken(email);
      console.log(chalk.magentaBright('=> Got Bearer Token: ') + chalk.greenBright(token));
      console.log(chalk.magentaBright('=> Opening Account....'));
      const { data: { alphacode } } = await api.openAccount(token);
      console.log(chalk.magentaBright('=> Account created successfully...'));
      data.push({ email, password: 'Coredevs@2023', accountId: alphacode });
    }

    if (isMongodb.toLocaleLowerCase() === 'y') {
      const res = await connect(mongodbUrl.trim());
      console.log(chalk.magentaBright(res));
      const finalData = await createAccount(data);
      const mappedData = finalData.map(({ accountId, email, password }) => ({ Email: email, Password: password, AccountId: accountId }));
      console.table(mappedData);
    }
    else {
      const finalData = data.map(({ email, password, accountId }) => ({ Email: email, Password: password, AccountId: accountId }));
      console.table(finalData);
    }
    await clipboard.writeSync(JSON.stringify(data, null, 2));
    console.log(chalk.yellowBright('=> Account Data coppied to clipboard'))
  }
  catch (err) {
    console.log(err);
  }
  finally {
    process.exit(0);
  }
}

crash();