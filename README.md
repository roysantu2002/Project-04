
## FlightSurety
FlightSurety is a sample application project for Udacity's Blockchain course.

## Install
This repository contains Smart Contract code in Solidity (using Truffle), tests (also using Truffle), dApp scaffolding (using HTML, CSS and JS) and server app scaffolding.

## To install, download or clone the repo, then:

npm install truffle compile

## Resources
How does Ethereum work anyway?
BIP39 Mnemonic Generator
Truffle Framework
Ganache Local Blockchain
Remix Solidity IDE
Solidity Language Reference
Ethereum Blockchain Explorer
Web3Js Reference

#### Repo

To install, download or clone the repo.

#### Node Version

Use nvm to run multiple versions of node. Select and install node version 10.12.0:

```bash
nvm list available
nvm install 10.12.0
nvm use 10.12.0
```

#### Packages

To install all necessary dependencies, run:
`npm install` from the root folder of this project.
And `npm audit fix`

Update or install your truffle:
`npm install truffle -g`


####  GANACHE setup

Download and install Ganache v2.5.4: <https://www.trufflesuite.com/ganache>

Run Ganache follow the steps:
- on `Workspace` Tab:
	- select `NEW WORKSPACE - Ethereum`
	- enter Workspace name: `FligthSurety`
	- click on `ADD PROJECT` and add the `truffle.js` file.
- on `Server` Tab:
	- change `Port number` to `9545`.
- on `Accounts and Keys` Tab:
	- change `TOTAL ACCOUNTS TO GENERATE` to 40
	- change the `Mnemonic` to `ugly salad end stove steak entry wash mechanic fit exhaust magnet earn`
- on `Chain` Tab:
	- change the `GAS LIMIT` to `67219750`
- Then click on `SAVE WORKSPACE` button.

Open your saved workspace:

![](docs/g1.png)

##  Develop Client

To build the project, run:
`truffle compile`

![](docs/p1.png)

To run truffle tests:

`truffle test ./test/flightSurety.js`

![](docs/p2.png)

`truffle test ./test/oracles.js`

![](docs/p3.png)

To use the dapp:

`truffle migrate --reset`

![](docs/p4.png)

Check deployed smart contracts:

![](docs/c1.png)

`npm run dapp`

![](docs/p5.png)

To view dapp:

`http://localhost:8000`


##  Develop Server

Open new terminal and run:
`npm run server`

![](docs/p7.png)


## Test your dapp

### Submit a Flight to the Oracles

Open your browser in `http://localhost:8000`

## 7. Deploy

To build dapp for prod:
`npm run dapp:prod`

Deploy the contents of the ./dapp folder

## Deployed

Compiling your contracts...
===========================
✔ Fetching solc version list from solc-bin. Attempt #1
✔ Fetching solc version list from solc-bin. Attempt #1
> Everything is up to date, there is nothing to compile.


Starting migrations...
======================
> Network name:    'development'
> Network id:      5777
> Block gas limit: 67219750 (0x401b126)


1_initial_migration.js
======================

   Deploying 'Migrations'
   ----------------------
   > transaction hash:    0x08869cdb2cc0c0a37bd2b28a6bb49f2a70f3990a9d7a01d855f7b8a5efe7992f
   > Blocks: 0            Seconds: 0
   > contract address:    0xBC680Ed22e9146131422f7574275590fe296dfb6
   > block number:        8
   > block timestamp:     1646825019
   > account:             0x3a59B9d754c7DBF49fe2617Aab2Dc73764d97d56
   > balance:             99.87455264
   > gas used:            238594 (0x3a402)
   > gas price:           20 gwei
   > value sent:          0 ETH
   > total cost:          0.00477188 ETH

   > Saving migration to chain.
   > Saving artifacts
   -------------------------------------
   > Total cost:          0.00477188 ETH


2_deploy_contracts.js
=====================

   Deploying 'FlightSuretyData'
   ----------------------------
   > transaction hash:    0x6fe6f6bf44040e0e4dfb6a96bbff469321d8c41f386f35344cabaafe19b35890
   > Blocks: 0            Seconds: 0
   > contract address:    0x33E1Ba963092Db6493d1cB66382770fd65cB0422
   > block number:        10
   > block timestamp:     1646825021
   > account:             0x3a59B9d754c7DBF49fe2617Aab2Dc73764d97d56
   > balance:             99.83386558
   > gas used:            1992005 (0x1e6545)
   > gas price:           20 gwei
   > value sent:          0 ETH
   > total cost:          0.0398401 ETH


   Deploying 'FlightSuretyApp'
   ---------------------------
   > transaction hash:    0x964277f6c1213aaf52293b8145f787d2e139ec18287fa9e1886ae3f3b863a9ed
   > Blocks: 0            Seconds: 0
   > contract address:    0x7eC0cfAD8e9c51430164bEb9F82DA0862f22d928
   > block number:        11
   > block timestamp:     1646825022
   > account:             0x3a59B9d754c7DBF49fe2617Aab2Dc73764d97d56
   > balance:             99.7650231
   > gas used:            3442124 (0x3485cc)
   > gas price:           20 gwei
   > value sent:          0 ETH
   > total cost:          0.06884248 ETH

   > Saving migration to chain.
   > Saving artifacts
   -------------------------------------
   > Total cost:          0.10868258 ETH

Summary
=======
> Total deployments:   3
> Final cost:          0.11345446 ETH
