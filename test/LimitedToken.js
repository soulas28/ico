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
      await truffleAssert.passes(instance.bypassedLock.sendTransaction());
    });

    it("should not be executed by non-owner users", async () => {
      await truffleAssert.reverts(
        instance.bypassedLock.sendTransaction({ from: accounts[1] })
      );
    });

    it("should set the limitation status true", async () => {
      expect(await instance.isLimited.call()).to.eq(false);
      await instance.bypassedLock.sendTransaction();
      expect(await instance.isLimited.call()).to.eq(true);
    });
  });

  describe("Unlock method", () => {
    it("should be executed by contract owner", async () => {
      await truffleAssert.passes(instance.unlock.sendTransaction());
    });

    it("should not be executed by non-owner users", async () => {
      await truffleAssert.reverts(
        instance.unlock.sendTransaction({ from: accounts[1] })
      );
    });

    it("should set the limitation status false", async () => {
      await instance.bypassedLock.sendTransaction();
      expect(await instance.isLimited.call()).to.eq(true);
      await instance.unlock.sendTransaction();
      expect(await instance.isLimited.call()).to.eq(false);
    });

    it("should emit Unlocked event", async () => {
      truffleAssert.eventEmitted(
        await instance.unlock.sendTransaction(),
        "Unlocked"
      );
    });
  });

  describe("transfer method", () => {
    it("should be fail if locked", async () => {
      await instance.bypassedLock.sendTransaction();
      await truffleAssert.reverts(
        instance.transfer.sendTransaction(accounts[1], 0),
        "Transfer not allowed."
      );
    });

    it("should be success if not locked", async () => {
      await truffleAssert.passes(
        instance.transfer.sendTransaction(accounts[1], 0)
      );
    });
  });
});
