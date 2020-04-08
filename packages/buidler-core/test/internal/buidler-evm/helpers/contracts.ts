export const EXAMPLE_READ_CONTRACT = {
  sourceCode: `pragma solidity 0.5.10;

contract Example {
    function blockNumber() public view returns(uint) {
        return block.number;
    }
    function blockTimestamp() public view returns(uint) {
        return now;
    }
}`,
  bytecode: {
    linkReferences: {},
    object:
      "608060405234801561001057600080fd5b5060b48061001f6000396000f3fe6080604052348015600f57600080fd5b506004361060325760003560e01c806357e871e7146037578063adb61832146053575b600080fd5b603d606f565b6040518082815260200191505060405180910390f35b60596077565b6040518082815260200191505060405180910390f35b600043905090565b60004290509056fea265627a7a7230582067cf509ba4c2899d7af194c53bec23be5750c2152ace2bcf9668f88dc0a01c4064736f6c634300050a0032",
    opcodes:
      "PUSH1 0x80 PUSH1 0x40 MSTORE CALLVALUE DUP1 ISZERO PUSH2 0x10 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH1 0xB4 DUP1 PUSH2 0x1F PUSH1 0x0 CODECOPY PUSH1 0x0 RETURN INVALID PUSH1 0x80 PUSH1 0x40 MSTORE CALLVALUE DUP1 ISZERO PUSH1 0xF JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH1 0x4 CALLDATASIZE LT PUSH1 0x32 JUMPI PUSH1 0x0 CALLDATALOAD PUSH1 0xE0 SHR DUP1 PUSH4 0x57E871E7 EQ PUSH1 0x37 JUMPI DUP1 PUSH4 0xADB61832 EQ PUSH1 0x53 JUMPI JUMPDEST PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH1 0x3D PUSH1 0x6F JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 DUP3 DUP2 MSTORE PUSH1 0x20 ADD SWAP2 POP POP PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST PUSH1 0x59 PUSH1 0x77 JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 DUP3 DUP2 MSTORE PUSH1 0x20 ADD SWAP2 POP POP PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST PUSH1 0x0 NUMBER SWAP1 POP SWAP1 JUMP JUMPDEST PUSH1 0x0 TIMESTAMP SWAP1 POP SWAP1 JUMP INVALID LOG2 PUSH6 0x627A7A723058 KECCAK256 PUSH8 0xCF509BA4C2899D7A CALL SWAP5 0xc5 EXTCODESIZE 0xec 0x23 0xbe JUMPI POP 0xc2 ISZERO 0x2a 0xce 0x2b 0xcf SWAP7 PUSH9 0xF88DC0A01C4064736F PUSH13 0x634300050A0032000000000000 ",
    sourceMap: "25:194:0:-;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;25:194:0;;;;;;;"
  },
  abi: [
    {
      constant: true,
      inputs: [],
      name: "blockNumber",
      outputs: [
        {
          name: "",
          type: "uint256"
        }
      ],
      payable: false,
      stateMutability: "view",
      type: "function"
    },
    {
      constant: true,
      inputs: [],
      name: "blockTimestamp",
      outputs: [
        {
          name: "",
          type: "uint256"
        }
      ],
      payable: false,
      stateMutability: "view",
      type: "function"
    }
  ],
  selectors: {
    blockNumber: "0x57e871e7",
    blockTimestamp: "0xadb61832"
  },
  topics: {}
};

export const EXAMPLE_CONTRACT = {
  sourceCode: `pragma solidity 0.5.10;

contract Example {
    event StateModified(uint256 indexed _oldI, uint256 _newI);
    
    
    uint256 public i = 0;
    uint8 public j = 1;
    bytes32 h = "1234567890123456789012345678901234567890123456789012345678901234";
    
    function modifiesState(uint256 _i) payable public {
        emit StateModified(i, _i);
        i = _i;
    }
    
}`,
  // Compiled with Remix.
  bytecode: {
    linkReferences: {},
    object:
      "60806040526000805560018060006101000a81548160ff021916908360ff1602179055507f123456789012345678901234567890123456789012345678901234567890123460001b60025534801561005657600080fd5b50610155806100666000396000f3fe6080604052600436106100345760003560e01c80631b334ecc14610039578063b582ec5f14610067578063e5aa3d5814610098575b600080fd5b6100656004803603602081101561004f57600080fd5b81019080803590602001909291905050506100c3565b005b34801561007357600080fd5b5061007c610107565b604051808260ff1660ff16815260200191505060405180910390f35b3480156100a457600080fd5b506100ad61011a565b6040518082815260200191505060405180910390f35b6000547f3359f789ea83a10b6e9605d460de1088ff290dd7b3c9a155c896d45cf495ed4d826040518082815260200191505060405180910390a28060008190555050565b600160009054906101000a900460ff1681565b6000548156fea265627a7a72305820951d38e524dcd5a927d384cf274e65b6e0ac9bae6a41e5e1a7f1275697b8f0b764736f6c634300050a0032",
    opcodes:
      "PUSH1 0x80 PUSH1 0x40 MSTORE PUSH1 0x0 DUP1 SSTORE PUSH1 0x1 DUP1 PUSH1 0x0 PUSH2 0x100 EXP DUP2 SLOAD DUP2 PUSH1 0xFF MUL NOT AND SWAP1 DUP4 PUSH1 0xFF AND MUL OR SWAP1 SSTORE POP PUSH32 0x1234567890123456789012345678901234567890123456789012345678901234 PUSH1 0x0 SHL PUSH1 0x2 SSTORE CALLVALUE DUP1 ISZERO PUSH2 0x56 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0x155 DUP1 PUSH2 0x66 PUSH1 0x0 CODECOPY PUSH1 0x0 RETURN INVALID PUSH1 0x80 PUSH1 0x40 MSTORE PUSH1 0x4 CALLDATASIZE LT PUSH2 0x34 JUMPI PUSH1 0x0 CALLDATALOAD PUSH1 0xE0 SHR DUP1 PUSH4 0x1B334ECC EQ PUSH2 0x39 JUMPI DUP1 PUSH4 0xB582EC5F EQ PUSH2 0x67 JUMPI DUP1 PUSH4 0xE5AA3D58 EQ PUSH2 0x98 JUMPI JUMPDEST PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH2 0x65 PUSH1 0x4 DUP1 CALLDATASIZE SUB PUSH1 0x20 DUP2 LT ISZERO PUSH2 0x4F JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST DUP2 ADD SWAP1 DUP1 DUP1 CALLDATALOAD SWAP1 PUSH1 0x20 ADD SWAP1 SWAP3 SWAP2 SWAP1 POP POP POP PUSH2 0xC3 JUMP JUMPDEST STOP JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x73 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0x7C PUSH2 0x107 JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 DUP3 PUSH1 0xFF AND PUSH1 0xFF AND DUP2 MSTORE PUSH1 0x20 ADD SWAP2 POP POP PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0xA4 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0xAD PUSH2 0x11A JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 DUP3 DUP2 MSTORE PUSH1 0x20 ADD SWAP2 POP POP PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST PUSH1 0x0 SLOAD PUSH32 0x3359F789EA83A10B6E9605D460DE1088FF290DD7B3C9A155C896D45CF495ED4D DUP3 PUSH1 0x40 MLOAD DUP1 DUP3 DUP2 MSTORE PUSH1 0x20 ADD SWAP2 POP POP PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 LOG2 DUP1 PUSH1 0x0 DUP2 SWAP1 SSTORE POP POP JUMP JUMPDEST PUSH1 0x1 PUSH1 0x0 SWAP1 SLOAD SWAP1 PUSH2 0x100 EXP SWAP1 DIV PUSH1 0xFF AND DUP2 JUMP JUMPDEST PUSH1 0x0 SLOAD DUP2 JUMP INVALID LOG2 PUSH6 0x627A7A723058 KECCAK256 SWAP6 SAR CODESIZE 0xe5 0x24 0xdc 0xd5 0xa9 0x27 0xd3 DUP5 0xcf 0x27 0x4e PUSH6 0xB6E0AC9BAE6A COINBASE 0xe5 0xe1 0xa7 CALL 0x27 JUMP SWAP8 0xb8 CREATE 0xb7 PUSH5 0x736F6C6343 STOP SDIV EXP STOP ORIGIN ",
    sourceMap:
      "25:350:0:-;;;140:1;121:20;;164:1;147:18;;;;;;;;;;;;;;;;;;;;183:66;171:78;;;;25:350;8:9:-1;5:2;;;30:1;27;20:12;5:2;25:350:0;;;;;;;"
  },
  abi: [
    {
      constant: false,
      inputs: [
        {
          name: "_i",
          type: "uint256"
        }
      ],
      name: "modifiesState",
      outputs: [],
      payable: true,
      stateMutability: "payable",
      type: "function"
    },
    {
      constant: true,
      inputs: [],
      name: "j",
      outputs: [
        {
          name: "",
          type: "uint8"
        }
      ],
      payable: false,
      stateMutability: "view",
      type: "function"
    },
    {
      constant: true,
      inputs: [],
      name: "i",
      outputs: [
        {
          name: "",
          type: "uint256"
        }
      ],
      payable: false,
      stateMutability: "view",
      type: "function"
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          name: "_oldI",
          type: "uint256"
        },
        {
          indexed: false,
          name: "_newI",
          type: "uint256"
        }
      ],
      name: "StateModified",
      type: "event"
    }
  ],
  // Computed with https://abitopic.now.sh/
  selectors: {
    i: "0xe5aa3d58",
    j: "0xb582ec5f",
    modifiesState: "0x1b334ecc"
  },
  topics: {
    StateModified: [
      "0x3359f789ea83a10b6e9605d460de1088ff290dd7b3c9a155c896d45cf495ed4d"
    ]
  }
};
