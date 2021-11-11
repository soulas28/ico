//SPDX-License-Identifier:MIT
pragma solidity 0.8.7;

import './LimitedToken.sol';
import './Exclusive.sol';

contract ICO is LimitedToken, Exclusive {
  uint256 public deployedBlock;
  uint256 public periodBlock;
  uint256 public unitPeriodBalance;
  uint256 public numOfPeriods;
  uint256 public rate; // 100:n
  uint256 public withdrawLimit;

  mapping(uint256 => uint256) private _numOfParticipants;
  mapping(uint256 => mapping(address => uint256)) private _participants;

  mapping(address => uint256) withdrawal;

  constructor(
    string memory name_,
    string memory symbol_,
    uint256 periodBlock_,
    uint256 numOfPeriods_,
    uint256 unitPeriodBalance_,
    uint256 rate_,
    uint256 tokensForOwner_,
    uint256 withdrawLimit_
  ) LimitedToken(name_, symbol_) {
    deployedBlock = block.number;
    periodBlock = periodBlock_;
    unitPeriodBalance = unitPeriodBalance_;
    rate = rate_;
    numOfPeriods = numOfPeriods_;
    withdrawLimit = withdrawLimit_;
    _mint(address(this), unitPeriodBalance * numOfPeriods);
    _mint(owner(), tokensForOwner_);
    lock();
  }

  function numOfParticipants(uint256 period_) public view returns (uint256) {
    return _numOfParticipants[period_];
  }

  function participation(address account_, uint256 period_)
    public
    view
    returns (uint256)
  {
    return _participants[period_][account_];
  }

  function ETHToToken(uint256 eth_) public view returns (uint256) {
    return (eth_ * rate) / 100;
  }

  function TokenToETH(uint256 token_) public view returns (uint256) {
    return (token_ * 100) / rate;
  }

  function getCurrentPeriod() public view returns (uint256) {
    return (block.number - deployedBlock) / periodBlock;
  }

  function hasPeriodEnded(uint256 period_) public view returns (bool) {
    return getCurrentPeriod() > period_;
  }

  function hasSaleEnded() public view returns (bool) {
    return hasPeriodEnded(numOfPeriods);
  }

  function hasWithdrawalTimeEnded() public view returns (bool) {
    return block.number > (deployedBlock + periodBlock * (numOfPeriods + 1));
  }

  function participate() public payable exclusive returns (bool) {
    require(
      !hasPeriodEnded(numOfPeriods - 1),
      'All periods have already been ended.'
    );
    require(msg.sender != owner(), 'Owner cannot participate.');
    require(
      _participants[getCurrentPeriod()][msg.sender] == 0,
      'You are already participated.'
    );

    _participants[getCurrentPeriod()][msg.sender] = ETHToToken(msg.value);
    _numOfParticipants[getCurrentPeriod()] += 1;
    return true;
  }

  function purchase() public payable exclusive returns (bool) {
    require(hasPeriodEnded(numOfPeriods - 1), 'Final sale not started yet.');
    require(msg.sender != owner(), 'Owner cannot purchase.');
    require(!hasSaleEnded(), 'Final sale finished.');

    this.transfer(msg.sender, ETHToToken(msg.value));
    return true;
  }

  function withdrawToken(uint256 period_) public exclusive returns (bool) {
    require(!hasWithdrawalTimeEnded(), 'Withdrawable time exceeded.');
    require(hasPeriodEnded(period_), 'The period is still ongoing.');
    require(
      _participants[period_][msg.sender] != 0,
      "There's no tokens to withdraw."
    );

    uint256 window = unitPeriodBalance / numOfParticipants(period_);
    if (_participants[period_][msg.sender] >= window) {
      this.transfer(msg.sender, window);
      withdrawal[msg.sender] += TokenToETH(
        _participants[period_][msg.sender] - window
      );
    } else {
      this.transfer(msg.sender, _participants[period_][msg.sender]);
    }
    _participants[period_][msg.sender] = 0;
    return true;
  }

  function withdrawETH() public exclusive returns (bool) {
    require(withdrawal[msg.sender] != 0, "There's no ethers to withdraw.");
    require(!hasWithdrawalTimeEnded(), 'Withdrawable time exceeded.');
    payable(msg.sender).transfer(withdrawal[msg.sender]);
    withdrawal[msg.sender] = 0;
    return true;
  }

  function withdrawRemainingToken() public exclusive onlyOwner returns (bool) {
    require(
      hasWithdrawalTimeEnded(),
      "There's remaining time to withdraw yet."
    );
    this.transfer(owner(), balanceOf(address(this)));
    return true;
  }

  function withdrawRemainingETH() public exclusive onlyOwner returns (bool) {
    require(
      hasWithdrawalTimeEnded(),
      "There's remaining time to withdraw yet."
    );
    payable(owner()).transfer(address(this).balance);
    return true;
  }
}
