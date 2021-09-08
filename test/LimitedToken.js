const LimitedToken = artifacts.require("LimitedTokenForTest");
const { expect } = require("chai");
const truffleAssert = require("truffle-assertions");

let instance;
const tokenName = "TestToken";
const tokenSymbol = "tokenSymbol";

contract("LimitedToken", (accounts) => {
  beforeEach(async () => {
    instance = await LimitedToken.new(tokenName, tokenSymbol);
  });

  describe("Lock method", () => {
    it("should be executed by contract owner", async () => {
      await truffleAssert.passes(instance.BypassedLock.sendTransaction());
    });

    it("should not be executed by non-owner users", async () => {
      await truffleAssert.reverts(
        instance.BypassedLock.sendTransaction({ from: accounts[1] })
      );
    });

    it("should set the limitation status true", async () => {
      expect(await instance.isLimited.call()).to.eq(false);
      await instance.BypassedLock.sendTransaction();
      expect(await instance.isLimited.call()).to.eq(true);
    });
  });

  describe("Unlock method", () => {
    it("should be executed by contract owner", async () => {
      await truffleAssert.passes(instance.Unlock.sendTransaction());
    });

    it("should not be executed by non-owner users", async () => {
      await truffleAssert.reverts(
        instance.Unlock.sendTransaction({ from: accounts[1] })
      );
    });

    it("should set the limitation status false", async () => {
      await instance.BypassedLock.sendTransaction();
      expect(await instance.isLimited.call()).to.eq(true);
      await instance.Unlock.sendTransaction();
      expect(await instance.isLimited.call()).to.eq(false);
    });
  });
});
