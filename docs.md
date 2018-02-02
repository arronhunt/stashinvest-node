## Typedefs

<dl>
<dt><a href="#Stash">Stash</a> : <code>Class</code></dt>
<dd></dd>
<dt><a href="#Credentials">Credentials</a> : <code>Object</code></dt>
<dd><p>User credentials required for most API calls</p>
</dd>
</dl>

<a name="Stash"></a>

## Stash : <code>Class</code>
**Kind**: global typedef  

* [Stash](#Stash) : <code>Class</code>
    * [.authenticate(credentials)](#Stash.authenticate)
    * [.all()](#Stash.all)
    * [.cards(credentials)](#Stash.cards)
    * [.cardDetails(credentials)](#Stash.cardDetails)
    * [.userDetails(credentials)](#Stash.userDetails)
    * [.investorApplication(credentials)](#Stash.investorApplication)
    * [.bankAccounts(credentials)](#Stash.bankAccounts)
    * [.autoStash(credentials)](#Stash.autoStash)
    * [.taxDocuments(credentials)](#Stash.taxDocuments)
    * [.tradeConfirms(credentials)](#Stash.tradeConfirms)
    * [.accountHistory(credentials, filters)](#Stash.accountHistory)
    * [.portfolio(credentials)](#Stash.portfolio)
    * [.buy(credentials, params)](#Stash.buy)
    * [.approveBankAccount(credentials, amount_1, amount_2)](#Stash.approveBankAccount)

<a name="Stash.authenticate"></a>

### Stash.authenticate(credentials)
Authenticate user

**Kind**: static method of [<code>Stash</code>](#Stash)  

| Param | Type | Description |
| --- | --- | --- |
| credentials | <code>Object</code> | Account credentials |
| credentials.email | <code>string</code> | User's email address |
| credentials.password | <code>string</code> | User's account password |

<a name="Stash.all"></a>

### Stash.all()
Get all cards available

**Kind**: static method of [<code>Stash</code>](#Stash)  
<a name="Stash.cards"></a>

### Stash.cards(credentials)
Get available cards

**Kind**: static method of [<code>Stash</code>](#Stash)  

| Param | Type | Description |
| --- | --- | --- |
| credentials | [<code>Credentials</code>](#Credentials) | User's account credentials |

<a name="Stash.cardDetails"></a>

### Stash.cardDetails(credentials)
**Kind**: static method of [<code>Stash</code>](#Stash)  

| Param | Type | Description |
| --- | --- | --- |
| credentials | [<code>Credentials</code>](#Credentials) | User's account credentials |

<a name="Stash.userDetails"></a>

### Stash.userDetails(credentials)
Get user account details

**Kind**: static method of [<code>Stash</code>](#Stash)  

| Param | Type | Description |
| --- | --- | --- |
| credentials | [<code>Credentials</code>](#Credentials) | User's account credentials |

<a name="Stash.investorApplication"></a>

### Stash.investorApplication(credentials)
Get user's investor application

**Kind**: static method of [<code>Stash</code>](#Stash)  

| Param | Type | Description |
| --- | --- | --- |
| credentials | [<code>Credentials</code>](#Credentials) | User's account credentials |

<a name="Stash.bankAccounts"></a>

### Stash.bankAccounts(credentials)
Get user's bank accounts

**Kind**: static method of [<code>Stash</code>](#Stash)  

| Param | Type | Description |
| --- | --- | --- |
| credentials | [<code>Credentials</code>](#Credentials) | User's account credentials |

<a name="Stash.autoStash"></a>

### Stash.autoStash(credentials)
Get user auto stash details

**Kind**: static method of [<code>Stash</code>](#Stash)  

| Param | Type | Description |
| --- | --- | --- |
| credentials | [<code>Credentials</code>](#Credentials) | User's account credentials |

<a name="Stash.taxDocuments"></a>

### Stash.taxDocuments(credentials)
Get user's tax documents

**Kind**: static method of [<code>Stash</code>](#Stash)  

| Param | Type | Description |
| --- | --- | --- |
| credentials | [<code>Credentials</code>](#Credentials) | User's account credentials |

<a name="Stash.tradeConfirms"></a>

### Stash.tradeConfirms(credentials)
Get user's trade confirms

**Kind**: static method of [<code>Stash</code>](#Stash)  

| Param | Type | Description |
| --- | --- | --- |
| credentials | [<code>Credentials</code>](#Credentials) | User's account credentials |

<a name="Stash.accountHistory"></a>

### Stash.accountHistory(credentials, filters)
Get user's Account History

**Kind**: static method of [<code>Stash</code>](#Stash)  

| Param | Type | Description |
| --- | --- | --- |
| credentials | [<code>Credentials</code>](#Credentials) | User's account credentials |
| filters | <code>Object</code> | Filter paramenters |
| filters.before | <code>string</code> | Unix datetime |
| filters.after | <code>string</code> | Unix datetime |

<a name="Stash.portfolio"></a>

### Stash.portfolio(credentials)
Get an account portfolio

**Kind**: static method of [<code>Stash</code>](#Stash)  

| Param | Type | Description |
| --- | --- | --- |
| credentials | [<code>Credentials</code>](#Credentials) | User's account credentials |

<a name="Stash.buy"></a>

### Stash.buy(credentials, params)
Place a buy order

**Kind**: static method of [<code>Stash</code>](#Stash)  

| Param | Type | Description |
| --- | --- | --- |
| credentials | [<code>Credentials</code>](#Credentials) | User's account credentials |
| params | <code>Object</code> | Parameters for the purchase |
| params.value | <code>number</code> | The dollar amount you wish to purchase. Minimum is 5. |
| params.card_id | <code>number</code> | The ID of the card you wish to purchase with. |

<a name="Stash.approveBankAccount"></a>

### Stash.approveBankAccount(credentials, amount_1, amount_2)
Approve a bank account by providing two dollar amounts

**Kind**: static method of [<code>Stash</code>](#Stash)  

| Param | Type | Description |
| --- | --- | --- |
| credentials | [<code>Credentials</code>](#Credentials) | User's account credentials |
| amount_1 | <code>number</code> | Dollar amount 1 |
| amount_2 | <code>number</code> | Dollar amount 2 |

<a name="Credentials"></a>

## Credentials : <code>Object</code>
User credentials required for most API calls

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| access_token | <code>string</code> | User's Access Token |
| user_id | <code>string</code> | User's ID |
| uuid | <code>string</code> | User's UUID |

