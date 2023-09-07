import chalk from "chalk";
import Account from "./utils/account.js";
import { generateRandomEmail } from "./utils/getEmail.js";
import { generateRandomFirstName, generateRandomLastName } from "./utils/namegen.js";


const api = new Account('https://portal-api.tradenation.com/signup/TD365/auth0/');

async function crash() {
    try {
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
        const accountData = { email, password: 'Coredevs@2023', accountId: alphacode };
        const refined = Object.entries(accountData).map(([key, value]) => ({ key, value }));
        console.table(refined);
    }
    catch (err) {
        console.log(err.message);
    }
}

crash();