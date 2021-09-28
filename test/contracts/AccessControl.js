const AccessControl = artifacts.require('AccessControl')
const { expect } = require('chai')
const truffleAssert = require('truffle-assertions')

let instance

contract('AccessControl', (accounts) => {
  beforeEach(async () => {
    instance = await AccessControl.new()
  })
  it("owner should hold the contract owner's address", async () => {
    expect((await instance.owner.call()).toString()).to.eq(accounts[0])
  })
})
