//SPDX-License-Identifier:MIT
pragma solidity 0.8.7;

import "../Exclusive.sol";

contract ExclusiveForTest is Exclusive {
  function reentrance() public exclusive {
    this.reentrance();
  }
}
