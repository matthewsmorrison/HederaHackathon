pragma solidity ^0.4.23;

contract Vehicle {

  /***********************************/
  /******* CONTRACT ATTRIBUTES *******/
  /***********************************/

  address public master;
  address public rider;
  string public registration;
  uint public balance;

  /***********************************/
  /************* MODIFIERS ***********/
  /***********************************/

  modifier isOwner() {
    require(msg.sender == master);
    _;
  }

  modifier isRider() {
    require(msg.sender == master);
    _;
  }

  /***********************************/
  /********* PUBLIC FUNCTIONS ********/
  /***********************************/

  /*
  * @dev    Constructor for Vehicle contract
  */
  constructor() public {
    master = msg.sender;
  }

  /*
  * @dev                        allows the owner of the contract to change rider of the vehicle
  * @param    newRider          the address of the new rider
  */
  function changeRider(address newRider) public isOwner {
    rider = newRider;
  }

}
