/**********************************************************************************
* 
*Created by: Dumitrescu Alexandra
*
*Description: Positive Scenary Login and Logout
*
*
*
**********************************************************************************/


module.exports = (function(logInOutPage) { 
	
	//--------------------------------------LOGIN SUCCESS-------------------------------------------------------------------//
	logInOutPage.logInSuccess = function (URL, username, password){
		
		//Don't wait for Angular -> Not a angular application
		browser.waitForAngularEnabled(false);
		
		//open  Page
		browser.get (URL);
		console.log("I opened page" + URL);
		
		//wait 1 sec
		browser.sleep(1000);
		
		//Verify if Sign-On Button exists on Page
		expect(logInOutPage.signOnButtonPresent).toBeTruthy();
		
		//wait 1 sec
		browser.sleep(1000);
		
		//Click on Sign-On Button
		logInOutPage.signOnButtonClick();
		console.log("I clicked on the Sign-On button!")
		
		//wait 1 sec
		browser.sleep(1000);	
		
		//Verify image on the Sign-On page
		expect(logInOutPage.signOnSignPresent).toBeTruthy();
	
		
		//Fill Username
		logInOutPage.emailFill(username);
		console.log("I filled in usernme" + username);
		
		//wait 1 sec
		browser.sleep(1000);		
		
		//Fill Password
		logInOutPage.passwordFill(password);
		console.log("I filled in password");
		
		//wait 1 sec
		browser.sleep(1000);	
		
		// Click on Submit button
		logInOutPage.signOnSubmitButtonClick();
		
		//wait 3 sec
		browser.sleep(3000);
		
		//Verify Sign-On successfully
		expect(logInOutPage.signOnSuccessfullySign).toBeTruthy();
				
	};//end function

	//--------------------------------------LOGOUT SUCCESS-------------------------------------------------------------------//


	logInOutPage.logOutSuccess = function (){
		
		//Verify if Sign-Off Button exists on Page
		expect(logInOutPage.signOffButtonPresent).toBeTruthy();
		
		//wait 1 sec
		browser.sleep(1000);
		
		//Click on Sign-Off Button
		logInOutPage.signOffButtonClick();
		console.log("I clicked on the Sign-Off button!")
		
		//wait 1 sec
		browser.sleep(1000);	
		
		//Verify Sign-Off successfully
		expect(logInOutPage.signOnSignPresent).toBeTruthy();
					
	};//end function
	
	return logInOutPage;
	
})(require('../02.Functions/basePageObj.js'));