pragma solidity ^0.4.21;

contract newEpoch {
  string public message;

  constructor() public {
    message = 'remember';
  }

  function epoch2 () public view returns(uint) {
      return block.timestamp - 1541930400;
  }
}
