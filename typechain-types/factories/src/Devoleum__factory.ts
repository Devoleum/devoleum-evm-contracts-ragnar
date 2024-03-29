/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type { Devoleum, DevoleumInterface } from "../../src/Devoleum";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_prev_sc",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bytes32",
        name: "_hashOfJson",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_createdAt",
        type: "uint256",
      },
    ],
    name: "StepProofCreated",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "allowed",
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
    inputs: [
      {
        internalType: "bytes32",
        name: "_hashOfJson",
        type: "bytes32",
      },
    ],
    name: "createStepProof",
    outputs: [
      {
        internalType: "uint256",
        name: "_createdAt",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    name: "hashToDate",
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
    name: "prev_sc",
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
    name: "selfDisableAllowed",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_address",
        type: "address",
      },
    ],
    name: "toggleAllowed",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506040516104e93803806104e983398101604081905261002f91610062565b60008054336001600160a01b031991821617909155600180549091166001600160a01b0392909216919091179055610092565b60006020828403121561007457600080fd5b81516001600160a01b038116811461008b57600080fd5b9392505050565b610448806100a16000396000f3fe608060405234801561001057600080fd5b50600436106100885760003560e01c8063a153f1e21161005b578063a153f1e214610113578063bedeaeb714610126578063d63a8e111461012e578063f2fde38b1461016157600080fd5b80635a4084cd1461008d5780638da5cb5b146100c057806393db67a5146100eb578063978ee3a614610100575b600080fd5b6100ad61009b3660046103c9565b60026020526000908152604090205481565b6040519081526020015b60405180910390f35b6000546100d3906001600160a01b031681565b6040516001600160a01b0390911681526020016100b7565b6100fe6100f93660046103e2565b610174565b005b6100ad61010e3660046103c9565b6101e9565b6001546100d3906001600160a01b031681565b6100fe6102f9565b61015161013c3660046103e2565b60036020526000908152604090205460ff1681565b60405190151581526020016100b7565b6100fe61016f3660046103e2565b610360565b6000546001600160a01b031633146101c05760405162461bcd60e51b815260206004820152600a60248201526927b7363c9037bbb732b960b11b60448201526064015b60405180910390fd5b6001600160a01b03166000908152600360205260409020805460ff19811660ff90911615179055565b3360009081526003602052604081205460ff168061021157506000546001600160a01b031633145b61024c5760405162461bcd60e51b815260206004820152600c60248201526b13db9b1e48185b1b1bddd95960a21b60448201526064016101b7565b6000828152600260205260409020548290156102965760405162461bcd60e51b81526020600482015260096024820152686475706c696361746560b81b60448201526064016101b7565b60008381526002602090815260409182902042908190558251868152918201819052917f3c2d8735e493f7014ca90c4af14df8dd5e895d6aebf1c644a6b141ab9042b453910160405180910390a150505060009081526002602052604090205490565b3360009081526003602052604090205460ff166103475760405162461bcd60e51b815260206004820152600c60248201526b13db9b1e48185b1b1bddd95960a21b60448201526064016101b7565b336000908152600360205260409020805460ff19169055565b6000546001600160a01b031633146103a75760405162461bcd60e51b815260206004820152600a60248201526927b7363c9037bbb732b960b11b60448201526064016101b7565b600080546001600160a01b0319166001600160a01b0392909216919091179055565b6000602082840312156103db57600080fd5b5035919050565b6000602082840312156103f457600080fd5b81356001600160a01b038116811461040b57600080fd5b939250505056fea2646970667358221220fc8a3754013644513280098929a4b068113826fc5d8385d137bbba162245220264736f6c634300080f0033";

type DevoleumConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: DevoleumConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Devoleum__factory extends ContractFactory {
  constructor(...args: DevoleumConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _prev_sc: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<Devoleum> {
    return super.deploy(_prev_sc, overrides || {}) as Promise<Devoleum>;
  }
  override getDeployTransaction(
    _prev_sc: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_prev_sc, overrides || {});
  }
  override attach(address: string): Devoleum {
    return super.attach(address) as Devoleum;
  }
  override connect(signer: Signer): Devoleum__factory {
    return super.connect(signer) as Devoleum__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): DevoleumInterface {
    return new utils.Interface(_abi) as DevoleumInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Devoleum {
    return new Contract(address, _abi, signerOrProvider) as Devoleum;
  }
}
