pragma solidity ^0.8.0;
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract Payment{
    
    address public owner;
    IERC20 public daiToken;
    
    constructor(address _owner, address _daiToken) {
        owner = _owner;
        daiToken = IERC20(_daiToken);
    }
    
    // Event
    
    event PaymentDone(
        address customer,
        uint amount,
        string paymentId,
        uint date
    );
    
    // Public payment function
    
    function pay(uint amount, string memory paymentID) public {
        daiToken.transferFrom(msg.sender, owner, amount);
        emit PaymentDone(msg.sender, amount, paymentID, block.timestamp);
    }
}
