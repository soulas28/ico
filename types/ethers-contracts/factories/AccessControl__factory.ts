/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { AccessControl, AccessControlInterface } from "../AccessControl";

const _abi = [
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
];

const _bytecode =
  "0x6080604052336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555034801561005057600080fd5b5060fc8061005f6000396000f3fe6080604052348015600f57600080fd5b506004361060285760003560e01c80638da5cb5b14602d575b600080fd5b60336047565b604051603e9190607d565b60405180910390f35b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b6077816096565b82525050565b6000602082019050609060008301846070565b92915050565b6000609f8260a6565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff8216905091905056fea2646970667358221220e90b2a319f223ba6a903087e94d1dc4b9737b5f1cb21ae871830051c9c0717ee64736f6c63430008070033";

type AccessControlConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: AccessControlConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class AccessControl__factory extends ContractFactory {
  constructor(...args: AccessControlConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<AccessControl> {
    return super.deploy(overrides || {}) as Promise<AccessControl>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): AccessControl {
    return super.attach(address) as AccessControl;
  }
  connect(signer: Signer): AccessControl__factory {
    return super.connect(signer) as AccessControl__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): AccessControlInterface {
    return new utils.Interface(_abi) as AccessControlInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): AccessControl {
    return new Contract(address, _abi, signerOrProvider) as AccessControl;
  }
}
