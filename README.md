# Automated Account Creation for TD365

![TD365 Logo](./asset/Screenshot%202023-11-26%20010229.png)

## Overview

This Node.js script is designed to automate the account creation process on the TD365 platform (https://td365.com/). The primary goal is to facilitate the testing and feature verification process by providing a quick and efficient way to create accounts without manual intervention.

## Features

- **Automated Account Creation:** The script automates the account creation process, reducing the time and effort required for testing and verification.

- **Browser Automation:** Utilizing Puppeteer and related tools, the script performs browser automation to simulate the account creation workflow on the TD365 platform.

- **Stealth Mode and Ad-blocker:** Puppeteer plugins like `puppeteer-plugin-stealth` and ad-blocker integration enhance automation by reducing the chance of detection.

- **Axios for API Requests:** Axios is used for making HTTP requests, enabling seamless communication with the TD365 API.

## Why Use This Script?

- **Time Efficiency:** Manually creating accounts for testing purposes can be time-consuming. This script streamlines the process, allowing you to focus on testing features rather than repetitive tasks.

- **Avoid Account Bans:** Continuous testing can sometimes lead to account bans. Automation allows for controlled and monitored testing to prevent unnecessary account restrictions.

- **Script Customization:** The script is easily customizable to adapt to changes in the TD365 platform or to meet specific testing requirements.

## Prerequisites

- **Node.js:** Ensure that Node.js is installed on your machine. You can download it from [https://nodejs.org/](https://nodejs.org/).

- **Packages:** Install the required packages by running `npm install` in the project directory.

## Usage

1. Clone the repository:

   ```bash
   git clone https://github.com/PrantaDas/td365-acountmaker.git

2. Navigate to the project directory
    ```bash
    cd td365-acountmaker
    ```
3. Install the dependencies
    ```bash
    npm i or yarn
    ```
4. Run the scrip
    ```bash
    npm start or yarn start
    ```

### Disclaimer
This script is intended for testing and educational purposes. Be aware of the terms of service of the TD365 platform and use the script responsibly

### Contributing
If you have suggestions or improvements, feel free to open an issue or create a pull request.

**Note** : The TD365 logo and brand are the property of TD365. This script is not officially affiliated with or endorsed by TD365.