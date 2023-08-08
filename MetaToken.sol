// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";


contract MetaToken is ERC721, Ownable {
    uint256 private IDs=0;
    constructor() ERC721("MetaToken", "MTA") {}
     string uri = "https://gateway.pinata.cloud/ipfs/QmTgzckgWzbN1LuioUBNR9KXJD97WacuTjxqusdfVt7DAa";

    string prompt = "a fortune-telling shiba inu reading your fate in a giant hamburger, digital art";

    function mint(address to) public onlyOwner returns(uint256) {
        for(uint i =0;i<5;i++){
            IDs++;
        uint256 _IDs = IDs;
        _safeMint(to,_IDs);
        return _IDs;
        }
        
    }

    function decimals() public pure  returns (uint8) {
		return 0;
	}
    
    function promptDescription() external view returns (string memory) {
        return prompt;
    }
}