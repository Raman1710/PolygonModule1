// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");
const tokenContractJSON = require("../artifacts/contracts/MetaToken.sol/MetaToken.json");
require('dotenv').config()

const tokenAddress = "0xE427F5160C05cE215d222f4bEda9502421B85a1D"; 
const tokenABI = tokenContractJSON.abi;
const walletAddress = "0xd5e38c7acBB12BD3f62c0dFb78057464bd0604ed"; 

async function main() {

    const token = await hre.ethers.getContractAt(tokenABI, tokenAddress);
    
    for(let i=0;i<5;i++){
      const tx = await token.mint(walletAddress);
      await tx.wait();
    }
   
    console.log("You now have: " + await token.balanceOf(walletAddress) + " tokens");
    const qrcd =await token.promptDescription()
    console.log("Your prompt is : "+qrcd);
  }
  
  // We recommend this pattern to be able to use async/await everywhere
  // and properly handle errors.
  main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });