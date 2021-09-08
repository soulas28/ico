//SPDX-License-Identifier:MIT
pragma solidity 0.8.7;

contract Exclusive {
  bool private _isLocked = false;

  modifier exclusive() {
    require(!_isLocked, "Temporaly Unavailable");
    _isLocked = true;
    _;
    _isLocked = false;
  }
}
