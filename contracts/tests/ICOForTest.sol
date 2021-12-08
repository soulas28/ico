//SPDX-License-Identifier:MIT
pragma solidity 0.8.7;

import '../ICO.sol';

contract ICOForTest is ICO {
  constructor(
    string memory name_,
    string memory symbol_,
    uint256 periodBlock_,
    uint256 numOfPeriods_,
    uint256 unitPeriodBalance_,
    uint256 rate_,
    uint256 tokensForOwner_,
    uint256 withdrawLimit_
  )
    ICO(
      name_,
      symbol_,
      periodBlock_,
      numOfPeriods_,
      unitPeriodBalance_,
      rate_,
      tokensForOwner_,
      withdrawLimit_
    )
  {
    unlock();
  }

  function bypassedLock() public {
    lock();
  }
}
