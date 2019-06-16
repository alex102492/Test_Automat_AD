/**********************************************************************************
* 
*Created by: Dumitrescu Alexandra
*
*Description: ITINERARY NO.2
*            - Round Trip
*            - One Passengers
*            - Economy Class
*            - No Preference Airlines
*
*
**********************************************************************************/

module.exports = (function(itineraryNo2) { 
	
	//--------------------------------------ITINERARY NO.2-------------------------------------------------------------------//
	itineraryNo2.flightNo2 = function (blueSkyesAirlines,blueSkyesAirlines,economyClass,economyClass,firstName,middleName,lastName,adress1,adress2,city,state,postalCode,adress1,adress2,city,state,postalCode,onePassenger,billingAddressMioveni,deliveryAddressMioveni){
		
		//-------------Page 1-----------------------------------------------------------
	
		//Verify the page name
		expect(browser.getTitle()).toEqual('Find a Flight: Mercury Tours:'); 
		
		//Click on Round Trip
		itineraryNo2.roundTripButtonClick();
		
		//Wait 1 sec
		browser.sleep(1000);
		
		//Select 1 passenger
		itineraryNo2.onePassengerOption();
		
		//Wait 1 sec
		browser.sleep(1000);
		
		//Departure - select departure city	
		itineraryNo2.departureINo2FromOption();
		
		//Wait 1 sec
		browser.sleep(1000);
		
		//From Month - select departure month
		itineraryNo2.fromMonthINo2Option();
		
		//Wait 1 sec
		browser.sleep(1000);
		
		//From Day - select departure day
		itineraryNo2.fromDayINo2Option();
		
		//Wait 1 sec
		browser.sleep(1000);
		
		//Arriving In - select returning city	
		itineraryNo2.arrivingInINo2Option();
		
		//Wait 1 sec
		browser.sleep(1000);
		
		//To Month - select returning month
		itineraryNo2.toMonthINo2Option();
		
		//Wait 1 sec
		browser.sleep(1000);
		
		//To Day - select returning day	
		itineraryNo2.toDayINo2Option();
		
		//Economy class - click 
		itineraryNo2.economyClassButtonClick();
		
		//Wait 1 sec
		browser.sleep(1000);
		
		//Airline - select No Preference	
		itineraryNo2.airlineNoPreferenceOption();
		
		//Wait 1 sec
		browser.sleep(1000);
		
		//Continue - click 
		itineraryNo2.continueButtonClick();
		
		//Wait 1 sec
		browser.sleep(1000);
		
		//----------------------Page 2-----------------------------------------------------
		
		//Verify the page name		
		expect(browser.getTitle()).toEqual('Select a Flight: Mercury Tours'); 
		
		//Verify that the Departure destination is correct
		expect(itineraryNo2.departureDestinationFlightPresent()).toEqual(itineraryNo2.departureCityINo2()+" to "+itineraryNo2.arrivingCityINo2());
		
		//Verify that the Returning destination is correct
		expect(itineraryNo2.returnDestinationFlightPresent()).toEqual(itineraryNo2.arrivingCityINo2()+" to "+itineraryNo2.departureCityINo2());
		
		//Verify that Select Flight image appears
		expect(itineraryNo2.selectFlightSignPresent).toBeTruthy();
		
		//Select Departure Flight BSA 361
		itineraryNo2.departureFlightBSA361ButtonClick();
		
		//Wait 1 sec
		browser.sleep(1000);
		
		//Select Return Flight BSA 630
		itineraryNo2.returnFlightBSA630ButtonClick();
		
		//Wait 1 sec
		browser.sleep(1000);
		

		//Continue - click 
		itineraryNo2.continueButtonClick();
		
		//Wait 1 sec
		browser.sleep(1000);
		
		//----------------------Page 3------------------------------------------------------
		
		//Verify the page name
		expect(browser.getTitle()).toEqual('Book a Flight: Mercury Tours'); 
		
		//Verify that Book a Flight image appears
		expect(itineraryNo2.bookAFlightSignPresent).toBeTruthy();
		
		//Verify that the Departure destination is correct
		expect(itineraryNo2.departureDestinationBookPresent()).toEqual(itineraryNo2.departureCityINo2()+" to "+itineraryNo2.arrivingCityINo2());
		
		//Verify that the Returning destination is correct
		expect(itineraryNo2.returnDestinationBookPresent()).toEqual(itineraryNo2.arrivingCityINo2()+" to "+itineraryNo2.departureCityINo2());
		
		//Verify that the Departure flight is correct
		expect(itineraryNo2.departureFlightBookPresent()).toContain(blueSkyesAirlines);
		
		//Verify that the Return flight is correct
		expect(itineraryNo2.returnFlightBookPresent()).toContain(blueSkyesAirlines);
		
		//Verify that the Class service of departure is correct
		expect(itineraryNo2.classServiceDeparturePresent()).toContain(economyClass);
		
		//Verify that the Class service of returning is correct
		expect(itineraryNo2.classServiceReturnPresent()).toContain(economyClass);
		
		//First Name Passenger 0 - input field clear and input		
		itineraryNo2.firstNameP0TicketFill(itineraryNo2.randomFirstNameP0Ticket);
		//console.log(itineraryNo2.randomFirstNameP0Ticket);
		
		//Wait 1 sec
		browser.sleep(1000);
		
		//Last Name Passenger 0 - input field clear and input		
		itineraryNo2.lastNameP0TicketFill(itineraryNo2.randomLastNameP0Ticket);
		//console.log(itineraryNo2.randomLastNameP0Ticket);
		
		//Wait 1 sec
		browser.sleep(1000);
		
		//Select Meal Passenger 0
		itineraryNo2.selectMealP0Option();
		
		//Wait 1 sec
		browser.sleep(1000);
		
		//Select Credit Card Master Card
		itineraryNo2.selectCreditCardINo2Option();
		
		//Wait 1 sec
		browser.sleep(1000);
		
		//Credit Card Number - input field clear and input		
		itineraryNo2.creditCardNumberFill (itineraryNo2.randomIntegerCreditCardNumberINo2);
		
		//Wait 1 sec
		browser.sleep(1000);
		
		//Select Expiration Month 
		itineraryNo2.selectExpirationMonthINo2Option();
		
		//Wait 1 sec
		browser.sleep(1000);
				
		//Select Expiration Year 
		itineraryNo2.selectExpirationYearINo2Option();
		
		//Wait 1 sec
		browser.sleep(1000);

		//If alert exists accept, if not continue
		browser.switchTo().alert().then(
			    function (alert) { alert.accept(); },
			    function (err) { }
			);
				
		//First Name - input field clear and input		
		itineraryNo2.firstNameCreditCardFill(firstName);
		
		//Wait 1 sec
		browser.sleep(1000);
		
		//Middle Name - input field clear and input		
		itineraryNo2.middleNameCreditCardFill(middleName);
		
		//Wait 1 sec
		browser.sleep(1000);
		
		//Last Name - input field clear and input		
		itineraryNo2.lastNameCreditCardFill(lastName);
		
		//Wait 1 sec
		browser.sleep(1000);
		
		//Select Ticketless Travel
		itineraryNo2.ticketlessTravelOption();
		
		//Wait 1 sec
		browser.sleep(1000);
		
		//Billing Adress 1 - input field clear and input		
		itineraryNo2.billingAdress1Fill(adress1);
		
		//Wait 1 sec
		browser.sleep(1000);
		
		//Billing Adress 2 - input field clear and input		
		itineraryNo2.billingAdress2Fill(adress2);
		
		//Wait 1 sec
		browser.sleep(1000);
		
		//Billing City - input field clear and input		
		itineraryNo2.billingCityFill(city);
		
		//Wait 1 sec
		browser.sleep(1000);
		
		//Billing State - input field clear and input		
		itineraryNo2.billingStateFill(state);
		
		//Wait 1 sec
		browser.sleep(1000);
		
		//Billing Postal Code - input field clear and input		
		itineraryNo2.billingPostalCodeFill(postalCode);
		
		//Wait 1 sec
		browser.sleep(1000);
		
		//Billing Country - select Romania		
		itineraryNo2.billingCountryRomaniaFill();
		
		//Wait 1 sec
		browser.sleep(1000);
		
		//Same as Billing Address option
		itineraryNo2.sameAsBillingAddressOption();
		
		//Wait 1 sec
		browser.sleep(1000);
		
		//Delivery Adress 1 - input field clear and input		
		itineraryNo2.deliveryAdress1Fill(adress1);
		
		//Wait 1 sec
		browser.sleep(1000);
		
		//Delivery Adress 2 - input field clear and input		
		itineraryNo2.deliveryAdress2Fill(adress2);
		
		//Wait 1 sec
		browser.sleep(1000);
		
		//Delivery City - input field clear and input		
		itineraryNo2.deliveryCityFill(city);
		
		//Wait 1 sec
		browser.sleep(1000);
		
		//Delivery State - input field clear and input		
		itineraryNo2.deliveryStateFill(state);
		
		//Wait 1 sec
		browser.sleep(1000);
		
		//Delivery Postal Code - input field clear and input		
		itineraryNo2.deliveryPostalCodeFill(postalCode);
		
		//Wait 1 sec
		browser.sleep(1000);
		
		//Delivery Country - select Romania		
		itineraryNo2.deliveryCountryRomaniaFill();
		
		//Wait 1 sec
		browser.sleep(1000);
		
		//Accept Alert
		browser.switchTo().alert().accept();
		
		//Wait 1 sec
		browser.sleep(1000);
		
		//Click on Secure purchase button 		
		itineraryNo2.securePurchaseButtonClick();
		
		//Wait 1 sec
		browser.sleep(1000);
		
		//----------------------Page 4------------------------------------------------------
		
		//Verify the page name
		expect(browser.getTitle()).toEqual('Flight Confirmation: Mercury Tours'); 
				
		//Verify that Flight confirmation image appears
		expect(itineraryNo2.flightConfirmationSignPresent).toBeTruthy();
		
		//Verify that the Departure destination is correct
		expect(itineraryNo2.departureDestinationConfirmPresent()).toEqual(itineraryNo2.departureCityINo2()+" to "+itineraryNo2.arrivingCityINo2());
		
		//Verify that the Returning destination is correct
		expect(itineraryNo2.returnDestinationConfirmPresent()).toEqual(itineraryNo2.arrivingCityINo2()+" to "+itineraryNo2.departureCityINo2());
		
		//Verify that the Number of passenger is correct
		expect(itineraryNo2.onePassengerPresent()).toEqual(onePassenger);
		
		//Verify that the Billing Address is correct
		expect(itineraryNo2.billingAddressPresent()).toEqual(billingAddressMioveni);

		//Verify that the Delivery Address is correct
		expect(itineraryNo2.deliveryAddressPresent()).toEqual(deliveryAddressMioveni);
		
		//Verify that Back To Flight button appears
		expect(itineraryNo2.backToFlightButtonPresent).toBeTruthy();
		
		//Verify that Back To Home button appears
		expect(itineraryNo2.backToHomeButtonPresent).toBeTruthy();
		
		//Verify that Log Out button appears
		expect(itineraryNo2.logOutButtonPresent).toBeTruthy();
		
	};//end function

	
	return itineraryNo2;
	
})(require('../02.Functions/basePageObj.js'));