/**********************************************************************************
* 
*	Created by: Fifiita Daniel
*
*	Description: aici se afla toate functiile folosite pentru testele automate de pe aplicata web FREELANCER.com
*
*	
*
**********************************************************************************/

module.exports = (function () {
	
	//that este numele obiectului care contine mai multe functii.
	var that = {};
	
	//--------REGISTER-----
	var registerButton="//a[contains(text(),'REGISTER')]"; //gfygfhgf
	var registerSign ="//td/img[@src='/images/masts/mast_register.gif']";
	var firstNameInput="//input[@name='firstName']";
	var lastNameInput="//input[@name='lastName']";
	var phoneInput="//input[@name='phone']";
	var emailInput="//input[@name='userName']";
	var adress1Input="//input[@name='address1']";
	var adress2Input="//input[@name='address2']";
	var cityInput="//input[@name='city']";
	var stateInput="//input[@name='state']";
	var postalCodeInput="//input[@name='postalCode']";
	var usernameInput = "//input[@name='email']";
	var passwordInput = "//input[@name='password']";
	var confirmPasswordInput = "//input[@name='confirmPassword']";
	var submitRegistrationButton = "//input[@name='register']";
	var registerSuccessfullyText="//b[contains(text(),'Note: Your user name is')]";
	
	//-----LOGIN-------
	var signOnButton="//a[contains(text(),'SIGN-ON')]";
	var signOnSign ="//td/img[@src='/images/masts/mast_signon.gif']";
	var submitSignOnButton = "//input[@name='login']";
	var flightFinderSign ="//td/img[@src='/images/masts/mast_flightfinder.gif']";
	
	//----LOGOUT------
	var signOffButton="//a[contains(text(),'SIGN-OFF')]";
	
	//----ITINERARY----
	var roundTripType="//input[@name='tripType' and @value='roundtrip']";
	var oneWayType="//input[@name='tripType' and @value='oneway']";
	
	var selectPassengerOneOption="//select[@name='passCount']//option[contains(text(),'1')]";
	var selectDepartureFromParisOption="//select[@name='fromPort']//option[contains(text(),'Paris')]";
	var selectFromMonthMayOption="//select[@name='fromMonth']//option[contains(text(),'May')]";
	var selectFromDayOneOption="//select[@name='fromDay']//option[1]";
	
	var selectArrivingInAcapulcoOption="//select[@name='toPort']//option[contains(text(),'Acapulco')]";
	var selectToMonthMayOption="//select[@name='toMonth']//option[contains(text(),'May')]";
	var selectToDaySevenOption="//select[@name='toDay']//option[5]";
	
	var economyClassService="//input[@name='servClass' and @value='Coach']";
	var businessClassService="//input[@name='servClass' and @value='Business']";
	var firstClassService="//input[@name='servClass' and @value='First']";
	
	var selectAirlineOption="//select[@name='airline']";
	var continueButton ="//td/input[@src='/images/forms/continue.gif']";
	
//--------------------------------------- LOGIN PAGE -------------------------------------------------------------------\\
  
	//Verify Sign-On Button Present	
	that.signOnButtonPresent = function () {
		return element (by.xpath(signOnButton)).isPresent();
	};
	
    //Click on Sign-On Button	
	that.signOnButtonClick = function () {
		return element (by.xpath(signOnButton)).click();
	};
	
	//Verify image on the Sign-On page
	that.signOnSignPresent = function () {
		return element (by.xpath(signOnSign)).isPresent();
	};
	
	//Click on Submit Button
	that.signOnSubmitButtonClick = function () {
		return element (by.xpath(submitSignOnButton)).click();
	};
	
	//Verify text Sign-On Successfully
	that.signOnSuccessfullySign= function(){
		return element(by.xpath(flightFinderSign)).isPresent();
	};
	
//======================================================================================================================\\
//--------------------------------------- LOGOUT PAGE -------------------------------------------------------------------\\

	//Verify Sign-Off Button Present	
	that.signOffButtonPresent = function () {
		return element (by.xpath(signOffButton)).isPresent();
	};
	
    //Click on Sign-Off Button	
	that.signOffButtonClick = function () {
		return element (by.xpath(signOffButton)).click();
	};
	
//======================================================================================================================\\	
//--------------------------------------- REGISTER PAGE -------------------------------------------------------------------\\

    //Verify Register Button Present	
	that.registerButtonPresent = function () {
		return element (by.xpath(registerButton)).isPresent();
	};
	
	//Click on Register Button
	that.registerButtonClick = function () {
		return element (by.xpath(registerButton)).click();
	};
	
	//Verify image on the Registration page
	that.registerSignPresent = function () {
		return element (by.xpath(registerSign)).isPresent();
	};
	
	
	//First Name - input field clear and input		
	that.firstNameFill = function (firstName) {
		element(by.xpath(firstNameInput)).clear();
		return element (by.xpath(firstNameInput)).sendKeys(firstName);
	};
	
	//Last Name - input field clear and input		
	that.lastNameFill = function (lastName) {
		element(by.xpath(lastNameInput)).clear();
		return element (by.xpath(lastNameInput)).sendKeys(lastName);
	};
	
	//Phone Number - input field clear and input		
	that.phoneNumberFill = function (phone) {
		element(by.xpath(phoneInput)).clear();
		return element (by.xpath(phoneInput)).sendKeys(phone);
	};
	
	//Email - input field clear and input		
	that.emailFill = function (email) {
		element(by.xpath(emailInput)).clear();
		return element (by.xpath(emailInput)).sendKeys(email);
	};
	
	//Adress 1 - input field clear and input		
	that.adress1Fill = function (adress1) {
		element(by.xpath(adress1Input)).clear();
		return element (by.xpath(adress1Input)).sendKeys(adress1);
	};
	
	//Adress 2 - input field clear and input		
	that.adress2Fill = function (adress2) {
		element(by.xpath(adress2Input)).clear();
		return element (by.xpath(adress2Input)).sendKeys(adress2);
	};
	
	//City - input field clear and input		
	that.cityFill = function (city) {
		element(by.xpath(cityInput)).clear();
		return element (by.xpath(cityInput)).sendKeys(city);
	};
	
	//State - input field clear and input		
	that.stateFill = function (state) {
		element(by.xpath(stateInput)).clear();
		return element (by.xpath(stateInput)).sendKeys(state);
	};
	
	//Postal Code - input field clear and input		
	that.postalCodeFill = function (postalCode) {
		element(by.xpath(postalCodeInput)).clear();
		return element (by.xpath(postalCodeInput)).sendKeys(postalCode);
	};
	
	//Country - select Romania		
	that.countryFill = function () {
		return element(by.cssContainingText('option', 'ROMANIA')).click();	
	};
	
	//Username - input field clear and input		
	that.usernameFill = function (username) {
		element(by.xpath(usernameInput)).clear();
		return element (by.xpath(usernameInput)).sendKeys(username);
	};
	
	//Password - input field clear and input		
	that.passwordFill = function (password) {
		element(by.xpath(passwordInput)).clear();
		return element (by.xpath(passwordInput)).sendKeys(password);
	};
	
	//Confirm Password - input field clear and input		
	that.confirmPasswordFill = function (confirmPassword) {
		element(by.xpath(confirmPasswordInput)).clear();
		return element (by.xpath(confirmPasswordInput)).sendKeys(confirmPassword);
	};
	
	//Generate random numbers from a range
	that.getRandomInteger= function(min, max){
		return parseInt(Math.random() * (max - min) + min);
	};
	
	that.randomIntegerSevenDigits=that.getRandomInteger(1000000,9999999);
	that.randomIntegerTwoDigits=that.getRandomInteger(10,99);
	that.randomEmail=that.randomIntegerTwoDigits +"@yahoo.com";
	
	//Click on Submit Button
	that.registerSubmitButtonClick = function () {
		return element (by.xpath(submitRegistrationButton)).click();
	};
	
	//Verify text Register Successfully
	that.registerSuccessfullyGetText= function(){
		return element(by.xpath(registerSuccessfullyText)).getText();
	};
	
	//======================================================================================================================\\	
	//--------------------------------------- ITINERARY -------------------------------------------------------------------\\

	//Click on Round Trip
	that.roundTripButtonClick = function () {
		return element (by.xpath(roundTripType)).click();
	};
		
	//Passenger - select 1 passenger		
	that.onePassengerOption = function () {
		return element(by.xpath(selectPassengerOneOption)).click();	
	};
	
	//Departure - select Paris	
	that.departureFromParisOption = function () {
		return element(by.xpath(selectDepartureFromParisOption)).click();	
	};
		
	//From month - select May	
	that.fromMonthMayOption = function () {
		return element(by.xpath(selectFromMonthMayOption)).click();	
	};
		
	//From day - select 1st	
	that.fromDayOneOption = function () {		
		return element(by.xpath(selectFromDayOneOption)).click();	
	};
	
	//-----
	
	
	//Arriving in - select Acapulco	
	that.arrivingInAcapulcoOption = function () {
		return element(by.xpath(selectArrivingInAcapulcoOption)).click();	
	};
		
	//To month - select May	
	that.toMonthMayOption = function () {
		return element(by.xpath(selectToMonthMayOption)).click();	
	};
		
	//From day - select 1st	
	that.toDaySevenOption = function () {
		return element(by.xpath(selectToDaySevenOption)).click();	
	};
	
	//Economy class - click 
	that.economyClassButtonClick= function(){
		return element(by.xpath(economyClassService)).click();
	};
	
	//Airline - select No Preference	
	that.airlineNoPreferenceOption = function () {
		return element(by.cssContainingText('option', 'No Preference')).click();	
	};
	
	//Continue - click 
	that.continueButtonClick= function(){
		return element(by.xpath(continueButton)).click();
	};
	
	return that;
	
})();


