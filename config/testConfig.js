
var FlightSuretyApp = artifacts.require("FlightSuretyApp");
var FlightSuretyData = artifacts.require("FlightSuretyData");
var BigNumber = require('bignumber.js');

var Config = async function (accounts) {

	// These test addresses are useful when you need to add
	// multiple users in test scripts
	let testAddresses = [
		"0x016D41137fBEa841bCC4b2dC50Cf31e9bf8C1650",
		"0x335F01eC47ADFada9f6d736D633A4964E11b2B6b",
		"0x85FDDb8C48A5d73eddF9de7Ba6aD5dF0d3eb03D2",
		"0x427c676f330700Ea94994793e45e8540C1bE2ce7",
		"0xa23352A30A3186A041f0A8e380bCEA52dda919d0",
		"0xAC31eE9E8e51BB90eB72026B3D06889BDc85AC75",
		"0xC112E2a978EDC5fDAf59567803F4a38962be1dEf",
		"0xAe34a5f8B857dB47d2aF59c55bb575D14025693f",
		"0xf7E4c2Cc4a8A6Dd855F4FF84B27397EcbA7903b6"
	];


	let owner = accounts[0];
	let firstAirline = accounts[1];

	let flightSuretyData = await FlightSuretyData.new();
	let flightSuretyApp = await FlightSuretyApp.new(flightSuretyData.address);


	return {
		owner: owner,
		firstAirline: firstAirline,
		weiMultiple: (new BigNumber(10)).pow(18),
		testAddresses: testAddresses,
		flightSuretyData: flightSuretyData,
		flightSuretyApp: flightSuretyApp
	}
}

module.exports = {
	Config: Config
};