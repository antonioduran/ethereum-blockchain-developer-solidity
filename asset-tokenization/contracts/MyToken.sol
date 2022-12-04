// contracts/MyToken.sol
// SPDX-License-Identifier: MIT
//pragma solidity ^0.8.0;
pragma solidity >=0.4.22 <0.9.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";


contract MyToken is ERC20 {
    constructor(uint256 initialSupply) ERC20("StarDucks Cappucino Token", "CAPPU") {
        _mint(msg.sender, initialSupply);
    }
}