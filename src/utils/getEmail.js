import axios from 'axios';


/**
 * Retrieves a temporary email address from the Temp Mail service.
 *
 * @async
 * @function getTempMail
 * @throws {Error} Throws an error if the request to Temp Mail fails.
 * 
 * @returns {Promise<Object>} A promise that resolves with the data containing the temporary email address.
 */
export async function getTempMail() {
    try {
        const response = await axios({
            url: 'https://web2.temp-mail.org/mailbox',
            method: 'POST',
            headers: {
                'accept': '*/*',
                'accept-language': 'en-US,en;q=0.9',
                'content-type': 'application/json',
                'sec-ch-ua': '"Chromium";v="116", "Not)A;Brand";v="24", "Google Chrome";v="116"',
                'sec-ch-ua-mobile': '?0',
                'sec-ch-ua-platform': '"Linux"',
                'sec-fetch-dest': 'empty',
                'sec-fetch-mode': 'cors',
                'sec-fetch-site': 'same-site'
            },
            referrer: 'https://temp-mail.org/',
            referrerPolicy: 'strict-origin-when-cross-origin',
            withCredentials: false,
        });

        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
};


/**
 * Generates a random email address with a gmail.com domain.
 *
 * @async
 * @function generateRandomEmail
 * 
 * @returns {Promise<string>} A promise that resolves with the generated random email address.
 */
export async function generateRandomEmail() {
    const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890';
    let email = '';

    const firstCharacterIndex = Math.floor(Math.random() * 26);
    email += characters[firstCharacterIndex];

    for (let i = 0; i < 9; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        email += characters[randomIndex];
    }

    email += '@gmail.com';

    return email;
};
