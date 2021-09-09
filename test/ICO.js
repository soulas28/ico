const ICO = artifacts.require("ICO");
const { expect } = require("chai");
const truffleAssert = require("truffle-assertions");

let instance;

function mineBlock(number) {
  for (let i = 0; i < number; i++) {
    web3.currentProvider.send(
      {
        jsonrpc: "2.0",
        method: "evm_mine",
        params: [],
        id: 0,
      },
      () => {}
    );
  }
}

contract("ICO", (accounts) => {
  beforeEach(async () => {
    instance = await ICO.new("TestToken", "TST", 10);
  });

  describe("numOfParticipants", () => {
    it("should be 0 when no one participated.", async () => {
      expect((await instance.numOfParticipants.call()).toString()).to.eq("0");
    });
  });

  describe("participate", () => {
    describe("should be fail", () => {
      it("if owner try to participate", async () => {
        await truffleAssert.reverts(
          instance.participate.sendTransaction(),
          "Owner cannot participate."
        );
      });

      it("if same user try to participate multiply.", async () => {
        await instance.participate.sendTransaction({ from: accounts[1] });
        await truffleAssert.reverts(
          instance.participate.sendTransaction({ from: accounts[1] }),
          "You are already participated."
        );
      });

      it("if period time window passed", async () => {
        mineBlock(10);
        await truffleAssert.reverts(
          instance.participate.sendTransaction({ from: accounts[1] }),
          "The period has already been ended."
        );
      });
    });

    describe("should put the participants in list", () => {
      it("when the caller is accounts[1]", async () => {
        instance.participate.sendTransaction({ from: accounts[1] });
        expect(await instance.participation.call(accounts[1])).to.be.true;
        expect(await instance.participation.call(accounts[2])).to.be.false;
      });

      it("when the caller is accounts[2]", async () => {
        expect(await instance.participation.call(accounts[1])).to.be.false;
        instance.participate.sendTransaction({ from: accounts[2] });
        expect(await instance.participation.call(accounts[2])).to.be.true;
      });
    });

    describe("should set the value of numOfParticipants", () => {
      it("1 after once executed", async () => {
        await instance.participate.sendTransaction({ from: accounts[1] });
        expect((await instance.numOfParticipants.call()).toString()).to.eq("1");
      });

      it("2 after twice executed", async () => {
        await instance.participate.sendTransaction({ from: accounts[1] });
        await instance.participate.sendTransaction({ from: accounts[2] });
        expect((await instance.numOfParticipants.call()).toString()).to.eq("2");
      });
    });
  });
});
