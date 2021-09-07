//SPDX-License-Identifier: MIT
pragma solidity 0.8.7;

contract AccessControl {
  address private owner = msg.sender;

  modifier onlyOwner() {
    require(msg.sender == owner, "Permission Denied");
    _;
  }
}
