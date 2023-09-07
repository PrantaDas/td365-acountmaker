import axios from 'axios';

class Account {
    _url;
    constructor(_url) {
        this._url = _url;
    }

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