// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

// Import the hardhat console
import "hardhat/console.sol";

contract MyTest {
    uint256 public unlockTime;
    address payable public owner;

    event Withdrawal(uint256 amount, uint256 when);

    constructor(uint256 _unlockTime) payable {
        require(
            block.timestamp < _unlockTime,
            "Unlock time should be in the future"
        );

        unlockTime = _unlockTime;
        owner = payable(msg.sender);
    }

    function withdraw() public {
        require(
            block.timestamp >= unlockTime,
            "Wait until the time period is completed"
        );
        require(msg.sender == owner, "You are not the owner");

        emit Withdrawal(address(this).balance, block.timestamp);

        owner.transfer(address(this).balance);
        return ();
    }
}
