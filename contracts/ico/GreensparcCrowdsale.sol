pragma solidity ^0.4.18;

import "../crowdsale/CappedCrowdsale.sol";
import "../crowdsale/RefundableCrowdsale.sol";
import "../token/MintableToken.sol";
import '../ownership/Ownable.sol';


/**
 * @title SampleCrowdsaleToken
 * @dev ERC20 Token that can be minted and burned.
 */
contract CirrusCoinToken is MintableToken {

  string public constant name = "Cirrus Coin";
  string public constant symbol = "CRC";
  uint8 public constant decimals = 18;

}

/**
 * @title GreensparcCrowdsale
 * @dev Full-fledged crowdsale.
 */
contract GreensparcCrowdsale is CappedCrowdsale, RefundableCrowdsale {

  function GreensparcCrowdsale(uint256 _startTime, uint256 _endTime, uint256 _rate, uint256 _goal, uint256 _cap, address _wallet) public
    CappedCrowdsale(_cap)
    FinalizableCrowdsale()
    RefundableCrowdsale(_goal)
    Crowdsale(_startTime, _endTime, _rate, _wallet)
  {
    //As goal needs to be met for a successful crowdsale
    //the value needs to less or equal than a cap which is limit for accepted funds
    require(_goal <= _cap);
  }

  function createTokenContract() internal returns (MintableToken) {
    return new CirrusCoinToken();
  }

  function rateChange(uint256 _newRate) public onlyOwner {
    rate = _newRate;
  }

}
