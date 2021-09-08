//SPDX-License-Identifier:MIT
pragma solidity 0.8.7;

import "../LimitedToken.sol";

contract LimitedTokenForTest is LimitedToken {
  constructor(string memory name_, string memory symbol_)
    LimitedToken(name_, symbol_)
  {}

  function bypassedLock() public {
    lock();
  }
}
