//SPDX-License-Identifier: MIT
pragma solidity 0.8.7;

contract AccessControl {
  address private _owner = msg.sender;

  modifier onlyOwner() {
    require(msg.sender == _owner, "Permission Denied");
    _;
  }

  function owner() public view returns (address) {
    return _owner;
  }
}
