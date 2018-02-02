const Stash = require('../');

const credentials = {
    access_token: 'YOUR_TOKEN',
    user_id: 'YOUR_ID',
    uuid: `YOUR_UUID`
}

Stash.userDetails(credentials).then(console.log);