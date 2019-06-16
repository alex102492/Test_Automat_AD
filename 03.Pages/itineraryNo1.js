/**********************************************************************************
* 
*Created by: Dumitrescu Alexandra
*
*Description: ITINERARY NO.1 
*            - Round Trip
*            - Two Passengers
*            - Business Class
*            - Blue Skies Airlines
*
*
**********************************************************************************/

module.exports = (function(itineraryNo1) { 
	
	//--------------------------------------ITINERARY NO.1-------------------------------------------------------------------//
	itineraryNo1.flightNo1 = function (blueSkyesAirlines,blueSkyesAirlines,businessClass,businessClass,firstName,middleName,lastName,adress1P,adress2P,cityP,stateP,postalCodeP,adress1,adress2,city,state,postalCode,twoPassenger,billingAddressParis,deliveryAddressMioveni){
		
		//-------------Page 1-----------------------------------------------------------
	
		//Verify the page name
		expect(browser.getTitle()).toEqual('Find a Flight: Mercury Tours:'); 
		
		//Click on Round Trip
		itineraryNo1.roundTripButtonClick();
		
		//Wait 1 sec
		browser.sleep(1000);
		
		//Select 2 passenger
		itineraryNo1.twoPassengerOption();
		
		//Wait 1 sec
		browser.sleep(1000);
		
		//Departure - select departure city
		itineraryNo1.departureINo1FromOption();
		
		//Wait 1 sec
		browser.sleep(1000);
		
		//From Month - select departure month
		itineraryNo1.fromMonthINo1Option();
		
		//Wait 1 sec
		browser.sleep(1000);
		
		//From Day - select departure day
		itineraryNo1.fromDayINo1Option();
		
		//Wait 1 sec
		browser.sleep(1000);
		
		//Arriving In - select returning city
		itineraryNo1.arrivingInINo1Option();
		
		//Wait 1 sec
		browser.sleep(1000);
		
		//To Month - select returning month	
		itineraryNo1.toMonthINo1Option();
		
		//Wait 1 sec
		browser.sleep(1000);
		
		//To Day - select returning month
		itineraryNo1.toDayINo1Option();
		
		//Wait 1 sec
		browser.sleep(1000);
		
		//Business class - click 
		itineraryNo1.businessClassButtonClick();
		
		//Wait 1 sec
		browser.sleep(1000);
		
		//Airline - select Blue Skies Airlines	
		itineraryNo1.airlineBlueSkiesAirlinesOption();
		
		//Wait 1 sec
		browser.sleep(1000);
		
		//Continue - click 
		itineraryNo1.continueButtonClick();
		
		//Wait 1 sec
		browser.sleep(1000);
		
		//----------------------Page 2-----------------------------------------------------
		
		//Verify the page name		
		expect(browser.getTitle()).toEqual('Select a Flight: Mercury Tours'); 
		
		//Verify that the Departure destination is correct
		expect(itineraryNo1.departureDestinationFlightPresent()).toEqual(itineraryNo1.departureCityINo1()+" to "+itineraryNo1.arrivingCityINo1());
		
		//Verify that the Returning destination is correct
		expect(itineraryNo1.returnDestinationFlightPresent()).toEqual(itineraryNo1.arrivingCityINo1()+" to "+itineraryNo1.departureCityINo1());
		
		//Verify that Select Flight image appears
		expect(itineraryNo1.selectFlightSignPresent).toBeTruthy();
		
		//Select Departure Flight BSA 360
		itineraryNo1.departureFlightBSA360ButtonClick();
		
		//Wait 1 sec
		browser.sleep(1000);
		
		//Select Return Flight BSA 631
		itineraryNo1.returnFlightBSA631ButtonClick();
		
		//Wait 1 sec
		browser.sleep(1000);

		//Continue - click 
		itineraryNo1.continueButtonClick();
		
		//Wait 1 sec
		browser.sleep(1000);
		
		//----------------------Page 3------------------------------------------------------
		
		//Verify the page name
		expect(browser.getTitle()).toEqual('Book a Flight: Mercury Tours'); 
		
		//Verify that Book a Flight image appears
		expect(itineraryNo1.bookAFlightSignPresent).toBeTruthy();
		
		//Verify that the Departure destination is correct
		expect(itineraryNo1.departureDestinationBookPresent()).toEqual(itineraryNo1.departureCityINo1()+" to "+itineraryNo1.arrivingCityINo1());
		
		//Verify that the Returning destination is correct
		expect(itineraryNo1.returnDestinationBookPresent()).toEqual(itineraryNo1.arrivingCityINo1()+" to "+itineraryNo1.departureCityINo1());
		
		//Verify that the Departure flight is correct
		expect(itineraryNo1.departureFlightBookPresent()).toContain(blueSkyesAirlines);
		
		//Verify that the Return flight is correct
		expect(itineraryNo1.returnFlightBookPresent()).toContain(blueSkyesAirlines);
		
		//Verify that the Class service of departure is correct
		expect(itineraryNo1.classServiceDeparturePresent()).toContain(businessClass);
		
		//Verify that the Class service of returning is correct
		expect(itineraryNo1.classServiceReturnPresent()).toContain(businessClass);
		
		//First Name Passenger 0 - input field clear and input		
		itineraryNo1.firstNameP0TicketFill(itineraryNo1.randomFirstNameP0Ticket);
		//console.log(itineraryNo1.randomFirstNameP0Ticket);
		
		//Wait 1 sec
		browser.sleep(1000);
		
		//Last Name Passenger 0 - input field clear and input		
		itineraryNo1.lastNameP0TicketFill(itineraryNo1.randomLastNameP0Ticket);
		//console.log(itineraryNo1.randomLastNameP0Ticket);
		
		//Wait 1 sec
		browser.sleep(1000);
		
		//Select Meal Passenger 0
		itineraryNo1.selectMealP0Option();
		
		//Wait 1 sec
		browser.sleep(1000);
		
		//First Name Passenger 1 - input field clear and input		
		itineraryNo1.firstNameP1TicketFill(itineraryNo1.randomFirstNameP1Ticket);
		//console.log(itineraryNo1.randomFirstNameP0Ticket);
		
		//Wait 1 sec
		browser.sleep(1000);
		
		//Last Name Passenger 1 - input field clear and input		
		itineraryNo1.lastNameP1TicketFill(itineraryNo1.randomLastNameP1Ticket);
		//console.log(itineraryNo1.randomLastNameP0Ticket);
		
		//Wait 1 sec
		browser.sleep(1000);
		
		//Select Meal Passenger 1
		itineraryNo1.selectMealP1Option();
		
		//Wait 1 sec
		browser.sleep(1000);
		
		//Select Credit Card 
		itineraryNo1.selectCreditCardINo1Option();
		
		//Wait 1 sec
		browser.sleep(1000);
		
		//Credit Card Number - input field clear and input		
		itineraryNo1.creditCardNumberFill (itineraryNo1.randomIntegerCreditCardNumberINo1);
		
		//Wait 1 sec
		browser.sleep(1000);
		
		//Select Expiration Month 
		itineraryNo1.selectExpirationMonthINo1Option();
		
		//Wait 1 sec
		browser.sleep(1000);
				
		//Select Expiration Year 
		itineraryNo1.selectExpirationYearINo1Option();
		
		//Wait 1 sec
		browser.sleep(1000);

		//If alert exists accept, if not continue
		browser.switchTo().alert().then(
			    function (alert) { alert.accept(); },
			    function (err) { }
			);
				
		//First Name - input field clear and input		
		itineraryNo1.firstNameCreditCardFill(firstName);
		
		//Wait 1 sec
		browser.sleep(1000);
		
		//Middle Name - input field clear and input		
		itineraryNo1.middleNameCreditCardFill(middleName);
		
		//Wait 1 sec
		browser.sleep(1000);
		
		//Last Name - input field clear and input		
		itineraryNo1.lastNameCreditCardFill(lastName);
		
		//Wait 1 sec
		browser.sleep(1000);
		
		//Billing Adress 1 - input field clear and input		
		itineraryNo1.billingAdress1Fill(adress1P);
		
		//Wait 1 sec
		browser.sleep(1000);
		
		//Billing Adress 2 - input field clear and input		
		itineraryNo1.billingAdress2Fill(adress2P);
		
		//Wait 1 sec
		browser.sleep(1000);		
		
		//Billing City - input field clear and input		
		itineraryNo1.billingCityFill(cityP);
		
		//Wait 1 sec
		browser.sleep(1000);
		
		//Billing State - input field clear and input		
		itineraryNo1.billingStateFill(stateP);
		
		//Wait 1 sec
		browser.sleep(1000);
		
		//Billing Postal Code - input field clear and input		
		itineraryNo1.billingPostalCodeFill(postalCodeP);
		
		//Wait 1 sec
		browser.sleep(1000);
		
		//Billing Country - select France		
		itineraryNo1.billingCountryFranceFill();
		
		//Wait 1 sec
		browser.sleep(1000);
		
		//Delivery Adress 1 - input field clear and input		
		itineraryNo1.deliveryAdress1Fill(adress1);
		
		//Wait 1 sec
		browser.sleep(1000);
		
		//Delivery Adress 2 - input field clear and input		
		itineraryNo1.deliveryAdress2Fill(adress2);
		
		//Wait 1 sec
		browser.sleep(1000);
		
		//Delivery City - input field clear and input		
		itineraryNo1.deliveryCityFill(city);
		
		//Wait 1 sec
		browser.sleep(1000);
		
		//Delivery State - input field clear and input		
		itineraryNo1.deliveryStateFill(state);
		
		//Wait 1 sec
		browser.sleep(1000);
		
		//Delivery Postal Code - input field clear and input		
		itineraryNo1.deliveryPostalCodeFill(postalCode);
		
		//Wait 1 sec
		browser.sleep(1000);
		
		//Delivery Country - select Romania		
		itineraryNo1.deliveryCountryRomaniaFill();
		
		//Wait 1 sec
		browser.sleep(1000);
		
		//Accept Alert
		browser.switchTo().alert().accept();
		
		//Click on Secure purchase button 		
		itineraryNo1.securePurchaseButtonClick();
		
		//Wait 1 sec
		browser.sleep(1000);
		
		//----------------------Page 4------------------------------------------------------
		
		//Verify the page name
		expect(browser.getTitle()).toEqual('Flight Confirmation: Mercury Tours'); 
				
		//Verify that Flight confirmation image appears
		expect(itineraryNo1.flightConfirmationSignPresent).toBeTruthy();
		
		//Verify that the Departure destination is correct
		expect(itineraryNo1.departureDestinationConfirmPresent()).toEqual(itineraryNo1.departureCityINo1()+" to "+itineraryNo1.arrivingCityINo1());
		
		//Verify that the Returning destination is correct
		expect(itineraryNo1.returnDestinationConfirmPresent()).toEqual(itineraryNo1.arrivingCityINo1()+" to "+itineraryNo1.departureCityINo1());
		
		//Verify that the Number of passenger is correct
		expect(itineraryNo1.twoPassengerPresent()).toEqual(twoPassenger);
		
		//Verify that the Billing Address is correct
		expect(itineraryNo1.billingAddressPresent()).toEqual(billingAddressParis);

		//Verify that the Delivery Address is correct
		expect(itineraryNo1.deliveryAddressPresent()).toEqual(deliveryAddressMioveni);
		
		//Verify that Back To Flight button appears
		expect(itineraryNo1.backToFlightButtonPresent).toBeTruthy();
		
		//Verify that Back To Home button appears
		expect(itineraryNo1.backToHomeButtonPresent).toBeTruthy();
		
		//Verify that Log Out button appears
		expect(itineraryNo1.logOutButtonPresent).toBeTruthy();
		
	};//end function

	
	return itineraryNo1;
	
})(require('../02.Functions/basePageObj.js'));