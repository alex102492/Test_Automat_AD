/**********************************************************************************
* 
*Created by: Dumitrescu Alexandra
*
*Description: Positive Scenary Register Page
*
*
*
**********************************************************************************/


module.exports = (function(registerPage) { 
	
	//--------------------------------------REGISTER SUCCESS-------------------------------------------------------------------//
	registerPage.registerUserSuccess = function (URL, firstName, lastName, phone, email, adress1, adress2, city, state, postalCode, username, password, confirmPassword){
		
		//Don't wait for Angular -> Not a angular application
		browser.waitForAngularEnabled(false);
		
		//open  Page
		browser.get (URL);
		console.log("I opened page" + URL);
		
		//wait 1 sec
		browser.sleep(1000);
		
		//Verify if Register Button exists on Page
		expect(registerPage.registerButtonPresent).toBeTruthy();
		
		//wait 1 sec
		browser.sleep(1000);
		
		//Click on Register Button
		registerPage.registerButtonClick();
		console.log("I clicked on the Register button!")
		
		//wait 1 sec
		browser.sleep(1000);	
		
		//Verify image on the Registration page
		expect(registerPage.registerSignPresent).toBeTruthy();
		
		//Fill First Name
		registerPage.firstNameFill(firstName);
		console.log("I filled in first name "+ firstName);
		
		//wait 1 sec
		browser.sleep(1000);	
		
		//Fill Last Name
		registerPage.lastNameFill(lastName);
		console.log("I filled in last name "+ lastName);
		
		//wait 1 sec
		browser.sleep(1000);	
		
		//Fill Phone Number
		registerPage.phoneNumberFill(phone + registerPage.randomIntegerSevenDigits);
		console.log("I filled in phone number ");
		
		//wait 1 sec
		browser.sleep(1000);	
		
		//Fill Email
		registerPage.emailFill(email);
		console.log("I filled in email "+ email);
		
		//wait 1 sec
		browser.sleep(1000);	
		
		//Fill Adress1
		registerPage.adress1Fill(adress1);
		console.log("I filled in adress 1 "+ adress1);
		
		//wait 1 sec
		browser.sleep(1000);	
		
		//Fill Adress2
		registerPage.adress2Fill(adress2);
		console.log("I filled in adress 2 "+ adress2);
		
		//wait 1 sec
		browser.sleep(1000);	
		
		//Fill City
		registerPage.cityFill(city);
		console.log("I filled in city "+ city);
		
		//wait 1 sec
		browser.sleep(1000);	
		
		//Fill State
		registerPage.stateFill(state);
		console.log("I filled in state "+ state);
		
		//wait 1 sec
		browser.sleep(1000);	
		
		//Fill Postal Code
		registerPage.postalCodeFill(postalCode);
		console.log("I filled in postal code "+ postalCode);
		
		//wait 1 sec
		browser.sleep(1000);	
		
		//Fill Country
		registerPage.countryFill();
		console.log("I filled in country");
		
		//wait 1 sec
		browser.sleep(1000);	
		
		//Fill Username
		registerPage.usernameFill(username);
		console.log("I filled in username" + username);
		
		//wait 1 sec
		browser.sleep(1000);		
		
		//Fill Password
		registerPage.passwordFill(password);
		console.log("I filled in password");
		
		//wait 1 sec
		browser.sleep(1000);	
		
		//Fill Confirm Password
		registerPage.confirmPasswordFill(confirmPassword);
		console.log("I filled in confirm password");
		
		//wait 1 sec
		browser.sleep(1000);	
		
		//Click on Submit button
		registerPage.registerSubmitButtonClick();
		
		//wait 1 sec
		browser.sleep(1000);
		
		//Verify text Register successfully
		expect(registerPage.registerSuccessfullyGetText()).toEqual("Note: Your user name is "+username+".");
				
	};//end function

	
	return registerPage;
	
})(require('../02.Functions/basePageObj.js'));