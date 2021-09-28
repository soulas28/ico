const Exclusive = artifacts.require('ExclusiveForTest')
const { expect } = require('chai')
const truffleAssert = require('truffle-assertions')

let instance

contract('Exclusive', (accounts) => {
  beforeEach(async () => {
    instance = await Exclusive.new()
  })
  it('reentrance is not allowed', async () => {
    await truffleAssert.reverts(
      instance.reentrance.sendTransaction(),
      'Temporally Unavailable'
    )
  })
})
