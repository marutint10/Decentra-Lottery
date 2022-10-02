//SPDX-License-Identifier: MIT
pragma solidity^0.8.13;

contract Lottery{
    address payable[] public players;
    address public manager;
    address payable public winner;

    constructor(){
        manager = msg.sender;
    }

    function alreadyEntred() private view returns(bool){
        for(uint i = 0; i<players.length;i++){
            if(players[i] == msg.sender){
                return true;
            }
        }
        return false;
    }

    receive() external payable {
        require(msg.sender != manager, "manager can not enter the lottery");
        require(alreadyEntred() == false, "you have alredy entred");
        require(msg.value >= 1 ether, "min amount must be paid");
        players.push(payable(msg.sender));
    }

    function random() private view returns(uint256){
        return uint256(keccak256(abi.encodePacked(block.timestamp, block.difficulty, players.length)));
    }

    function getBalance() public view returns(uint256){
        require(msg.sender == manager, "only manager can cheack the blaance");
        return address(this).balance;
    }

    function pickWinner() external {
        require(msg.sender == manager, "only manager can pick the winner");
        require(players.length >= 3,"min 3 players should enter");
        uint index = random() % players.length;
        winner = players[index];
        winner.transfer(getBalance());
        players = new address payable[](0);
    }

    function getPlayers() public view returns(address payable[] memory){
        return players;
    } 
}


