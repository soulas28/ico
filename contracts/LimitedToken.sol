//SPDX-License-Identifier: MIT
pragma solidity 0.8.7;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "./AccessControl.sol";

contract LimitedToken is ERC20, AccessControl {
  bool public isLimited = true;

  constructor(string memory name_, string memory symbol_)
    ERC20(name_, symbol_)
  {}

  function Lock() internal onlyOwner {
    isLimited = true;
  }

  function Unlock() public onlyOwner {
    isLimited = false;
  }
}
