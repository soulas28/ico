//SPDX-License-Identifier:MIT
pragma solidity 0.8.7;

import "./LimitedToken.sol";
import "./Exclusive.sol";

contract ICO is LimitedToken, Exclusive {
  uint256 public deployedBlock;
  uint256 public periodBlock;

  uint256 private _numOfParticipants = 0;
  mapping(address => bool) participants;

  constructor(
    string memory name_,
    string memory symbol_,
    uint256 periodBlock_
  ) LimitedToken(name_, symbol_) {
    deployedBlock = block.number;
    periodBlock = periodBlock_;
  }

  function numOfParticipants() public view returns (uint256) {
    return _numOfParticipants;
  }

  function participate() public exclusive returns (bool) {
    require(
      (deployedBlock + periodBlock) >= block.number,
      "The period has already been ended."
    );
    require(msg.sender != owner(), "Owner cannot participate.");
    require(!participants[msg.sender], "You are already participated.");

    participants[msg.sender] = true;
    _numOfParticipants += 1;
    return true;
  }

  function participation(address account_) public view returns (bool) {
    return participants[account_];
  }
}
