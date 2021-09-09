//SPDX-License-Identifier:MIT
pragma solidity 0.8.7;

import "./LimitedToken.sol";
import "./Exclusive.sol";

contract ICO is LimitedToken, Exclusive {
  uint256 public deployedBlock;
  uint256 public periodBlock;
  uint256 public unitPeriodBalance;
  uint256 public numOfPeriods;
  uint256 public rate; // 100:n

  mapping(uint256 => uint256) private _numOfParticipants;
  mapping(uint256 => mapping(address => uint256)) private _participants;
  uint256 currentPeriod = 0;

  mapping(address => uint256) private _withdrawal;

  constructor(
    string memory name_,
    string memory symbol_,
    uint256 periodBlock_,
    uint256 numOfPeriods_,
    uint256 unitPeriodBalance_,
    uint256 rate_
  ) LimitedToken(name_, symbol_) {
    deployedBlock = block.number;
    periodBlock = periodBlock_;
    unitPeriodBalance = unitPeriodBalance_;
    rate = rate_;
    numOfPeriods = numOfPeriods_;
    _mint(address(this), unitPeriodBalance * numOfPeriods);
  }

  function numOfParticipants(uint256 period_) public view returns (uint256) {
    return _numOfParticipants[period_];
  }

  function participate() public payable exclusive returns (bool) {
    require(
      !hasPeriodEnded(numOfPeriods - 1),
      "All periods have already been ended."
    );
    require(msg.sender != owner(), "Owner cannot participate.");
    require(
      _participants[getCurrentPeriod()][msg.sender] == 0,
      "You are already participated."
    );

    _participants[getCurrentPeriod()][msg.sender] = ETHtoToken(msg.value);
    _numOfParticipants[getCurrentPeriod()] += 1;
    return true;
  }

  function participation(address account_, uint256 period_)
    public
    view
    returns (uint256)
  {
    return _participants[period_][account_];
  }

  function purchase() public payable exclusive returns (bool) {
    require(hasPeriodEnded(numOfPeriods - 1), "Final sale not started yet.");
    require(msg.sender != owner(), "Owner cannot purchase.");
    require(!hasSaleEnded(), "Final sale finished.");

    this.transfer(msg.sender, ETHtoToken(msg.value));
    return true;
  }

  function ETHtoToken(uint256 eth_) public view returns (uint256) {
    return (eth_ * rate) / 100;
  }

  function TokenToETH(uint256 token_) public view returns (uint256) {
    return (token_ * 100) / rate;
  }

  function withdrawToken(uint256 period_) public exclusive returns (bool) {
    require(hasPeriodEnded(period_), "The period is still ongoing.");
    require(
      _participants[period_][msg.sender] != 0,
      "There's no tokens to withdraw."
    );

    uint256 window = unitPeriodBalance / numOfParticipants(period_);
    if (_participants[period_][msg.sender] >= window) {
      this.transfer(msg.sender, window);
      _withdrawal[msg.sender] = TokenToETH(
        _participants[period_][msg.sender] - window
      );
    } else {
      this.transfer(msg.sender, _participants[period_][msg.sender]);
    }
    _participants[period_][msg.sender] = 0;
    return true;
  }

  function withdrawETH() public exclusive returns (bool) {
    require(_withdrawal[msg.sender] != 0, "There's no ethers to withdraw.");
    payable(msg.sender).transfer(_withdrawal[msg.sender]);
    _withdrawal[msg.sender] = 0;
    return true;
  }

  function getCurrentPeriod() public view returns (uint256) {
    return (block.number - deployedBlock) / 10;
  }

  function hasPeriodEnded(uint256 period_) public view returns (bool) {
    return getCurrentPeriod() > period_;
  }

  function hasSaleEnded() public view returns (bool) {
    return hasPeriodEnded(numOfPeriods);
  }
}
