/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  LimitedTokenForTest,
  LimitedTokenForTestInterface,
} from "../LimitedTokenForTest";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "name_",
        type: "string",
      },
      {
        internalType: "string",
        name: "symbol_",
        type: "string",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [],
    name: "Unlocked",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "isLimited",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "unlock",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "bypassedLock",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405233600560006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506000600560146101000a81548160ff0219169083151502179055503480156200006d57600080fd5b5060405162001bb338038062001bb3833981810160405281019062000093919062000203565b818181818160039080519060200190620000af929190620000d5565b508060049080519060200190620000c8929190620000d5565b505050505050506200040c565b828054620000e3906200031d565b90600052602060002090601f01602090048101928262000107576000855562000153565b82601f106200012257805160ff191683800117855562000153565b8280016001018555821562000153579182015b828111156200015257825182559160200191906001019062000135565b5b50905062000162919062000166565b5090565b5b808211156200018157600081600090555060010162000167565b5090565b60006200019c6200019684620002b1565b62000288565b905082815260208101848484011115620001bb57620001ba620003ec565b5b620001c8848285620002e7565b509392505050565b600082601f830112620001e857620001e7620003e7565b5b8151620001fa84826020860162000185565b91505092915050565b600080604083850312156200021d576200021c620003f6565b5b600083015167ffffffffffffffff8111156200023e576200023d620003f1565b5b6200024c85828601620001d0565b925050602083015167ffffffffffffffff81111562000270576200026f620003f1565b5b6200027e85828601620001d0565b9150509250929050565b600062000294620002a7565b9050620002a2828262000353565b919050565b6000604051905090565b600067ffffffffffffffff821115620002cf57620002ce620003b8565b5b620002da82620003fb565b9050602081019050919050565b60005b8381101562000307578082015181840152602081019050620002ea565b8381111562000317576000848401525b50505050565b600060028204905060018216806200033657607f821691505b602082108114156200034d576200034c62000389565b5b50919050565b6200035e82620003fb565b810181811067ffffffffffffffff8211171562000380576200037f620003b8565b5b80604052505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b611797806200041c6000396000f3fe608060405234801561001057600080fd5b50600436106100f55760003560e01c80638da5cb5b11610097578063a69df4b511610066578063a69df4b51461028a578063a9059cbb14610294578063db5671fb146102c4578063dd62ed3e146102e2576100f5565b80638da5cb5b1461021457806395d89b41146102325780639a315abc14610250578063a457c2d71461025a576100f5565b806323b872dd116100d357806323b872dd14610166578063313ce5671461019657806339509351146101b457806370a08231146101e4576100f5565b806306fdde03146100fa578063095ea7b31461011857806318160ddd14610148575b600080fd5b610102610312565b60405161010f91906111a0565b60405180910390f35b610132600480360381019061012d9190610f7a565b6103a4565b60405161013f9190611185565b60405180910390f35b6101506103c2565b60405161015d91906112e2565b60405180910390f35b610180600480360381019061017b9190610f27565b6103cc565b60405161018d9190611185565b60405180910390f35b61019e6104c4565b6040516101ab91906112fd565b60405180910390f35b6101ce60048036038101906101c99190610f7a565b6104cd565b6040516101db9190611185565b60405180910390f35b6101fe60048036038101906101f99190610eba565b610579565b60405161020b91906112e2565b60405180910390f35b61021c6105c1565b604051610229919061116a565b60405180910390f35b61023a6105eb565b60405161024791906111a0565b60405180910390f35b61025861067d565b005b610274600480360381019061026f9190610f7a565b610687565b6040516102819190611185565b60405180910390f35b610292610772565b005b6102ae60048036038101906102a99190610f7a565b61084b565b6040516102bb9190611185565b60405180910390f35b6102cc610869565b6040516102d99190611185565b60405180910390f35b6102fc60048036038101906102f79190610ee7565b610880565b60405161030991906112e2565b60405180910390f35b60606003805461032190611412565b80601f016020809104026020016040519081016040528092919081815260200182805461034d90611412565b801561039a5780601f1061036f5761010080835404028352916020019161039a565b820191906000526020600020905b81548152906001019060200180831161037d57829003601f168201915b5050505050905090565b60006103b86103b1610907565b848461090f565b6001905092915050565b6000600254905090565b60006103d9848484610ada565b6000600160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000610424610907565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050828110156104a4576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161049b90611262565b60405180910390fd5b6104b8856104b0610907565b85840361090f565b60019150509392505050565b60006012905090565b600061056f6104da610907565b8484600160006104e8610907565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461056a9190611334565b61090f565b6001905092915050565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b6000600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b6060600480546105fa90611412565b80601f016020809104026020016040519081016040528092919081815260200182805461062690611412565b80156106735780601f1061064857610100808354040283529160200191610673565b820191906000526020600020905b81548152906001019060200180831161065657829003601f168201915b5050505050905090565b610685610d5b565b565b60008060016000610696610907565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905082811015610753576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161074a906112c2565b60405180910390fd5b61076761075e610907565b8585840361090f565b600191505092915050565b600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610802576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107f990611222565b60405180910390fd5b6000600560146101000a81548160ff0219169083151502179055507f19aad37188a1d3921e29eb3c66acf43d81975e107cb650d58cca878627955fd660405160405180910390a1565b600061085f610858610907565b8484610ada565b6001905092915050565b6000600560149054906101000a900460ff16905090565b6000600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b600033905090565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16141561097f576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610976906112a2565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614156109ef576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016109e6906111e2565b60405180910390fd5b80600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92583604051610acd91906112e2565b60405180910390a3505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610b4a576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b4190611282565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610bba576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610bb1906111c2565b60405180910390fd5b610bc5838383610e08565b60008060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905081811015610c4b576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c4290611202565b60405180910390fd5b8181036000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550816000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610cde9190611334565b925050819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef84604051610d4291906112e2565b60405180910390a3610d55848484610e8b565b50505050565b600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610deb576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610de290611222565b60405180910390fd5b6001600560146101000a81548160ff021916908315150217905550565b3073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161480610e475750610e45610869565b155b610e86576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e7d90611242565b60405180910390fd5b505050565b505050565b600081359050610e9f81611733565b92915050565b600081359050610eb48161174a565b92915050565b600060208284031215610ed057610ecf6114a2565b5b6000610ede84828501610e90565b91505092915050565b60008060408385031215610efe57610efd6114a2565b5b6000610f0c85828601610e90565b9250506020610f1d85828601610e90565b9150509250929050565b600080600060608486031215610f4057610f3f6114a2565b5b6000610f4e86828701610e90565b9350506020610f5f86828701610e90565b9250506040610f7086828701610ea5565b9150509250925092565b60008060408385031215610f9157610f906114a2565b5b6000610f9f85828601610e90565b9250506020610fb085828601610ea5565b9150509250929050565b610fc38161138a565b82525050565b610fd28161139c565b82525050565b6000610fe382611318565b610fed8185611323565b9350610ffd8185602086016113df565b611006816114a7565b840191505092915050565b600061101e602383611323565b9150611029826114b8565b604082019050919050565b6000611041602283611323565b915061104c82611507565b604082019050919050565b6000611064602683611323565b915061106f82611556565b604082019050919050565b6000611087601183611323565b9150611092826115a5565b602082019050919050565b60006110aa601583611323565b91506110b5826115ce565b602082019050919050565b60006110cd602883611323565b91506110d8826115f7565b604082019050919050565b60006110f0602583611323565b91506110fb82611646565b604082019050919050565b6000611113602483611323565b915061111e82611695565b604082019050919050565b6000611136602583611323565b9150611141826116e4565b604082019050919050565b611155816113c8565b82525050565b611164816113d2565b82525050565b600060208201905061117f6000830184610fba565b92915050565b600060208201905061119a6000830184610fc9565b92915050565b600060208201905081810360008301526111ba8184610fd8565b905092915050565b600060208201905081810360008301526111db81611011565b9050919050565b600060208201905081810360008301526111fb81611034565b9050919050565b6000602082019050818103600083015261121b81611057565b9050919050565b6000602082019050818103600083015261123b8161107a565b9050919050565b6000602082019050818103600083015261125b8161109d565b9050919050565b6000602082019050818103600083015261127b816110c0565b9050919050565b6000602082019050818103600083015261129b816110e3565b9050919050565b600060208201905081810360008301526112bb81611106565b9050919050565b600060208201905081810360008301526112db81611129565b9050919050565b60006020820190506112f7600083018461114c565b92915050565b6000602082019050611312600083018461115b565b92915050565b600081519050919050565b600082825260208201905092915050565b600061133f826113c8565b915061134a836113c8565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0382111561137f5761137e611444565b5b828201905092915050565b6000611395826113a8565b9050919050565b60008115159050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b600060ff82169050919050565b60005b838110156113fd5780820151818401526020810190506113e2565b8381111561140c576000848401525b50505050565b6000600282049050600182168061142a57607f821691505b6020821081141561143e5761143d611473565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600080fd5b6000601f19601f8301169050919050565b7f45524332303a207472616e7366657220746f20746865207a65726f206164647260008201527f6573730000000000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a20617070726f766520746f20746865207a65726f20616464726560008201527f7373000000000000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a207472616e7366657220616d6f756e742065786365656473206260008201527f616c616e63650000000000000000000000000000000000000000000000000000602082015250565b7f5065726d697373696f6e2044656e696564000000000000000000000000000000600082015250565b7f5472616e73666572206e6f7420616c6c6f7765642e0000000000000000000000600082015250565b7f45524332303a207472616e7366657220616d6f756e742065786365656473206160008201527f6c6c6f77616e6365000000000000000000000000000000000000000000000000602082015250565b7f45524332303a207472616e736665722066726f6d20746865207a65726f20616460008201527f6472657373000000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a20617070726f76652066726f6d20746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f7760008201527f207a65726f000000000000000000000000000000000000000000000000000000602082015250565b61173c8161138a565b811461174757600080fd5b50565b611753816113c8565b811461175e57600080fd5b5056fea2646970667358221220a7df44ef5c04c738d8c74cda9e835c75f6b4d0fac27f2058bc48047c87f0d28164736f6c63430008070033";

type LimitedTokenForTestConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: LimitedTokenForTestConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class LimitedTokenForTest__factory extends ContractFactory {
  constructor(...args: LimitedTokenForTestConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    name_: string,
    symbol_: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<LimitedTokenForTest> {
    return super.deploy(
      name_,
      symbol_,
      overrides || {}
    ) as Promise<LimitedTokenForTest>;
  }
  getDeployTransaction(
    name_: string,
    symbol_: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(name_, symbol_, overrides || {});
  }
  attach(address: string): LimitedTokenForTest {
    return super.attach(address) as LimitedTokenForTest;
  }
  connect(signer: Signer): LimitedTokenForTest__factory {
    return super.connect(signer) as LimitedTokenForTest__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): LimitedTokenForTestInterface {
    return new utils.Interface(_abi) as LimitedTokenForTestInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): LimitedTokenForTest {
    return new Contract(address, _abi, signerOrProvider) as LimitedTokenForTest;
  }
}