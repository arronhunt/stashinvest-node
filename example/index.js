const Stash = require('../');

const credentials = {
    token: 'YOUR_TOKEN',
    user_id: 'YOUR_ID',
    account_id: `YOUR_UUID`
}

Stash.userDetails(credentials).then(console.log);