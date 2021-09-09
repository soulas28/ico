//SPDX-License-Identifier:MIT
pragma solidity 0.8.7;

import "./LimitedToken.sol";
import "./Exclusive.sol";

contract ICO is LimitedToken, Exclusive {
  uint256 public deployedBlock;
  uint256 public periodBlock;
  uint256 public unitPeriodBalance;

  uint256 private _numOfParticipants = 0;
  mapping(address => uint256) private participants;

  constructor(
    string memory name_,
    string memory symbol_,
    uint256 periodBlock_,
    uint256 unitPeriodBalance_
  ) LimitedToken(name_, symbol_) {
    deployedBlock = block.number;
    periodBlock = periodBlock_;
    unitPeriodBalance = unitPeriodBalance_;
    _mint(address(this), unitPeriodBalance);
  }

  function numOfParticipants() public view returns (uint256) {
    return _numOfParticipants;
  }

  function participate() public payable exclusive returns (bool) {
    require(hasEnded(), "The period has already been ended.");
    require(msg.sender != owner(), "Owner cannot participate.");
    require(participants[msg.sender] == 0, "You are already participated.");

    participants[msg.sender] = msg.value;
    _numOfParticipants += 1;
    return true;
  }

  function participation(address account_) public view returns (uint256) {
    return participants[account_];
  }

  function withdrawToken() public exclusive returns (bool) {
    require(!hasEnded(), "The period is still ongoing.");
    require(participants[msg.sender] != 0, "There's no tokens to withdraw.");
    uint256 window = unitPeriodBalance / numOfParticipants();
    if (participants[msg.sender] >= window) {
      this.transfer(msg.sender, window);
    } else {
      this.transfer(msg.sender, participants[msg.sender]);
    }
    participants[msg.sender] = 0;
    return true;
  }

  function hasEnded() public view returns (bool) {
    return (deployedBlock + periodBlock) >= block.number;
  }
}
