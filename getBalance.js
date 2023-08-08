const hre = require("hardhat");
const tokenContractJSON = require("../artifacts/contracts/MetaToken.sol/MetaToken.json");

const tokenAddress = "0x91724e71E84175Bc9025D2e1A4D7E31853868b5b"; 
const tokenABI = tokenContractJSON.abi;
const walletAddress = "0xd5e38c7acBB12BD3f62c0dFb78057464bd0604ed"; 

async function main() {

    const token = await hre.ethers.getContractAt(tokenABI, tokenAddress);

    console.log("You now have: " + await token.balanceOf(walletAddress) + " tokens");
  }
  
  
  main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });