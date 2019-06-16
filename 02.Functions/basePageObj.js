/**********************************************************************************
* 
*	Created by: Dumitrescu Alexandra
*
*	Description: aici se afla toate functiile folosite pentru testele automate
*
*	
*
**********************************************************************************/

module.exports = (function () {
	
	//that este numele obiectului care contine mai multe functii.
	var that = {};
	
	//--------REGISTER-----
	var registerButton="//a[contains(text(),'REGISTER')]";
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
	var selectPassengerTwoOption="//select[@name='passCount']//option[contains(text(),'2')]";
	var selectPassengerThreeOption="//select[@name='passCount']//option[contains(text(),'3')]";
	var selectPassengerFourOption="//select[@name='passCount']//option[contains(text(),'4')]";
	
	var cityList=["Acapulco","Frankfurt","London","New York","Paris","Portland","San Francisco","Seattle","Sydney","Zurich"];
	var randomDepartureCityINo1Item = cityList[Math.floor(Math.random()*cityList.length)];
	var randomDepartureCityINo2Item = cityList[Math.floor(Math.random()*cityList.length)];
	var randomDepartureCityINo3Item = cityList[Math.floor(Math.random()*cityList.length)];
	var randomDepartureCityINo4Item = cityList[Math.floor(Math.random()*cityList.length)];
	var selectDepartureINo1FromOption="//select[@name='fromPort']//option[contains(text(),'"+randomDepartureCityINo1Item+"')]";
	var selectDepartureINo2FromOption="//select[@name='fromPort']//option[contains(text(),'"+randomDepartureCityINo2Item+"')]";	
	var selectDepartureINo3FromOption="//select[@name='fromPort']//option[contains(text(),'"+randomDepartureCityINo3Item+"')]";	
	var selectDepartureINo4FromOption="//select[@name='fromPort']//option[contains(text(),'"+randomDepartureCityINo4Item+"')]";	
	
	var monthList=["January","February","March","April","May","Jun","July","August","September","October","November","December"];
	var randomFromMonthINo1Item = monthList[Math.floor(Math.random()*monthList.length)];
	var randomFromMonthINo2Item = monthList[Math.floor(Math.random()*monthList.length)];
	var randomFromMonthINo3Item = monthList[Math.floor(Math.random()*monthList.length)];
	var randomFromMonthINo4Item = monthList[Math.floor(Math.random()*monthList.length)];
	var selectFromMonthINo1Option="//select[@name='fromMonth']//option[contains(text(),'"+randomFromMonthINo1Item+"')]";
	var selectFromMonthINo2Option="//select[@name='fromMonth']//option[contains(text(),'"+randomFromMonthINo2Item+"')]";
	var selectFromMonthINo3Option="//select[@name='fromMonth']//option[contains(text(),'"+randomFromMonthINo3Item+"')]";
	var selectFromMonthINo4Option="//select[@name='fromMonth']//option[contains(text(),'"+randomFromMonthINo4Item+"')]";
	
	var dayList=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31];
	var randomFromDayINo1Item = dayList[Math.floor(Math.random()*dayList.length)];
	var randomFromDayINo2Item = dayList[Math.floor(Math.random()*dayList.length)];
	var randomFromDayINo3Item = dayList[Math.floor(Math.random()*dayList.length)];
	var randomFromDayINo4Item = dayList[Math.floor(Math.random()*dayList.length)];
	var selectFromDayINo1Option="//select[@name='fromDay']//option["+randomFromDayINo1Item+"]";
	var selectFromDayINo2Option="//select[@name='fromDay']//option["+randomFromDayINo2Item+"]";
	var selectFromDayINo3Option="//select[@name='fromDay']//option["+randomFromDayINo3Item+"]";
	var selectFromDayINo4Option="//select[@name='fromDay']//option["+randomFromDayINo4Item+"]";
	
	var randomArrivingInINo1CityItem = cityList[Math.floor(Math.random()*cityList.length)];
	var randomArrivingInINo2CityItem = cityList[Math.floor(Math.random()*cityList.length)];
	var randomArrivingInINo3CityItem = cityList[Math.floor(Math.random()*cityList.length)];
	var randomArrivingInINo4CityItem = cityList[Math.floor(Math.random()*cityList.length)];
	var selectArrivingInINo1Option="//select[@name='toPort']//option[contains(text(),'"+randomArrivingInINo1CityItem+"')]";
	var selectArrivingInINo2Option="//select[@name='toPort']//option[contains(text(),'"+randomArrivingInINo2CityItem+"')]";
	var selectArrivingInINo3Option="//select[@name='toPort']//option[contains(text(),'"+randomArrivingInINo3CityItem+"')]";
	var selectArrivingInINo4Option="//select[@name='toPort']//option[contains(text(),'"+randomArrivingInINo4CityItem+"')]";
		
	var randomToMonthINo1Item = monthList[Math.floor(Math.random()*monthList.length)];
	var randomToMonthINo2Item = monthList[Math.floor(Math.random()*monthList.length)];
	var randomToMonthINo3Item = monthList[Math.floor(Math.random()*monthList.length)];
	var randomToMonthINo4Item = monthList[Math.floor(Math.random()*monthList.length)];
	var selectToMonthINo1Option="//select[@name='toMonth']//option[contains(text(),'"+randomToMonthINo1Item+"')]";
	var selectToMonthINo2Option="//select[@name='toMonth']//option[contains(text(),'"+randomToMonthINo2Item+"')]";
	var selectToMonthINo3Option="//select[@name='toMonth']//option[contains(text(),'"+randomToMonthINo3Item+"')]";
	var selectToMonthINo4Option="//select[@name='toMonth']//option[contains(text(),'"+randomToMonthINo4Item+"')]";	
	
	var randomToDayINo1Item = dayList[Math.floor(Math.random()*dayList.length)];
	var randomToDayINo2Item = dayList[Math.floor(Math.random()*dayList.length)];
	var randomToDayINo3Item = dayList[Math.floor(Math.random()*dayList.length)];
	var randomToDayINo4Item = dayList[Math.floor(Math.random()*dayList.length)];
	var selectToDayINo1Option="//select[@name='toDay']//option["+randomToDayINo1Item+"]";
	var selectToDayINo2Option="//select[@name='toDay']//option["+randomToDayINo2Item+"]";
	var selectToDayINo3Option="//select[@name='toDay']//option["+randomToDayINo3Item+"]";
	var selectToDayINo4Option="//select[@name='toDay']//option["+randomToDayINo4Item+"]";
	
	var economyClassService="//input[@name='servClass' and @value='Coach']";
	var businessClassService="//input[@name='servClass' and @value='Business']";
	var firstClassService="//input[@name='servClass' and @value='First']";

	var continueButton ="//input[@src='/images/forms/continue.gif']";
	
	var selectFlightSign="//td/img[@src='/images/masts/mast_selectflight.gif']";
	
	var departureFlightBSA361="(//input[contains(@value,'Blue Skies Airlines')])[2]";
	var departureFlightBSA360="(//input[contains(@value,'Blue Skies Airlines')])[1]";
	var departureFlightUnified363="(//input[contains(@value,'Unified Airlines')])[1]";
	var departureFlightPangea362="(//input[contains(@value,'Pangea Airlines')])[1]";
	var returnFlightBSA630="(//input[contains(@value,'Blue Skies Airlines')])[3]";
	var returnFlightBSA631="(//input[contains(@value,'Blue Skies Airlines')])[4]";
	var returnFlightUnified633="(//input[contains(@value,'Unified Airlines')])[2]";
	var returnFlightPangea632="(//input[contains(@value,'Pangea Airlines')])[2]";
	
	var bookAFlightSign="//td/img[@src='/images/masts/mast_book.gif']";
	
	var firstNameP0Ticket="//input[@name='passFirst0']";
	var firstNameP1Ticket="//input[@name='passFirst1']";
	var firstNameP2Ticket="//input[@name='passFirst2']";
	var firstNameP3Ticket="//input[@name='passFirst3']";
	
	var lastNameP0Ticket="//input[@name='passLast0']";
	var lastNameP1Ticket="//input[@name='passLast1']";
	var lastNameP2Ticket="//input[@name='passLast2']";	
	var lastNameP3Ticket="//input[@name='passLast3']";
	
	var mealList=["No preference","Bland","Diabetic","Hindu","Kosher","Low Calorie","Low Cholesterol","Low Sodium","Muslim","Vegetarian"];
	var randomMealP0Item = mealList[Math.floor(Math.random()*mealList.length)];
	var randomMealP1Item = mealList[Math.floor(Math.random()*mealList.length)];
	var randomMealP2Item = mealList[Math.floor(Math.random()*mealList.length)];
	var randomMealP3Item = mealList[Math.floor(Math.random()*mealList.length)];
	var selectMealP0="//select[@name='pass.0.meal']/option[contains(text(),'"+randomMealP0Item+"')]";
	var selectMealP1="//select[@name='pass.1.meal']/option[contains(text(),'"+randomMealP1Item+"')]";
	var selectMealP2="//select[@name='pass.2.meal']/option[contains(text(),'"+randomMealP2Item+"')]";
	var selectMealP3="//select[@name='pass.3.meal']/option[contains(text(),'"+randomMealP3Item+"')]";
	
	var cardTypeList=["American Express","MasterCard","Visa","Discover","Diners Club","Carte Blanche"];
	var randomCardTypeINo1Item = cardTypeList[Math.floor(Math.random()*cardTypeList.length)];
	var randomCardTypeINo2Item = cardTypeList[Math.floor(Math.random()*cardTypeList.length)];
	var randomCardTypeINo3Item = cardTypeList[Math.floor(Math.random()*cardTypeList.length)];
	var randomCardTypeINo4Item = cardTypeList[Math.floor(Math.random()*cardTypeList.length)];
	var selectCardTypeNo1Option="//option[contains(text(),'"+randomCardTypeINo1Item+"')]";
	var selectCardTypeNo2Option="//option[contains(text(),'"+randomCardTypeINo2Item+"')]";
	var selectCardTypeNo3Option="//option[contains(text(),'"+randomCardTypeINo3Item+"')]";
	var selectCardTypeNo4Option="//option[contains(text(),'"+randomCardTypeINo4Item+"')]";
	
	var creditCardNumber="//input[@name='creditnumber']";
	
	var monthExpirationList=["None",01,02,03,04,05,06,07,08,09,10,11,12];
	var randomMonthExpirationINo1Item = monthExpirationList[Math.floor(Math.random()*monthExpirationList.length)];	
	var randomMonthExpirationINo2Item = monthExpirationList[Math.floor(Math.random()*monthExpirationList.length)];	
	var randomMonthExpirationINo3Item = monthExpirationList[Math.floor(Math.random()*monthExpirationList.length)];	
	var randomMonthExpirationINo4Item = monthExpirationList[Math.floor(Math.random()*monthExpirationList.length)];	
	var expirationMonthINo1Option="//select[@name='cc_exp_dt_mn']//option[contains(text(),'"+randomMonthExpirationINo1Item+"')]";
	var expirationMonthINo2Option="//select[@name='cc_exp_dt_mn']//option[contains(text(),'"+randomMonthExpirationINo2Item+"')]";
	var expirationMonthINo3Option="//select[@name='cc_exp_dt_mn']//option[contains(text(),'"+randomMonthExpirationINo3Item+"')]";
	var expirationMonthINo4Option="//select[@name='cc_exp_dt_mn']//option[contains(text(),'"+randomMonthExpirationINo4Item+"')]";
	
	var yearExpirationList=["None",2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010];
	var randomYearExpirationINo1Item = yearExpirationList[Math.floor(Math.random()*yearExpirationList.length)];		
	var randomYearExpirationINo2Item = yearExpirationList[Math.floor(Math.random()*yearExpirationList.length)];		
	var randomYearExpirationINo3Item = yearExpirationList[Math.floor(Math.random()*yearExpirationList.length)];		
	var randomYearExpirationINo4Item = yearExpirationList[Math.floor(Math.random()*yearExpirationList.length)];		
	var expirationYearINo1Option="//select[@name='cc_exp_dt_yr']//option[contains(text(),'"+randomYearExpirationINo1Item+"')]";
	var expirationYearINo2Option="//select[@name='cc_exp_dt_yr']//option[contains(text(),'"+randomYearExpirationINo2Item+"')]";
	var expirationYearINo3Option="//select[@name='cc_exp_dt_yr']//option[contains(text(),'"+randomYearExpirationINo3Item+"')]";
	var expirationYearINo4Option="//select[@name='cc_exp_dt_yr']//option[contains(text(),'"+randomYearExpirationINo4Item+"')]";
	
	var firstNameCreditCard="//input[@name='cc_frst_name']";
	var middleNameCreditCard="//input[@name='cc_mid_name']";
	var lastNameCreditCard="//input[@name='cc_last_name']";
	var billingAddress1="//input[@name='billAddress1']";
	var billingAddress2="//input[@name='billAddress2']";
	var billingCityInput="//input[@name='billCity']";
	var billingStateInput="//input[@name='billState']";
	var billingPostalCodeInput="//input[@name='billZip']";
	var billingCountryRomaniaInput="//select[@name='billCountry']//option[contains(text(),'ROMANIA')]";
	var billingCountryFranceInput="//select[@name='billCountry']//option[contains(text(),'FRANCE')]";
	var billingCountryUnitedStatesInput="//select[@name='billCountry']//option[contains(text(),'UNITED STATES')]";
	var ticketlessTravel="//tr[8]//input[@name='ticketLess']";
	var sameAsBillingAddress="//tr[14]//input[@name='ticketLess']";
	var deliveryAddress1="//input[@name='delAddress1']";
	var deliveryAddress2="//input[@name='delAddress2']";
	var deliveryCityInput="//input[@name='delCity']";
	var deliveryStateInput="//input[@name='delState']";
	var deliveryPostalCodeInput="//input[@name='delZip']";
	var deliveryCountryRomaniaInput="//select[@name='delCountry']//option[contains(text(),'ROMANIA')]";
	var deliveryCountryFranceInput="//select[@name='delCountry']//option[contains(text(),'FRANCE')]";
	var deliveryCountryUnitedStatesInput="//select[@name='delCountry']//option[contains(text(),'UNITED STATES')]";
	var securePurchaseButton="//td/input[@src='/images/forms/purchase.gif']";
	var flightConfirmationSign="//td/img[@src='/images/masts/mast_confirmation.gif']";
	var departureDestinationConfirmText='(//td[@class="frame_header_info"]/font[@face="Arial, Helvetica, sans-serif, Verdana"]/b)[1]';
	var returningDestinationConfirmText='(//td[@class="frame_header_info"]/font[@face="Arial, Helvetica, sans-serif, Verdana"]/b)[2]';
	var onePassengerText="//font[contains(text(),'1 passenger')]";
	var twoPassengerText="//font[contains(text(),'2 passengers')]";
	var threePassengerText="//font[contains(text(),'3 passengers')]";
	var fourPassengerText="//font[contains(text(),'4 passengers')]";
	var billToAddress="//tr[9]//td[1]//p[1]//font[1]";
	var deliveryToAddress="//tr[11]//td[1]//p[1]";
	var departureDestinationFlightText='(//td[@class="title"]/b/font[@face="ARIAL"])[1]';
	var returningDestinationFlightText='(//td[@class="title"]/b/font[@face="ARIAL"])[3]';
	var departureDestinationBookText='(//td[@class="frame_header_info"]/b/font[@face="ARIAL"])[1]';
	var returningDestinationBookText='(//td[@class="data_left"]/b/font[@face="ARIAL"])[1]';
	let departureFlightText='(//td[@class="data_left"]/font[@face="ARIAL"]/b)[1]';
	let returnFlightText='(//td[@class="data_left"]/font/font/font[@face="ARIAL"]/b)[1]';
	let classServiceDepartureText='//tr[3]//td[2]//font[1]';
	let classServiceReturnText='//tr//tr//tr//tr//tr//tr[6]//td[2]//font[1]';
	var backToFlightButton="//a/img[@src='/images/forms/backtoflights.gif']";
	var backToHomeButton="//a/img[@src='/images/forms/home.gif']";
	var logOutButton="//a/img[@src='/images/forms/Logout.gif']";
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

	//Save the value of the var randomDepartureCityINo1Item in a function
	that.departureCityINo1 = function () {
		return randomDepartureCityINo1Item.valueOf();
	};
	
	//Save the value of the var randomDepartureCityINo1Item in a function
	that.arrivingCityINo1 = function () {
		return randomArrivingInINo1CityItem.valueOf();
	};
	
	//Save the value of the var randomDepartureCityINo2Item in a function
	that.departureCityINo2 = function () {
		return randomDepartureCityINo2Item.valueOf();
	};
	
	//Save the value of the var randomDepartureCityINo2Item in a function
	that.arrivingCityINo2 = function () {
		return randomArrivingInINo2CityItem.valueOf();
	};
	
	
	//Save the value of the var randomDepartureCityINo3Item in a function
	that.departureCityINo3 = function () {
		return randomDepartureCityINo3Item.valueOf();
	};
	
	//Save the value of the var randomDepartureCityINo3Item in a function
	that.arrivingCityINo3 = function () {
		return randomArrivingInINo3CityItem.valueOf();
	};
	
	//Save the value of the var randomDepartureCityINo4Item in a function
	that.departureCityINo4 = function () {
		return randomDepartureCityINo4Item.valueOf();
	};
	
	//Save the value of the var randomDepartureCityINo4Item in a function
	that.arrivingCityINo4 = function () {
		return randomArrivingInINo4CityItem.valueOf();
	};
	
	//Click on Round Trip
	that.roundTripButtonClick = function () {
		return element (by.xpath(roundTripType)).click();
	};
	
	//Click on One Way
	that.oneWayButtonClick = function () {
		return element (by.xpath(oneWayType)).click();
	};
		
	//Passenger - select 1 passenger		
	that.onePassengerOption = function () {
		return element(by.xpath(selectPassengerOneOption)).click();	
	};
	
	//Passenger - select 2 passenger		
	that.twoPassengerOption = function () {
		return element(by.xpath(selectPassengerTwoOption)).click();	
	};
	
	//Passenger - select 3 passenger		
	that.threePassengerOption = function () {
		return element(by.xpath(selectPassengerThreeOption)).click();	
	};
	
	//Passenger - select 4 passenger		
	that.fourPassengerOption = function () {
		return element(by.xpath(selectPassengerFourOption)).click();	
	};
	
	//Departure - select city for Itinerary No. 1
	that.departureINo1FromOption = function () {
		return element(by.xpath(selectDepartureINo1FromOption)).click();	
	};
		
	//From month - select month for Itinerary No. 1	
	that.fromMonthINo1Option = function () {
		return element(by.xpath(selectFromMonthINo1Option)).click();	
	};
		
	//From day - select day for Itinerary No. 1
	that.fromDayINo1Option = function () {		
		return element(by.xpath(selectFromDayINo1Option)).click();	
	};
		
	//Arriving in - select city for Itinerary No. 1
	that.arrivingInINo1Option = function () {
		return element(by.xpath(selectArrivingInINo1Option)).click();	
	};
		
	//To month - select month for Itinerary No. 1
	that.toMonthINo1Option = function () {
		return element(by.xpath(selectToMonthINo1Option)).click();	
	};
		
	//From day - select day for Itinerary No. 1
	that.toDayINo1Option = function () {
		return element(by.xpath(selectToDayINo1Option)).click();	
	};
	
	//-----------------------
	
	//Departure - select city for Itinerary No. 2
	that.departureINo2FromOption = function () {
		return element(by.xpath(selectDepartureINo2FromOption)).click();	
	};
		
	//From month - select month for Itinerary No. 2	
	that.fromMonthINo2Option = function () {
		return element(by.xpath(selectFromMonthINo2Option)).click();	
	};
		
	//From day - select day for Itinerary No. 2
	that.fromDayINo2Option = function () {		
		return element(by.xpath(selectFromDayINo2Option)).click();	
	};
		
	//Arriving in - select city for Itinerary No. 2
	that.arrivingInINo2Option = function () {
		return element(by.xpath(selectArrivingInINo2Option)).click();	
	};
		
	//To month - select month for Itinerary No. 2
	that.toMonthINo2Option = function () {
		return element(by.xpath(selectToMonthINo2Option)).click();	
	};
		
	//From day - select day for Itinerary No. 2
	that.toDayINo2Option = function () {
		return element(by.xpath(selectToDayINo2Option)).click();	
	};
	
	//-----------------------
	
	//Departure - select city for Itinerary No. 3
	that.departureINo3FromOption = function () {
		return element(by.xpath(selectDepartureINo3FromOption)).click();	
	};
		
	//From month - select month for Itinerary No. 3	
	that.fromMonthINo3Option = function () {
		return element(by.xpath(selectFromMonthINo3Option)).click();	
	};
		
	//From day - select day for Itinerary No. 3
	that.fromDayINo3Option = function () {		
		return element(by.xpath(selectFromDayINo3Option)).click();	
	};
		
	//Arriving in - select city for Itinerary No. 3
	that.arrivingInINo3Option = function () {
		return element(by.xpath(selectArrivingInINo3Option)).click();	
	};
		
	//To month - select month for Itinerary No. 3
	that.toMonthINo3Option = function () {
		return element(by.xpath(selectToMonthINo3Option)).click();	
	};
		
	//From day - select day for Itinerary No. 3
	that.toDayINo3Option = function () {
		return element(by.xpath(selectToDayINo3Option)).click();	
	};
	
	//-----------------------
	
	//Departure - select city for Itinerary No. 4
	that.departureINo4FromOption = function () {
		return element(by.xpath(selectDepartureINo4FromOption)).click();	
	};
		
	//From month - select month for Itinerary No. 4	
	that.fromMonthINo4Option = function () {
		return element(by.xpath(selectFromMonthINo4Option)).click();	
	};
		
	//From day - select day for Itinerary No. 4
	that.fromDayINo4Option = function () {		
		return element(by.xpath(selectFromDayINo4Option)).click();	
	};
		
	//Arriving in - select city for Itinerary No. 4
	that.arrivingInINo4Option = function () {
		return element(by.xpath(selectArrivingInINo4Option)).click();	
	};
		
	//To month - select month for Itinerary No. 4
	that.toMonthINo4Option = function () {
		return element(by.xpath(selectToMonthINo4Option)).click();	
	};
		
	//From day - select day for Itinerary No. 4
	that.toDayINo4Option = function () {
		return element(by.xpath(selectToDayINo4Option)).click();	
	};
	
	//-----------------------
	
	//Economy class - click 
	that.economyClassButtonClick= function(){
		return element(by.xpath(economyClassService)).click();
	};
	
	//Business class - click 
	that.businessClassButtonClick= function(){
		return element(by.xpath(businessClassService)).click();
	};
	
	//First class - click 
	that.firstClassButtonClick= function(){
		return element(by.xpath(firstClassService)).click();
	};
	
	//Airline - select No Preference	
	that.airlineNoPreferenceOption = function () {
		return element(by.cssContainingText('option', 'No Preference')).click();	
	};
	
	//Airline - select Blue Skies Airlines	
	that.airlineBlueSkiesAirlinesOption = function () {
		return element(by.cssContainingText('option', 'Blue Skies Airlines')).click();	
	};
	
	//Airline - select Unified Airlines	
	that.airlineUnifiedAirlinesOption = function () {
		return element(by.cssContainingText('option', 'Unified Airlines')).click();	
	};
	
	//Airline - select Pangea Airlines	
	that.airlinePangeaAirlinesOption = function () {
		return element(by.cssContainingText('option', 'Pangea Airlines')).click();	
	};
	
	//Continue - click 
	that.continueButtonClick= function(){
		return element(by.xpath(continueButton)).click();
	};
	
	//Verify that Select Flight image appears
	that.selectFlightSignPresent= function(){
		return element(by.xpath(selectFlightSign)).isPresent();
	};
	
	//Select Departure Flight BSA 361
	that.departureFlightBSA361ButtonClick= function(){
		return element(by.xpath(departureFlightBSA361)).click();
	};
	
	//Select Return Flight BSA 630
	that.returnFlightBSA630ButtonClick= function(){
		return element(by.xpath(returnFlightBSA630)).click();
	};
	
	//Select Departure Flight BSA 360
	that.departureFlightBSA360ButtonClick= function(){
		return element(by.xpath(departureFlightBSA360)).click();
	};
	
	//Select Return Flight BSA 631
	that.returnFlightBSA631ButtonClick= function(){
		return element(by.xpath(returnFlightBSA631)).click();
	};
	
	//Select Departure Flight Unified 363
	that.departureFlightUnified363ButtonClick= function(){
		return element(by.xpath(departureFlightUnified363)).click();
	};
	
	//Select Return Flight Unified 633
	that.returnFlightUnified633ButtonClick= function(){
		return element(by.xpath(returnFlightUnified633)).click();
	};
	
	//Select Departure Flight Pangea 362
	that.departureFlightPangea362ButtonClick= function(){
		return element(by.xpath(departureFlightPangea362)).click();
	};
	
	//Select Return Flight Pangea 632
	that.returnFlightPangea632ButtonClick= function(){
		return element(by.xpath(returnFlightPangea632)).click();
	};
	
	
	//Verify that Book a Flight image appears
	that.bookAFlightSignPresent= function(){
		return element(by.xpath(bookAFlightSign)).isPresent();
	};
		

	//Generate Random String function
	that.getRandomString= function generateRandomString(length) {
		  var text = "";
		  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
		   
		  for (var i = 0; i < length; i++)
		    text += possible.charAt(Math.floor(Math.random() * possible.length));
		   
		  return text;
		};
	
	
	that.randomFirstNameP0Ticket=that.getRandomString(7);
	that.randomLastNameP0Ticket=that.getRandomString(9);
	
	that.randomFirstNameP1Ticket=that.getRandomString(5);
	that.randomLastNameP1Ticket=that.getRandomString(11);
	
	that.randomFirstNameP2Ticket=that.getRandomString(8);
	that.randomLastNameP2Ticket=that.getRandomString(4);
	
	that.randomFirstNameP3Ticket=that.getRandomString(10);
	that.randomLastNameP3Ticket=that.getRandomString(13);
	
	//First Name Passenger 0 - input field clear and input		
	that.firstNameP0TicketFill = function (firstNameP0) {
		element(by.xpath(firstNameP0Ticket)).clear();
		return element (by.xpath(firstNameP0Ticket)).sendKeys(firstNameP0);
	};
	
	//Last Name Passenger 0 - input field clear and input		
	that.lastNameP0TicketFill = function (lastNameP0) {
		element(by.xpath(lastNameP0Ticket)).clear();
		return element (by.xpath(lastNameP0Ticket)).sendKeys(lastNameP0);
	};
	
	//First Name Passenger 1 - input field clear and input		
	that.firstNameP1TicketFill = function (firstNameP1) {
		element(by.xpath(firstNameP1Ticket)).clear();
		return element (by.xpath(firstNameP1Ticket)).sendKeys(firstNameP1);
	};
	
	//Last Name Passenger 1 - input field clear and input		
	that.lastNameP1TicketFill = function (lastNameP1) {
		element(by.xpath(lastNameP1Ticket)).clear();
		return element (by.xpath(lastNameP1Ticket)).sendKeys(lastNameP1);
	};
	
	//First Name Passenger 2 - input field clear and input		
	that.firstNameP2TicketFill = function (firstNameP2) {
		element(by.xpath(firstNameP2Ticket)).clear();
		return element (by.xpath(firstNameP2Ticket)).sendKeys(firstNameP2);
	};
	
	//Last Name Passenger 2 - input field clear and input		
	that.lastNameP2TicketFill = function (lastNameP2) {
		element(by.xpath(lastNameP2Ticket)).clear();
		return element (by.xpath(lastNameP2Ticket)).sendKeys(lastNameP2);
	};
	
	//First Name Passenger 3 - input field clear and input		
	that.firstNameP3TicketFill = function (firstNameP3) {
		element(by.xpath(firstNameP3Ticket)).clear();
		return element (by.xpath(firstNameP3Ticket)).sendKeys(firstNameP3);
	};
	
	//Last Name Passenger 3 - input field clear and input		
	that.lastNameP3TicketFill = function (lastNameP3) {
		element(by.xpath(lastNameP3Ticket)).clear();
		return element (by.xpath(lastNameP3Ticket)).sendKeys(lastNameP3);
	};
	
	//Select Meal Passenger 0
	that.selectMealP0Option=function(){
		return element (by.xpath(selectMealP0)).click();
	};
	
	//Select Meal Passenger 1
	that.selectMealP1Option=function(){
		return element (by.xpath(selectMealP1)).click();
	};
	
	//Select Meal Passenger 2
	that.selectMealP2Option=function(){
		return element (by.xpath(selectMealP2)).click();
	};
	
	//Select Meal Passenger 3
	that.selectMealP3Option=function(){
		return element (by.xpath(selectMealP3)).click();
	};
	
	//Select Credit Card for Itinerary No. 1
	that.selectCreditCardINo1Option=function(){
		return element (by.xpath(selectCardTypeNo1Option)).click();
	};
	
	//Select Credit Card for Itinerary No. 2
	that.selectCreditCardINo2Option=function(){
		return element (by.xpath(selectCardTypeNo2Option)).click();
	};
	
	//Select Credit Card for Itinerary No. 3
	that.selectCreditCardINo3Option=function(){
		return element (by.xpath(selectCardTypeNo3Option)).click();
	};
	
	//Select Credit Card for Itinerary No. 4
	that.selectCreditCardINo4Option=function(){
		return element (by.xpath(selectCardTypeNo4Option)).click();
	};
	
	//Credit Card Number - input field clear and input		
	that.creditCardNumberFill = function (creditCard) {
		element(by.xpath(creditCardNumber)).clear();
		return element (by.xpath(creditCardNumber)).sendKeys(creditCard);
	};
	
	that.randomIntegerCreditCardNumberINo1=that.getRandomInteger(1000000000000000,9999999999999999);
	that.randomIntegerCreditCardNumberINo2=that.getRandomInteger(1000000000000000,9999999999999999);
	that.randomIntegerCreditCardNumberINo3=that.getRandomInteger(1000000000000000,9999999999999999);
	that.randomIntegerCreditCardNumberINo4=that.getRandomInteger(1000000000000000,9999999999999999);
	
	//Select Expiration Month for Itinerary No. 1
	that.selectExpirationMonthINo1Option=function(){
		return element (by.xpath(expirationMonthINo1Option)).click();
	};
	
	//Select Expiration Year for Itinerary No. 1
	that.selectExpirationYearINo1Option=function(){
		return element (by.xpath(expirationYearINo1Option)).click();
	};
	
	//Select Expiration Month for Itinerary No. 2
	that.selectExpirationMonthINo2Option=function(){
		return element (by.xpath(expirationMonthINo2Option)).click();
	};
	
	//Select Expiration Year for Itinerary No. 2
	that.selectExpirationYearINo2Option=function(){
		return element (by.xpath(expirationYearINo2Option)).click();
	};
	
	//Select Expiration Month for Itinerary No. 3
	that.selectExpirationMonthINo3Option=function(){
		return element (by.xpath(expirationMonthINo3Option)).click();
	};
	
	//Select Expiration Year for Itinerary No. 3
	that.selectExpirationYearINo3Option=function(){
		return element (by.xpath(expirationYearINo3Option)).click();
	};
	
	//Select Expiration Month for Itinerary No. 4
	that.selectExpirationMonthINo4Option=function(){
		return element (by.xpath(expirationMonthINo4Option)).click();
	};
	
	//Select Expiration Year for Itinerary No. 4
	that.selectExpirationYearINo4Option=function(){
		return element (by.xpath(expirationYearINo4Option)).click();
	};
	
	//First Name - input fie2d clear and input		
	that.firstNameCreditCardFill = function (firstName) {
		element(by.xpath(firstNameCreditCard)).clear();
		return element (by.xpath(firstNameCreditCard)).sendKeys(firstName);
	};
		
	//Middle Name - input field clear and input		
	that.middleNameCreditCardFill = function (middleName) {
		element(by.xpath(middleNameCreditCard)).clear();
		return element (by.xpath(middleNameCreditCard)).sendKeys(middleName);
	};
	
	//Last Name - input field clear and input		
	that.lastNameCreditCardFill = function (lastName) {
		element(by.xpath(lastNameCreditCard)).clear();
		return element (by.xpath(lastNameCreditCard)).sendKeys(lastName);
	};
	
	//Select Ticketless Travel
	that.ticketlessTravelOption= function(){
		return element (by.xpath(ticketlessTravel)).click();
	};
	
	//Billing Adress 1 - input field clear and input		
	that.billingAdress1Fill = function (adress1) {
		element(by.xpath(billingAddress1)).clear();
		return element (by.xpath(billingAddress1)).sendKeys(adress1);
	};
	
	//Billing Adress 2 - input field clear and input		
	that.billingAdress2Fill = function (adress2) {
		element(by.xpath(billingAddress2)).clear();
		return element (by.xpath(billingAddress2)).sendKeys(adress2);
	};
	
	//Billing City - input field clear and input		
	that.billingCityFill = function (city) {
		element(by.xpath(billingCityInput)).clear();
		return element (by.xpath(billingCityInput)).sendKeys(city);
	};
	
	//Billing State - input field clear and input		
	that.billingStateFill = function (state) {
		element(by.xpath(billingStateInput)).clear();
		return element (by.xpath(billingStateInput)).sendKeys(state);
	};
	
	//Billing Postal Code - input field clear and input		
	that.billingPostalCodeFill = function (postalCode) {
		element(by.xpath(billingPostalCodeInput)).clear();
		return element (by.xpath(billingPostalCodeInput)).sendKeys(postalCode);
	};
	
	//Billing Country - select Romania		
	that.billingCountryRomaniaFill = function (country) {
		return element(by.xpath(billingCountryRomaniaInput)).click();
	};
	
	//Billing Country - select France		
	that.billingCountryFranceFill = function (country) {
		return element(by.xpath(billingCountryFranceInput)).click();
	};
	
	//Billing Country - select United Statees		
	that.billingCountryUnitedStatesFill = function (country) {
		return element(by.xpath(billingCountryUnitedStatesInput)).click();
	};
	
	//Same as Billing Address Option
	that.sameAsBillingAddressOption= function(){
		return element (by.xpath(sameAsBillingAddress)).click();
	};
	
	//Delivery Adress 1 - input field clear and input		
	that.deliveryAdress1Fill = function (adress1) {
		element(by.xpath(deliveryAddress1)).clear();
		return element (by.xpath(deliveryAddress1)).sendKeys(adress1);
	};
	
	//Delivery Adress 2 - input field clear and input		
	that.deliveryAdress2Fill = function (adress2) {
		element(by.xpath(deliveryAddress2)).clear();
		return element (by.xpath(deliveryAddress2)).sendKeys(adress2);
	};
	
	//Delivery City - input field clear and input		
	that.deliveryCityFill = function (city) {
		element(by.xpath(deliveryCityInput)).clear();
		return element (by.xpath(deliveryCityInput)).sendKeys(city);
	};
	
	//Delivery State - input field clear and input		
	that.deliveryStateFill = function (state) {
		element(by.xpath(deliveryStateInput)).clear();
		return element (by.xpath(deliveryStateInput)).sendKeys(state);
	};
	
	//Delivery Postal Code - input field clear and input		
	that.deliveryPostalCodeFill = function (postalCode) {
		element(by.xpath(deliveryPostalCodeInput)).clear();
		return element (by.xpath(deliveryPostalCodeInput)).sendKeys(postalCode);
	};
	
	//Delivery Country - select Romania		
	that.deliveryCountryRomaniaFill = function () {
		return element(by.xpath(deliveryCountryRomaniaInput)).click();
	};
	
	//Delivery Country - select France		
	that.deliveryCountryFranceFill = function () {
		return element(by.xpath(deliveryCountryFranceInput)).click();
	};
	
	//Delivery Country - select United States		
	that.deliveryCountryUnitedStatesFill = function () {
		return element(by.xpath(deliveryCountryUnitedStatesInput)).click();
	};
	
	//Click on Secure purchase button 		
	that.securePurchaseButtonClick = function () {
		return element(by.xpath(securePurchaseButton)).click();
	};
	
	//Verify that Flight confirmation image appears
	that.flightConfirmationSignPresent= function(){
		return element(by.xpath(flightConfirmationSign)).isPresent();
	};
	
	//Verify that the Departure destination is correct
	that.departureDestinationConfirmPresent= function(){
		return element(by.xpath(departureDestinationConfirmText)).getText();
	};
	
	//Verify that the Returning destination is correct
	that.returnDestinationConfirmPresent= function(){
		return element(by.xpath(returningDestinationConfirmText)).getText();
	};
	
	//Verify that the Number of passenger is correct
	that.onePassengerPresent= function(){
		return element(by.xpath(onePassengerText)).getText();
	};
	
	//Verify that the Number of passenger is correct
	that.twoPassengerPresent= function(){
		return element(by.xpath(twoPassengerText)).getText();
	};
	
	//Verify that the Number of passenger is correct
	that.threePassengerPresent= function(){
		return element(by.xpath(threePassengerText)).getText();
	};
	
	//Verify that the Number of passenger is correct
	that.fourPassengerPresent= function(){
		return element(by.xpath(fourPassengerText)).getText();
	};
	
	//Verify that the Billing Address is correct
	that.billingAddressPresent= function(){
		return element(by.xpath(billToAddress)).getText();
	};
	
	//Verify that the Delivery Address is correct
	that.deliveryAddressPresent= function(){
		return element(by.xpath(deliveryToAddress)).getText();
	};
	
	//Verify that the Departure destination is correct
	that.departureDestinationFlightPresent= function(){
		return element(by.xpath(departureDestinationFlightText)).getText();
	};
	
	//Verify that the Returning destination is correct
	that.returnDestinationFlightPresent= function(){
		return element(by.xpath(returningDestinationFlightText)).getText();
	};
	
	//Verify that the Departure destination is correct
	that.departureDestinationBookPresent= function(){
		return element(by.xpath(departureDestinationBookText)).getText();
	};
	
	//Verify that the Returning destination is correct
	that.returnDestinationBookPresent= function(){
		return element(by.xpath(returningDestinationBookText)).getText();
	};
	
	//Verify that the Departure flight is correct
	that.departureFlightBookPresent= function(){
		return element(by.xpath(departureFlightText)).getText();
	};
	
	//Verify that the Returning flight is correct
	that.returnFlightBookPresent= function(){
		return element(by.xpath(returnFlightText)).getText();
	};
	
	//Verify that the Class service of departure is correct
	that.classServiceDeparturePresent= function(){
		return element(by.xpath(classServiceDepartureText)).getText();
	};
	
	//Verify that the Class service of returning is correct
	that.classServiceReturnPresent= function(){
		return element(by.xpath(classServiceReturnText)).getText();
	};
	
	//Verify that Back to Flight button appears
	that.backToFlightButtonPresent= function(){
		return element(by.xpath(backToFlightButton)).isPresent();
	};

	//Verify that Back to Home button appears
	that.backToHomeButtonPresent= function(){
		return element(by.xpath(backToHomeButton)).isPresent();
	};

	//Verify that Log Out button appears
	that.logOutButtonPresent= function(){
		return element(by.xpath(logOutButton)).isPresent();
	};

	
	return that;
	
})();


