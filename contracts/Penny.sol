pragma solidity ^0.4.23;

contract Penny {

  /***********************************/
  /******* CONTRACT ATTRIBUTES *******/
  /***********************************/

  struct Location {
    address owner;
    uint locationID;
    uint longitude;
    uint latitude;
    uint gyro;
  }

  struct MileageCategory {
    uint categoryID;
    string name;
    uint price;
  }

  struct Car {
    uint carID;
    string registration;
    uint mileageID;
    address owner;
  }

  address public master;
  uint public balance;

  uint public noLocations;
  uint public noCategories;
  uint public noCars;

  mapping(uint => MileageCategory) public mileageCost;
  mapping(uint => Location) public allLocations;
  mapping(address => Car) public allCars;

  uint[] mileageIDs;
  uint[] locationIDs;
  address[] carOwners;


  /***********************************/
  /************* MODIFIERS ***********/
  /***********************************/

  modifier isOwner() {
    require(msg.sender == master);
    _;
  }

  /***********************************/
  /********* PUBLIC FUNCTIONS ********/
  /***********************************/

  /*
  * @dev    Constructor for Government contract
  */
  constructor() public {
    master = msg.sender;
    balance = 0;
    noLocations = 0;
    noCategories = 0;
    noCars = 0;
  }

  /*
  * @dev                        allows you to make a payment to government
  * @param    _longitude        the longitude being sent with the payment
  * @param    _latitude         the longitude being sent with the payment
  * @param    _gyro             the gyro reading being sent with the payment
  */
  function makePayment(uint _longitude, uint _latitude, uint _gyro) public payable returns (bool) {
    balance = balance + msg.value;
    uint locationIDNumber = noLocations;

    Location memory newLocation;
    newLocation.owner = msg.sender;
    newLocation.locationID = locationIDNumber;
    newLocation.longitude = _longitude;
    newLocation.latitude = _latitude;
    newLocation.gyro = _gyro;

    noLocations = noLocations + 1;
    allLocations[locationIDNumber] = newLocation;
    locationIDs.push(locationIDNumber);
  }

  /*
  * @dev                        allows the owner of the contract to add a mileage category
  * @param    _name             the name of the category for the car
  * @param    _price            the price of the category per metre
  */
  function addCategory(string _name, uint _price) public isOwner {
    uint categoryIDNumber = noCategories;

    MileageCategory memory newMileageCategory;
    newMileageCategory.categoryID = categoryIDNumber;
    newMileageCategory.name = _name;
    newMileageCategory.price = _price;

    noCategories = noCategories + 1;
    mileageCost[categoryIDNumber] = newMileageCategory;
    mileageIDs.push(categoryIDNumber);
  }


  /*
  * @dev                        allows the owner of the contract to add a mileage category
  * @param    _registration     the registration of the car
  * @param    _mileageID        the mileage category of the car
  */
  function addCar(string _registration, uint _mileageID) public isOwner {
    uint carIDNumber = noCars;

    Car memory newCar;
    newCar.carID = carIDNumber;
    newCar.registration = _registration;
    newCar.owner = msg.sender;
    newCar.mileageID = _mileageID;

    noCars = noCars + 1;
    allCars[msg.sender] = newCar;
    carOwners.push(msg.sender);
  }

  /*
  * @dev                        returns the mileage cost for a particular category of vehicle
  * @param    _categoryID       the category ID of the car
  */
  function getPrice(uint _categoryID) public view returns (string, uint) {
    return (mileageCost[_categoryID].name,
            mileageCost[_categoryID].price);
  }

  /*
  * @dev     returns all categories for the mileage cost
  */
  function getCategories() public view returns (uint[]) {
    return mileageIDs;
  }

}
