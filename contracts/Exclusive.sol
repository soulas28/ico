//SPDX-License-Identifier:MIT
pragma solidity 0.8.7;

contract Exclusive {
  bool private isLocked = false;

  modifier exclusive() {
    isLocked = true;
    _;
    isLocked = false;
  }
}
