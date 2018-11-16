pragma solidity ^0.4.24;

contract Verifier{
    
    address owner;
    
    constructor() public{
        owner = msg.sender;
    }

    function verify(bytes32 hash, uint8 v, bytes32 r, bytes32 s) constant public returns(bool) {
        return ecrecover(hash, v, r, s) == owner;
    }
}