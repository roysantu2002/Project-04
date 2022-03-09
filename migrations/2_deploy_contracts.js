const FlightSuretyApp = artifacts.require("FlightSuretyApp");
const FlightSuretyData = artifacts.require("FlightSuretyData");
const fs = require('fs');

module.exports = function (deployer) {

	let firstAirline = '0x3a59B9d754c7DBF49fe2617Aab2Dc73764d97d56';
	deployer.deploy(FlightSuretyData)
		.then(() => {
			return deployer.deploy(FlightSuretyApp, FlightSuretyData.address)
				.then(() => {
					let config = {
						localhost: {
							url: 'http://localhost:9545',
							dataAddress: FlightSuretyData.address,
							appAddress: FlightSuretyApp.address
						}
					}
					fs.writeFileSync(__dirname + '/../src/dapp/config.json', JSON.stringify(config, null, '\t'), 'utf-8');
					fs.writeFileSync(__dirname + '/../src/server/config.json', JSON.stringify(config, null, '\t'), 'utf-8');
				});
		});
}