/**********************************************************************************
* 
*Created by: Dumitrescu Alexandra
*
*Description: It contains: Log in, Four different Itinerary, Log out
*
*
*
**********************************************************************************/

describe('spec_Itinerary', function() {
	
	var logInOutPage = require('../03.Pages/logInOutPage.js');
	var itineraryNo1 = require('../03.Pages/itineraryNo1.js');
	var itineraryNo2 = require('../03.Pages/itineraryNo2.js');
	var itineraryNo3 = require('../03.Pages/itineraryNo3.js');
	var itineraryNo4 = require('../03.Pages/itineraryNo4.js');
	var testdata = require('../04.InputData/InputDataFile.json');

			testdata.forEach (function (data) {
				
		beforeEach(function() {
			logInOutPage.logInSuccess(data.URL, data.username, data.password);
			console.log ("The user has log in succesfully!");
		});
		
		it('Itinerary No. 1', function(){		
			itineraryNo1.flightNo1(data.blueSkyesAirlines,data.blueSkyesAirlines,data.businessClass,data.businessClass,data.firstName,data.middleName, data.lastName, data.adress1P,data.adress2P,data.cityP,data.stateP,data.postalCodeP,data.adress1,data.adress2,data.city,data.state,data.postalCode, data.twoPassenger,data.billingAddressParis,data.deliveryAddressMioveni);			
			console.log ("The user has created itinerary one succesfully!");
		});
		
			
    	it('Itinerary No. 2', function(){		
			itineraryNo2.flightNo2(data.blueSkyesAirlines,data.blueSkyesAirlines,data.economyClass, data.economyClass,data.firstName,data.middleName, data.lastName, data.adress1,data.adress2,data.city,data.state,data.postalCode,data.adress1,data.adress2,data.city,data.state,data.postalCode, data.onePassenger,data.billingAddressMioveni,data.deliveryAddressMioveni);			
			console.log ("The user has created itinerary two succesfully!");
    	});
    
		it('Itinerary No. 3', function(){		
			itineraryNo3.flightNo3(data.pangeaAirlines,data.pangeaAirlines,data.firstClass, data.firstClass,data.firstName,data.middleName, data.lastName, data.adress1N,data.adress2N,data.cityN,data.stateN,data.postalCodeN,data.adress1P,data.adress2P,data.cityP,data.stateP,data.postalCodeP, data.fourPassenger,data.billingAddressNewYork,data.deliveryAddressParis);			
			console.log ("The user has created itinerary three succesfully!");
		});
			
		it('Itinerary No. 4', function(){		
			itineraryNo4.flightNo4(data.unifiedAirlines,data.unifiedAirlines,data.businessClass,data.businessClass,data.firstName,data.middleName, data.lastName, data.adress1,data.adress2,data.city,data.state,data.postalCode,data.adress1N,data.adress2N,data.cityN,data.stateN,data.postalCodeN, data.threePassenger,data.billingAddressMioveni,data.deliveryAddressNewYork);			
			console.log ("The user has created itinerary four succesfully!");
		});
		
		
		afterEach(function() {
			logInOutPage.logOutSuccess();
			console.log ("The user has log out succesfully!");
		});
			
	});
	
});
