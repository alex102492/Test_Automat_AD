/**********************************************************************************
* 
*Created by: Dumitrescu Alexandra
*
*Description: ITINERARY NO.4
*            - One Way
*            - Three Passengers
*            - Business Class
*            - Unified Airlines
*
*
**********************************************************************************/

module.exports = (function(itineraryNo4) { 
	
	//--------------------------------------ITINERARY NO.4-------------------------------------------------------------------//
	itineraryNo4.flightNo4 = function (unifiedAirlines,unifiedAirlines,businessClass,businessClass,firstName,middleName,lastName,adress1,adress2,city,state,postalCode,adress1N,adress2N,cityN,stateN,postalCodeN,threePassenger,billingAddressMioveni,deliveryAddressNewYork){
		
		//-------------Page 1-----------------------------------------------------------
	
		//Verify the page name
		expect(browser.getTitle()).toEqual('Find a Flight: Mercury Tours:'); 
		
		//Click on Round Trip
		itineraryNo4.oneWayButtonClick();
		
		//Wait 1 sec
		browser.sleep(1000);
		
		//Select 2 passenger
		itineraryNo4.threePassengerOption();
		
		//Wait 1 sec
		browser.sleep(1000);
		
		//Departure - select departure city	
		itineraryNo4.departureINo4FromOption();
		
		//Wait 1 sec
		browser.sleep(1000);
		
		//From Month - select departure month	
		itineraryNo4.fromMonthINo4Option();
		
		//Wait 1 sec
		browser.sleep(1000);
		
		//From Day - select departure day	
		itineraryNo4.fromDayINo4Option();
		
		//Wait 1 sec
		browser.sleep(1000);
		
		//Arriving In - select returning city	
		itineraryNo4.arrivingInINo4Option();
		
		//Wait 1 sec
		browser.sleep(1000);
		
		//To Month - select returning month	
		itineraryNo4.toMonthINo4Option();
		
		//To Day - select returning day
		itineraryNo4.toDayINo4Option();
		
		//First class - click 
		itineraryNo4.businessClassButtonClick();
		
		//Wait 1 sec
		browser.sleep(1000);
		
		//Airline - select Unified Airlines	
		itineraryNo4.airlineUnifiedAirlinesOption();
		
		//Continue - click 
		itineraryNo4.continueButtonClick();
		
		//Wait 1 sec
		browser.sleep(1000);
		
		//----------------------Page 2-----------------------------------------------------
		
		//Verify the page name		
		expect(browser.getTitle()).toEqual('Select a Flight: Mercury Tours'); 
		
		//Verify that the Departure destination is correct
		expect(itineraryNo4.departureDestinationFlightPresent()).toEqual(itineraryNo4.departureCityINo4()+" to "+itineraryNo4.arrivingCityINo4());
		
		//Verify that the Returning destination is correct
		expect(itineraryNo4.returnDestinationFlightPresent()).toEqual(itineraryNo4.arrivingCityINo4()+" to "+itineraryNo4.departureCityINo4());
		
		//Verify that Select Flight image appears
		expect(itineraryNo4.selectFlightSignPresent).toBeTruthy();
		
		//Select Departure Flight Unified 363
		itineraryNo4.departureFlightUnified363ButtonClick();
		
		//Wait 1 sec
		browser.sleep(1000);
		
		//Select Return Flight Unified 633
		itineraryNo4.returnFlightUnified633ButtonClick();
		

		//Continue - click 
		itineraryNo4.continueButtonClick();
		
		//Wait 1 sec
		browser.sleep(1000);
		
		//----------------------Page 3------------------------------------------------------
		
		//Verify the page name
		expect(browser.getTitle()).toEqual('Book a Flight: Mercury Tours'); 
		
		//Verify that Book a Flight image appears
		expect(itineraryNo4.bookAFlightSignPresent).toBeTruthy();
		
		//Verify that the Departure destination is correct
		expect(itineraryNo4.departureDestinationBookPresent()).toEqual(itineraryNo4.departureCityINo4()+" to "+itineraryNo4.arrivingCityINo4());
		
		//Verify that the Returning destination is correct
		expect(itineraryNo4.returnDestinationBookPresent()).toEqual(itineraryNo4.arrivingCityINo4()+" to "+itineraryNo4.departureCityINo4());
		
		//Verify that the Departure flight is correct
		expect(itineraryNo4.departureFlightBookPresent()).toContain(unifiedAirlines);
		
		//Verify that the Return flight is correct
		expect(itineraryNo4.returnFlightBookPresent()).toContain(unifiedAirlines);
		
		//Verify that the Class service of departure is correct
		expect(itineraryNo4.classServiceDeparturePresent()).toContain(businessClass);
		
		//Verify that the Class service of returning is correct
		expect(itineraryNo4.classServiceReturnPresent()).toContain(businessClass);
		
		//First Name Passenger 0 - input field clear and input		
		itineraryNo4.firstNameP0TicketFill(itineraryNo4.randomFirstNameP0Ticket);
		
		//Wait 1 sec
		browser.sleep(1000);
		
		//Last Name Passenger 0 - input field clear and input		
		itineraryNo4.lastNameP0TicketFill(itineraryNo4.randomLastNameP0Ticket);

		//Wait 1 sec
		browser.sleep(1000);
		
		//Select Meal Passenger 0
		itineraryNo4.selectMealP0Option();
		
		//Wait 1 sec
		browser.sleep(1000);
		
		//First Name Passenger 1 - input field clear and input		
		itineraryNo4.firstNameP1TicketFill(itineraryNo4.randomFirstNameP1Ticket);

		//Wait 1 sec
		browser.sleep(1000);
		
		//Last Name Passenger 1 - input field clear and input		
		itineraryNo4.lastNameP1TicketFill(itineraryNo4.randomLastNameP1Ticket);
	
		//Wait 1 sec
		browser.sleep(1000);
		
		//Select Meal Passenger 1
		itineraryNo4.selectMealP1Option();
		
		//Wait 1 sec
		browser.sleep(1000);
		
		//First Name Passenger 2 - input field clear and input		
		itineraryNo4.firstNameP2TicketFill(itineraryNo4.randomFirstNameP2Ticket);

		//Wait 1 sec
		browser.sleep(1000);
		
		//Last Name Passenger 2 - input field clear and input		
		itineraryNo4.lastNameP2TicketFill(itineraryNo4.randomLastNameP2Ticket);

		//Wait 1 sec
		browser.sleep(1000);
		
		//Select Meal Passenger 2
		itineraryNo4.selectMealP2Option();
		
		//Wait 1 sec
		browser.sleep(1000);
		
		//Select Credit Card 
		itineraryNo4.selectCreditCardINo4Option();
		
		//Wait 1 sec
		browser.sleep(1000);
		
		//Credit Card Number - input field clear and input		
		itineraryNo4.creditCardNumberFill (itineraryNo4.randomIntegerCreditCardNumberINo4);
		
		//Wait 1 sec
		browser.sleep(1000);
		
		//Select Expiration Month 
		itineraryNo4.selectExpirationMonthINo4Option();
		
		//Wait 1 sec
		browser.sleep(1000);
				
		//Select Expiration Year 
		itineraryNo4.selectExpirationYearINo4Option();
		
		//Wait 1 sec
		browser.sleep(1000);
		
		//If alert exists accept, if not continue
		browser.switchTo().alert().then(
			    function (alert) { alert.accept(); },
			    function (err) { }
			);
				
		//First Name - input field clear and input		
		itineraryNo4.firstNameCreditCardFill(firstName);
		
		//Wait 1 sec
		browser.sleep(1000);
		
		//Middle Name - input field clear and input		
		itineraryNo4.middleNameCreditCardFill(middleName);
		
		//Wait 1 sec
		browser.sleep(1000);
		
		//Last Name - input field clear and input		
		itineraryNo4.lastNameCreditCardFill(lastName);
		
		//Wait 1 sec
		browser.sleep(1000);
		
		//Billing Adress 1 - input field clear and input		
		itineraryNo4.billingAdress1Fill(adress1);
		
		//Wait 1 sec
		browser.sleep(1000);
		
		//Billing Adress 2 - input field clear and input		
		itineraryNo4.billingAdress2Fill(adress2);
		
		//Wait 1 sec
		browser.sleep(1000);
		
		//Billing City - input field clear and input		
		itineraryNo4.billingCityFill(city);
		
		//Wait 1 sec
		browser.sleep(1000);
		
		//Billing State - input field clear and input		
		itineraryNo4.billingStateFill(state);
		
		//Wait 1 sec
		browser.sleep(1000);
		
		//Billing Postal Code - input field clear and input		
		itineraryNo4.billingPostalCodeFill(postalCode);
		
		//Wait 1 sec
		browser.sleep(1000);
		
		//Billing Country - select Romania		
		itineraryNo4.billingCountryRomaniaFill();
		
		//Wait 1 sec
		browser.sleep(1000);
		
		//Delivery Adress 1 - input field clear and input		
		itineraryNo4.deliveryAdress1Fill(adress1N);
		
		//Wait 1 sec
		browser.sleep(1000);
		
		//Delivery Adress 2 - input field clear and input		
		itineraryNo4.deliveryAdress2Fill(adress2N);
		
		//Wait 1 sec
		browser.sleep(1000);
		
		//Delivery City - input field clear and input		
		itineraryNo4.deliveryCityFill(cityN);
		
		//Wait 1 sec
		browser.sleep(1000);
		
		//Delivery State - input field clear and input		
		itineraryNo4.deliveryStateFill(stateN);
		
		//Wait 1 sec
		browser.sleep(1000);
		
		//Delivery Postal Code - input field clear and input		
		itineraryNo4.deliveryPostalCodeFill(postalCodeN);
		
		//Wait 1 sec
		browser.sleep(1000);
		
		//Delivery Country - select United States		
		itineraryNo4.deliveryCountryUnitedStatesFill();
		
		//Wait 1 sec
		browser.sleep(1000);
		
		
		//Click on Secure purchase button 		
		itineraryNo4.securePurchaseButtonClick();
		
		//Wait 1 sec
		browser.sleep(1000);
		
		//----------------------Page 4------------------------------------------------------
		
		//Verify the page name
		expect(browser.getTitle()).toEqual('Flight Confirmation: Mercury Tours'); 
				
		//Verify that Flight confirmation image appears
		expect(itineraryNo4.flightConfirmationSignPresent).toBeTruthy();
		
		//Verify that the Departure destination is correct
		expect(itineraryNo4.departureDestinationConfirmPresent()).toEqual(itineraryNo4.departureCityINo4()+" to "+itineraryNo4.arrivingCityINo4());
		
		//Verify that the Returning destination is correct
		expect(itineraryNo4.returnDestinationConfirmPresent()).toEqual(itineraryNo4.arrivingCityINo4()+" to "+itineraryNo4.departureCityINo4());
		
		//Verify that the Number of passenger is correct
		expect(itineraryNo4.threePassengerPresent()).toEqual(threePassenger);
		
		//Verify that the Billing Address is correct
		expect(itineraryNo4.billingAddressPresent()).toEqual(billingAddressMioveni);

		//Verify that the Delivery Address is correct
		expect(itineraryNo4.deliveryAddressPresent()).toEqual(deliveryAddressNewYork);
		
		//Verify that Back To Flight button appears
		expect(itineraryNo4.backToFlightButtonPresent).toBeTruthy();
		
		//Verify that Back To Home button appears
		expect(itineraryNo4.backToHomeButtonPresent).toBeTruthy();
		
		//Verify that Log Out button appears
		expect(itineraryNo4.logOutButtonPresent).toBeTruthy();
		
	};//end function

	
	return itineraryNo4;
	
})(require('../02.Functions/basePageObj.js'));