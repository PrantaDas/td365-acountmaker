import axios from 'axios';

/**
 * Represents a class for interacting with the Trade Nation API to manage user accounts.
 *
 * @class Account
 */
class Account {
    _url;

    /**
   * Creates an instance of the Account class.
   *
   * @constructor
   * @param {string} _url - The base URL for the Trade Nation API.
   */
    constructor(_url) {
        this._url = _url;
    }


    /**
     * Initiates the OAuth process to obtain an access token.
     *
     * @async
     * @method oAuth
     * @param {string} first_name - The first name of the user.
     * @param {string} last_name - The last name of the user.
     * @param {string} email - The email address of the user.
     * @returns {Promise<Object>} A promise that resolves with the OAuth response data.
     */
    async oAuth(first_name, last_name, email) {
        return axios({
            method: 'POST',
            url: this._url,
            headers: {
                'content-type': 'application/json',
                'sec-ch-ua': '"Chromium";v="116", "Not)A;Brand";v="24", "Google Chrome";v="116"',
                'sec-ch-ua-mobile': '?0',
                'sec-ch-ua-platform': '"Linux"',
            },
            referrer: 'https://traders.td365.com/',
            referrerPolicy: 'strict-origin-when-cross-origin',
            data: {
                title: 'Mr',
                first_name,
                last_name,
                date_of_birth: '1978-09-22',
                email,
                password: 'Coredevs@2023',
                telephone: '+0392093203920',
                addr_country: 'AL',
                addr_zip: '1210',
                addr_street: 'Road No 9',
                addr_line_2: 'Avenue 9,Mipur 12 DOHS',
                addr_city: 'Dhaka',
            },
            withCredentials: false,
        });
    }


    /**
    * Submits user details for account creation.
    *
    * @async
    * @method submit
    * @param {string} first_name - The first name of the user.
    * @param {string} last_name - The last name of the user.
    * @param {string} email - The email address of the user.
    * @param {string} access_token - The access token obtained from the OAuth process.
    * @returns {Promise<Object>} A promise that resolves with the submission response data.
    */
    async submit(first_name, last_name, email, access_token) {
        return axios({
            method: 'POST',
            url: 'https://portal-api.tradenation.com/signup/TD365/submit/',
            headers: {
                accept: '*/*',
                'accept-language': 'en-US,en;q=0.9',
                'content-type': 'application/json',
                'sec-ch-ua': '"Chromium";v="116", "Not)A;Brand";v="24", "Google Chrome";v="116"',
                'sec-ch-ua-mobile': '?0',
                'sec-ch-ua-platform': '"Linux"',
                'sec-fetch-dest': 'empty',
                'sec-fetch-mode': 'cors',
                'sec-fetch-site': 'cross-site',
            },
            referrer: 'https://traders.td365.com/',
            referrerPolicy: 'strict-origin-when-cross-origin',
            data: {
                cqq: {},
                title: 'Mr',
                first_name,
                last_name,
                date_of_birth: '1906-09-27',
                email,
                password: 'Coredevs@2023',
                confirm_password: 'Coredevs@2023',
                telephone: '+9090909002',
                addr_country: 'AL',
                addr_zip: '1210',
                addr_street: 'Road No 9',
                addr_line_2: 'Avenue 9,Mipur 12 DOHS',
                addr_city: 'Dhaka',
                level_of_knowledge: 'have_experience',
                relevant_experience: 'yes_experience',
                employment_status: 'employed',
                approx_annual_income: 'income_less_20k',
                approx_asset_value: 'assets_less_20k',
                source_funds: 'saving_investment',
                trading_platform: 'MT4TD365',
                cloudtrade_currency: 'USD',
                MT4TD365_currency: 'USD',
                media_source: 'Facebook',
                confirm: true,
                risk_disclosure: true,
                consent: true,
                marketing: true,
                access_token,
                cxdRef: null,
                x_tracking_id: null,
            },
            withCredentials: false,
        })
    }


    /**
     * Obtains a token from the Auth0 service.
     *
     * @async
     * @method getToken
     * @param {string} username - The username for which to obtain the token.
     * @returns {Promise<Object>} A promise that resolves with the token response data.
     */
    async getToken(username) {
        const data = {
            realm: 'Username-Password-Authentication',
            client_id: 'eeXrVwSMXPZ4pJpwStuNyiUa7XxGZRX9',
            scope: 'openid',
            grant_type: 'http://auth0.com/oauth/grant-type/password-realm',
            username,
            password: 'Coredevs@2023'
        };

        return axios.post('https://td365.eu.auth0.com/oauth/token', data, {
            headers: {
                'content-type': 'application/json',
                'sec-ch-ua': '"Chromium";v="116", "Not)A;Brand";v="24", "Google Chrome";v="116"',
                'sec-ch-ua-mobile': '?0',
                'sec-ch-ua-platform': '"Linux"'
            },
            referrer: 'https://traders.td365.com/',
            referrerPolicy: 'strict-origin-when-cross-origin',
            mode: 'cors',
            credentials: 'omit'
        });

    }


    /**
     * Opens a trading account using the provided access token.
     *
     * @async
     * @method openAccount
     * @param {string} access_token - The access token used for authentication.
     * @returns {Promise<Object>} A promise that resolves with the response data for opening a trading account.
     */
    async openAccount(access_token) {
        const data = {
            backend_id: 33,
            account_type: 'CLOUDTRADE',
            currency: 'USD',
            mt4_password: '',
            isDemo: true
        };


        return axios({
            method: 'POST',
            url: 'https://portal-api.tradenation.com/TD365/add_trading_account/',
            headers: {
                authorization: `Bearer ${access_token}`,
                'content-type': 'application/json',
                'sec-ch-ua': '"Chromium";v="116", "Not)A;Brand";v="24", "Google Chrome";v="116"',
                'sec-ch-ua-mobile': '?0',
                'sec-ch-ua-platform': '"Linux"',
            },
            data,
            referrer: 'https://traders.td365.com/',
            referrerPolicy: 'strict-origin-when-cross-origin',
            mode: 'cors',
            credentials: 'include',
        });
    }

}

export default Account;