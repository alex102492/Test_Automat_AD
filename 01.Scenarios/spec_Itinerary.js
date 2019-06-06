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
	var itineraryTwoWayBusiness = require('../03.Pages/itineraryTwoWayBusiness.js');
	var testdata = require('../04.InputData/InputDataFile.json');

			testdata.forEach (function (data) {
				
		it('Open the page', function(){
			
					
			logInOutPage.logInSuccess(data.URL, data.username, data.password);
			console.log ("The user has log in succesfully!");
			
			itineraryTwoWayBusiness.flightTwoWayBusiness();
			
			logInOutPage.logOutSuccess();
			console.log ("The user has log out succesfully!");
	
		});
	});
	
});
