# Unofficial Stash Invest node module

A simple module for interfacing with https://www.stashinvest.com.

## Getting Started

### Installing

```
npm install --save stashinvest-node
```

### Usage

Read the full docs in [docs.md](https://github.com/arronhunt/stashinvest-node/blob/master/docs.md)

```js
const Stash = require('stashinvest-node');

Stash.authenticate({ 
    email: 'you@email.com', 
    password: 'hunter2'
}).then(console.log);

// { 
//     success: true,
//     status: 200,
//     api_key: {
//         access_token: '0000000000000000000000000',
//         user_id: 123456,
//         uuid: 'ffffff-ffff-ffff-ffff-ffffff',
//         active: true 
//     }
// }
```
Then, once you have your api key
```jsx
const credentials = {
    access_token: '0000000000000000000000000',
    user_id: 123456,
    uuid: 'ffffff-ffff-ffff-ffff-ffffff',
}

Stash.userDetails(credentials).then(console.log);

// returns
// { 
//     success: true,
//     status: 200,
//     user: {...},
//     profile: {...},
//     accounts: [...]
// }

```

## Contributing

1. For this project.
2. Create a feature branch: `git checkout -b feature/my-feature`.
3. Push your branch `git push origin feature/my-feature`.
4. Submit a pull request.

## Authors

* **Arron Hunt** - *Initial work* - [arronhunt](https://github.com/arronhunt)

## License

This project is licensed under the MIT License.