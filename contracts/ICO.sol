//SPDX-License-Identifier:MIT
pragma solidity 0.8.7;

import "./LimitedToken.sol";
import "./Exclusive.sol";

contract ICO is LimitedToken, Exclusive {
  uint256 public deployedBlock;
  uint256 public periodBlock;
  uint256 public unitPeriodBalance;
  uint256 public rate; // 100:n

  uint256 private _numOfParticipants = 0;
  mapping(address => uint256) private _participants;
  uint256 currentPeriod = 0;

  mapping(address => uint256) private _withdrawal;

  constructor(
    string memory name_,
    string memory symbol_,
    uint256 periodBlock_,
    uint256 unitPeriodBalance_,
    uint256 rate_
  ) LimitedToken(name_, symbol_) {
    deployedBlock = block.number;
    periodBlock = periodBlock_;
    unitPeriodBalance = unitPeriodBalance_;
    rate = rate_;
    _mint(address(this), unitPeriodBalance);
  }

  function numOfParticipants() public view returns (uint256) {
    return _numOfParticipants;
  }

  function participate() public payable exclusive returns (bool) {
    require(!hasEnded(), "The period has already been ended.");
    require(msg.sender != owner(), "Owner cannot participate.");
    require(_participants[msg.sender] == 0, "You are already participated.");

    _participants[msg.sender] = ETHtoToken(msg.value);
    _numOfParticipants += 1;
    return true;
  }

  function participation(address account_) public view returns (uint256) {
    return _participants[account_];
  }

  function purchase() public payable returns (bool) {
    require(hasEnded(), "Last sale not started yet.");
    require(msg.sender != owner(), "Owner cannot purchase.");

    this.transfer(msg.sender, ETHtoToken(msg.value));
    return true;
  }

  function ETHtoToken(uint256 eth_) public view returns (uint256) {
    return (eth_ * rate) / 100;
  }

  function TokenToETH(uint256 token_) public view returns (uint256) {
    return (token_ * 100) / rate;
  }

  function withdrawToken() public exclusive returns (bool) {
    require(hasEnded(), "The period is still ongoing.");
    require(_participants[msg.sender] != 0, "There's no tokens to withdraw.");

    uint256 window = unitPeriodBalance / numOfParticipants();
    if (_participants[msg.sender] >= window) {
      this.transfer(msg.sender, window);
      _withdrawal[msg.sender] = TokenToETH(_participants[msg.sender] - window);
    } else {
      this.transfer(msg.sender, _participants[msg.sender]);
    }
    _participants[msg.sender] = 0;
    return true;
  }

  function withdrawETH() public exclusive returns (bool) {
    require(_withdrawal[msg.sender] != 0, "There's no ethers to withdraw.");
    payable(msg.sender).transfer(_withdrawal[msg.sender]);
    _withdrawal[msg.sender] = 0;
    return true;
  }

  function hasEnded() public view returns (bool) {
    return (deployedBlock + periodBlock) < block.number;
  }
}
