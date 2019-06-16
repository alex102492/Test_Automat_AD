/**********************************************************************************
* 
*Created by: Dumitrescu Alexandra
*
*Description: Positive Scenary Register Page
*
*
*
**********************************************************************************/

describe('spec_RegisterPage', function() {
	
	var registerPage = require('../03.Pages/registerPage.js');
	var logInOutPage = require('../03.Pages/logInOutPage.js');
	var testdata = require('../04.InputData/InputDataFile.json');

			testdata.forEach (function (data) {
				
		it('Register Page', function(){
								
			registerPage.registerUserSuccess(data.URL, data.firstName, data.lastName, data.phone, data.email, data.adress1, data.adress2, data.city, data.state, data.postalCode, data.username, data.password, data.confirmPassword);
			console.log ("The user has register succesfully!");
			
			logInOutPage.logOutSuccess();
			console.log ("The user has log out succesfully!");
				
		});
	});
	
});
