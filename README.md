# MetaToken Smart Contract and Scripts

This repository contains a Solidity smart contract called `MetaToken` along with several JavaScript scripts to interact with the contract on the Ethereum blockchain. The smart contract is an ERC-721 token with a unique minting function and additional functionality to interact with an FXRoot contract.

## Smart Contract: MetaToken

The `MetaToken` contract is an ERC-721 token with additional features. It allows minting of tokens, retrieving the prompt description, and approving deposits to an FXRoot contract.

### Contract Details

- **Name:** MetaToken
- **Symbol:** MTA

### Functions

- `mint(address to)`: Mints 5 tokens and assigns them to the specified address. Only the contract owner can call this function.
- `promptDescription()`: Retrieves the prompt description associated with the tokens.

## Scripts

### 1. `deploy.js`

This script deploys the `MetaToken` contract on the blockchain.

### 2. `mint.js`

This script interacts with the deployed `MetaToken` contract to mint 5 tokens and retrieve the prompt description.

### 3. `approveDeposit.js`

This script interacts with the `MetaToken` contract and an FXRoot contract to approve deposits and deposit tokens into the FXRoot.

### 4. `getBalance.js`

This script retrieves the token balance of a specific wallet address from the `MetaToken` contract.

## Instructions

1. Run `npm install` to install the necessary dependencies.
2. Deploy the `MetaToken` contract using `deploy.js` script.
3. Interact with the contract using the provided scripts (`mint.js`, `approveDeposit.js`, `getBalance.js`) to mint tokens, approve deposits, and check token balances.

### Usage

1. Deploy the contract: `npx hardhat run scripts/deploy.js --network goerli`
2. Mint tokens and get prompt description: `npx hardhat run scripts/mint.js --network goerli`
3. Approve deposits and deposit tokens: `npx hardhat run scripts/approveDeposit.js --network goerli`
4. Check token balance: `npx hardhat run scripts/getBalance.js --network goerli`

Please make sure to configure the script files with correct contract addresses and wallet addresses before running.
