const ICO = artifacts.require("ICO");

const name = process.env.TOKEN_NAME || "";
const symbol = process.env.SYMBOL || "";
const periodBlock = process.env.PERIOD_BLOCK || "";
const numPeriods = process.env.NUM_PERIODS || "";
const unitPeriodBalance = process.env.UNIT_PERIOD_BALANCE || "";
const rate = process.env.RATE || "";
const tokensForOwner = process.env.TOKENS_FOR_OWNER || "";
const withdrawLimit = process.env.WITHDRAW_LIMIT || "";

module.exports = function (deployer) {
  deployer.deploy(
    ICO,
    name,
    symbol,
    periodBlock,
    numPeriods,
    unitPeriodBalance,
    rate,
    tokensForOwner,
    withdrawLimit
  );
};
