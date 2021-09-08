//SPDX-License-Identifier: MIT
pragma solidity 0.8.7;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "./AccessControl.sol";

contract LimitedToken is ERC20, AccessControl {
  bool private _isLimited = false;

  event Unlocked();

  constructor(string memory name_, string memory symbol_)
    ERC20(name_, symbol_)
  {}

  function isLimited() public view returns (bool) {
    return _isLimited;
  }

  function lock() internal onlyOwner {
    _isLimited = true;
  }

  function unlock() public onlyOwner {
    _isLimited = false;
    emit Unlocked();
  }

  function _beforeTokenTransfer(
    address,
    address,
    uint256
  ) internal view override {
    require(!isLimited(), "Transfer not allowed.");
  }
}
