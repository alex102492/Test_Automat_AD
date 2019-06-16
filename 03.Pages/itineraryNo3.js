/**********************************************************************************
* 
*Created by: Dumitrescu Alexandra
*
*Description: ITINERAY NO.3
*            - Round Trip
*            - Four Passengers
*            - First Class
*            - Pangea Airlines
*
*
**********************************************************************************/

module.exports = (function(itineraryNo3) { 
	
	//--------------------------------------ITINERARY NO.3-------------------------------------------------------------------//
	itineraryNo3.flightNo3 = function (pangeaAirlines,pangeaAirlines,firstClass,firstClass,firstName,middleName,lastName,adress1N,adress2N,cityN,stateN,postalCodeN,adress1P,adress2P,cityP,stateP,postalCodeP,fourPassenger,billingAddressNewYork,deliveryAddressParis){
		
		//-------------Page 1-----------------------------------------------------------
	
		//Verify the page name
		expect(browser.getTitle()).toEqual('Find a Flight: Mercury Tours:'); 
		
		//Click on Round Trip
		itineraryNo3.roundTripButtonClick();
		
		//Wait 1 sec
		browser.sleep(1000);
		
		//Select 2 passenger
		itineraryNo3.fourPassengerOption();
		
		//Wait 1 sec
		browser.sleep(1000);
		
		//Departure - select departure city	
		itineraryNo3.departureINo3FromOption();
		
		//Wait 1 sec
		browser.sleep(1000);
		
		//From Month - select departure month	
		itineraryNo3.fromMonthINo3Option();
		
		//Wait 1 sec
		browser.sleep(1000);
		
		//From Day - select departure day	
		itineraryNo3.fromDayINo3Option();
		
		//Wait 1 sec
		browser.sleep(1000);
		
		//Arriving In - select returning city	
		itineraryNo3.arrivingInINo3Option();
		
		//Wait 1 sec
		browser.sleep(1000);
		
		//To Month - select returning month	
		itineraryNo3.toMonthINo3Option();
		
		//Wait 1 sec
		browser.sleep(1000);
		
		//To Day - select returning day
		itineraryNo3.toDayINo3Option();
		
		//Wait 1 sec
		browser.sleep(1000);
		
		//First class - click 
		itineraryNo3.firstClassButtonClick();
		
		//Airline - select Pangea Airlines	
		itineraryNo3.airlinePangeaAirlinesOption();
		
		//Wait 1 sec
		browser.sleep(1000);
		
		//Continue - click 
		itineraryNo3.continueButtonClick();
		
		//Wait 1 sec
		browser.sleep(1000);
		
		//----------------------Page 2-----------------------------------------------------
		
		//Verify the page name		
		expect(browser.getTitle()).toEqual('Select a Flight: Mercury Tours'); 
		
		//Verify that the Departure destination is correct
		expect(itineraryNo3.departureDestinationFlightPresent()).toEqual(itineraryNo3.departureCityINo3()+" to "+itineraryNo3.arrivingCityINo3());
		
		//Verify that the Returning destination is correct
		expect(itineraryNo3.returnDestinationFlightPresent()).toEqual(itineraryNo3.arrivingCityINo3()+" to "+itineraryNo3.departureCityINo3());
		
		//Verify that Select Flight image appears
		expect(itineraryNo3.selectFlightSignPresent).toBeTruthy();
		
		//Select Departure Flight Pangea 362
		itineraryNo3.departureFlightPangea362ButtonClick();
		
		//Wait 1 sec
		browser.sleep(1000);
		
		//Select Return Flight Pangea 632
		itineraryNo3.returnFlightPangea632ButtonClick();
		
		//Wait 1 sec
		browser.sleep(1000);		

		//Continue - click 
		itineraryNo3.continueButtonClick();
		
		//Wait 1 sec
		browser.sleep(1000);
		
		//----------------------Page 3------------------------------------------------------
		
		//Verify the page name
		expect(browser.getTitle()).toEqual('Book a Flight: Mercury Tours'); 
		
		//Verify that Book a Flight image appears
		expect(itineraryNo3.bookAFlightSignPresent).toBeTruthy();
		
		//Verify that the Departure destination is correct
		expect(itineraryNo3.departureDestinationBookPresent()).toEqual(itineraryNo3.departureCityINo3()+" to "+itineraryNo3.arrivingCityINo3());
		
		//Verify that the Returning destination is correct
		expect(itineraryNo3.returnDestinationBookPresent()).toEqual(itineraryNo3.arrivingCityINo3()+" to "+itineraryNo3.departureCityINo3());
		
		//Verify that the Departure flight is correct
		expect(itineraryNo3.departureFlightBookPresent()).toContain(pangeaAirlines);
		
		//Verify that the Return flight is correct
		expect(itineraryNo3.returnFlightBookPresent()).toContain(pangeaAirlines);
		
		//Verify that the Class service of departure is correct
		expect(itineraryNo3.classServiceDeparturePresent()).toContain(firstClass);
		
		//Verify that the Class service of returning is correct
		expect(itineraryNo3.classServiceReturnPresent()).toContain(firstClass);
		
		//First Name Passenger 0 - input field clear and input		
		itineraryNo3.firstNameP0TicketFill(itineraryNo3.randomFirstNameP0Ticket);
		
		//Wait 1 sec
		browser.sleep(1000);
		
		//Last Name Passenger 0 - input field clear and input		
		itineraryNo3.lastNameP0TicketFill(itineraryNo3.randomLastNameP0Ticket);

		//Wait 1 sec
		browser.sleep(1000);
		
		//Select Meal Passenger 0
		itineraryNo3.selectMealP0Option();
		
		//Wait 1 sec
		browser.sleep(1000);
		
		//First Name Passenger 1 - input field clear and input		
		itineraryNo3.firstNameP1TicketFill(itineraryNo3.randomFirstNameP1Ticket);
	
		//Wait 1 sec
		browser.sleep(1000);
		
		//Last Name Passenger 1 - input field clear and input		
		itineraryNo3.lastNameP1TicketFill(itineraryNo3.randomLastNameP1Ticket);
		
		//Wait 1 sec
		browser.sleep(1000);
		
		//Select Meal Passenger 1
		itineraryNo3.selectMealP1Option();
		
		//Wait 1 sec
		browser.sleep(1000);
		
		//First Name Passenger 2 - input field clear and input		
		itineraryNo3.firstNameP2TicketFill(itineraryNo3.randomFirstNameP2Ticket);
		
		//Wait 1 sec
		browser.sleep(1000);
		
		//Last Name Passenger 2 - input field clear and input		
		itineraryNo3.lastNameP2TicketFill(itineraryNo3.randomLastNameP2Ticket);

		//Wait 1 sec
		browser.sleep(1000);
		
		//Select Meal Passenger 2
		itineraryNo3.selectMealP2Option();
		
		//First Name Passenger 3 - input field clear and input		
		itineraryNo3.firstNameP3TicketFill(itineraryNo3.randomFirstNameP3Ticket);
		
		//Wait 1 sec
		browser.sleep(1000);
		
		//Last Name Passenger 3 - input field clear and input		
		itineraryNo3.lastNameP3TicketFill(itineraryNo3.randomLastNameP3Ticket);
		
		//Wait 1 sec
		browser.sleep(1000);
		
		//Select Meal Passenger 3
		itineraryNo3.selectMealP3Option();
		
		//Wait 1 sec
		browser.sleep(1000);
		
		//Select Credit Card 
		itineraryNo3.selectCreditCardINo3Option();
		
		//Wait 1 sec
		browser.sleep(1000);
		
		//Credit Card Number - input field clear and input		
		itineraryNo3.creditCardNumberFill (itineraryNo3.randomIntegerCreditCardNumberINo3);
		
		//Wait 1 sec
		browser.sleep(1000);
		
		//Select Expiration Month 
		itineraryNo3.selectExpirationMonthINo3Option();
		
		//Wait 1 sec
		browser.sleep(1000);
				
		//Select Expiration Year 
		itineraryNo3.selectExpirationYearINo3Option();
		
		//Wait 1 sec
		browser.sleep(1000);

		//If alert exists accept, if not continue
		browser.switchTo().alert().then(
			    function (alert) { alert.accept(); },
			    function (err) { }
			);
				
		//First Name - input field clear and input		
		itineraryNo3.firstNameCreditCardFill(firstName);
		
		//Wait 1 sec
		browser.sleep(1000);
		
		//Middle Name - input field clear and input		
		itineraryNo3.middleNameCreditCardFill(middleName);
		
		//Wait 1 sec
		browser.sleep(1000);
		
		//Last Name - input field clear and input		
		itineraryNo3.lastNameCreditCardFill(lastName);
		
		//Wait 1 sec
		browser.sleep(1000);
		
		//Billing Adress 1 - input field clear and input		
		itineraryNo3.billingAdress1Fill(adress1N);
		
		//Wait 1 sec
		browser.sleep(1000);
		
		//Billing Adress 2 - input field clear and input		
		itineraryNo3.billingAdress2Fill(adress2N);
		
		//Wait 1 sec
		browser.sleep(1000);
		
		//Billing City - input field clear and input		
		itineraryNo3.billingCityFill(cityN);
		
		//Wait 1 sec
		browser.sleep(1000);
		
		//Billing State - input field clear and input		
		itineraryNo3.billingStateFill(stateN);
		
		//Wait 1 sec
		browser.sleep(1000);
		
		//Billing Postal Code - input field clear and input		
		itineraryNo3.billingPostalCodeFill(postalCodeN);
		
		//Wait 1 sec
		browser.sleep(1000);
		
		//Billing Country - select United States		
		itineraryNo3.billingCountryUnitedStatesFill();
		
		//Wait 1 sec
		browser.sleep(1000);
		
		//Delivery Adress 1 - input field clear and input		
		itineraryNo3.deliveryAdress1Fill(adress1P);
		
		//Wait 1 sec
		browser.sleep(1000);
		
		//Delivery Adress 2 - input field clear and input		
		itineraryNo3.deliveryAdress2Fill(adress2P);
		
		//Wait 1 sec
		browser.sleep(1000);
		
		//Delivery City - input field clear and input		
		itineraryNo3.deliveryCityFill(cityP);
		
		//Wait 1 sec
		browser.sleep(1000);
		
		//Delivery State - input field clear and input		
		itineraryNo3.deliveryStateFill(stateP);
		
		//Wait 1 sec
		browser.sleep(1000);
		
		//Delivery Postal Code - input field clear and input		
		itineraryNo3.deliveryPostalCodeFill(postalCodeP);
		
		//Wait 1 sec
		browser.sleep(1000);
		
		//Delivery Country - select France		
		itineraryNo3.deliveryCountryFranceFill();
		
		//Wait 1 sec
		browser.sleep(1000);
		
		//Accept Alert
		browser.switchTo().alert().accept();
		
		//Click on Secure purchase button 		
		itineraryNo3.securePurchaseButtonClick();
		
		//Wait 1 sec
		browser.sleep(1000);
		
		//----------------------Page 4------------------------------------------------------
		
		//Verify the page name
		expect(browser.getTitle()).toEqual('Flight Confirmation: Mercury Tours'); 
				
		//Verify that Flight confirmation image appears
		expect(itineraryNo3.flightConfirmationSignPresent).toBeTruthy();
		
		//Verify that the Departure destination is correct
		expect(itineraryNo3.departureDestinationConfirmPresent()).toEqual(itineraryNo3.departureCityINo3()+" to "+itineraryNo3.arrivingCityINo3());
		
		//Verify that the Returning destination is correct
		expect(itineraryNo3.returnDestinationConfirmPresent()).toEqual(itineraryNo3.arrivingCityINo3()+" to "+itineraryNo3.departureCityINo3());
		
		//Verify that the Number of passenger is correct
		expect(itineraryNo3.fourPassengerPresent()).toEqual(fourPassenger);
		
		//Verify that the Billing Address is correct
		expect(itineraryNo3.billingAddressPresent()).toEqual(billingAddressNewYork);

		//Verify that the Delivery Address is correct
		expect(itineraryNo3.deliveryAddressPresent()).toEqual(deliveryAddressParis);
		
		//Verify that Back To Flight button appears
		expect(itineraryNo3.backToFlightButtonPresent).toBeTruthy();
		
		//Verify that Back To Home button appears
		expect(itineraryNo3.backToHomeButtonPresent).toBeTruthy();
		
		//Verify that Log Out button appears
		expect(itineraryNo3.logOutButtonPresent).toBeTruthy();
		
	};//end function

	
	return itineraryNo3;
	
})(require('../02.Functions/basePageObj.js'));