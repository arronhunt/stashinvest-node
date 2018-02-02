const https = require('https');

const URL = "https://api.stashinvest.com/";
const HOST = 'api.stashinvest.com';
const PATH = '/api/v1';

/**
 * @typedef {Class} Stash
 */
class Stash {
    /**
     * Authenticate user
     * @param {Object} credentials - Account credentials
     * @param {string} credentials.email - User's email address
     * @param {string} credentials.password - User's account password
     */
    static authenticate({ email, password }) {
        return request.post('auth', null, { user: { email, password }});
    }

    /**
     * Get all cards available
     */
    static all() {
        return request.get(`cards/all`);
    }

    /**
     * Get available cards
     * @param {Credentials} credentials - User's account credentials
     */
    static cards(credentials) {
        return request.get(`cards`, credentials.access_token);
    }

    /**
     * 
     * @param {Credentials} credentials - User's account credentials
     */
    static cardDetails(credentials, card_id) {
        return request.get(`cards/${card_id}`, credentials.access_token);
    }

    /**
     * Get user account details
     * @param {Credentials} credentials - User's account credentials
     */
    static userDetails(credentials) {
        return request.get(`users/${credentials.user_id}`, credentials.access_token);
    }

    /**
     * Get user's investor application
     * @param {Credentials} credentials - User's account credentials
     */
    static investorApplication(credentials) {
        return request.get(`users/${credentials.user_id}/investor_application`, credentials.access_token);
    }

    /**
     * Get user's bank accounts
     * @param {Credentials} credentials - User's account credentials
     */
    static bankAccounts(credentials) {
        return request.get(`users/${credentials.user_id}/bank_accounts`, credentials.access_token);
    }

    /**
     * Get user auto stash details
     * @param {Credentials} credentials - User's account credentials
     */
    static autoStash(credentials) {
        return request.get(`users/${credentials.user_id}/auto_stash`, credentials.access_token);
    }

    /**
     * Get user's tax documents
     * @param {Credentials} credentials - User's account credentials
     */
    static taxDocuments(credentials) {
        return request.get(`users/${credentials.user_id}/accounts/${credentials.uuid}/clearing/tax_documents`, credentials.access_token);
    }

    /**
     * Get user's trade confirms
     * @param {Credentials} credentials - User's account credentials
     */
    static tradeConfirms(credentials) {
        return request.get(`users/${credentials.user_id}/accounts/${credentials.uuid}/clearing/trade_confirms`, credentials.access_token);
    }

    /**
     * Get user's Account History
     * @param {Credentials} credentials - User's account credentials
     * @param {Object} filters - Filter paramenters
     * @param {string} filters.before - Unix datetime
     * @param {string} filters.after - Unix datetime
     */
    static accountHistory(credentials, filters = {}) {
        return request.get(`users/${credentials.user_id}/accounts/${credentials.uuid}/account_history`, credentials.access_token, filters);
    }

    /**
     * Get an account portfolio
     * @param {Credentials} credentials - User's account credentials
     */
    static portfolio(credentials) {
        return request.get(`users/${credentials.user_id}/accounts/${credentials.uuid}/portfolio`, credentials.access_token);
    }

    /**
     * Place a buy order
     * @param {Credentials} credentials - User's account credentials
     * @param {Object} params - Parameters for the purchase 
     * @param {number} params.value - The dollar amount you wish to purchase. Minimum is 5.
     * @param {number} params.card_id - The ID of the card you wish to purchase with.
     */
    static buy(credentials, params = {}) {
        return request.post(`users/${credentials.user_id}/accounts/${credentials.uuid}/transactions/buy`, 
            credentials.access_token, 
            {
                transaction: {
                    value: params.value,
                    card_id: params.card_id
                }
            }
        );
    }

    /**
     * Approve a bank account by providing two dollar amounts
     * @param {Credentials} credentials - User's account credentials
     * @param {number} amount_1 - Dollar amount 1
     * @param {number} amount_2 - Dollar amount 2
     */
    static approveBankAccount(credentials, amount_1, amount_2) {
        return request.post(`users/${credentials.user_id}/accounts/${credentials.uuid}/bank_accounts/approve`, 
            credentials.access_token,
            {
                amount_1, amount_2
            }
        );
    }

}

/**
 * @typedef {Object} Credentials - User credentials required for most API calls
 * @property {string} access_token - User's Access Token
 * @property {string} user_id - User's ID
 * @property {string} uuid - User's UUID
 */

class request {
    static makeRequest(method, path, access_token, body = {}, request_headers = {}) {
        return new Promise((resolve, reject) => {
            const postBody = JSON.stringify(body);            
            const options = {
                hostname: HOST,
                path: `${PATH}/${path}`,
                method: method,
                headers: {
                    'Content-Type': 'application/json',
                    'Content-Length': postBody.length
                }
            }

            if (access_token) {
                options.headers['Authorization'] = access_token;
            }
              
            let req = https.request(options, res => {
                console.log('Status Code', res.statusCode);
                let data = '';

                res.setEncoding('utf8');
                res.on('data', chunk => { 
                    data += chunk 
                });
                res.on('end', () => {
                    const json = JSON.parse(data);
                    if (res.statusCode >= 200 && res.statusCode < 300) {
                        resolve(json);
                    } else {
                        reject(json);
                    }                    
                });
            });
            
            req.write(postBody);
            req.on('error', reject);
        });
    }

    static get(path, access_token = null, params = {}) {
        const structuredPath = path.concat(keysToQueryString(params));
        return this.makeRequest('GET', structuredPath, access_token);
    }
    static post(path, access_token, body) {
        return this.makeRequest('POST', path, access_token, body);
    }
}
const keysToQueryString = (keys) => (
    encodeURI(Object.keys(keys).reduce((string, key, index) => (
      `${string}${!index?'?':'&'}${key}=${keys[key]}`
    ), ''))
);

module.exports = Stash;