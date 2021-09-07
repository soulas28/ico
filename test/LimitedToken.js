const LimitedToken = artifacts.require("LimitedToken");
const { expect } = require("chai");
const truffleAssert = require("truffle-assertions");

let instance;
const tokenName = "TestToken";
const tokenSymbol = "tokenSymbol";

contract("LimitedToken", (accounts) => {
  beforeEach(async () => {
    instance = await LimitedToken.new(tokenName, tokenSymbol);
  });
  it("inherit from ERC20 implement.", async () => {
    expect(await instance.name.call()).to.eq(tokenName);
    expect(await instance.symbol.call()).to.eq(tokenSymbol);
  });
});
