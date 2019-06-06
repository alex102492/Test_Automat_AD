/**********************************************************************************
* 
*Created by: Dumitrescu Alexandra
*
*Description: ITINERARI NO.1
*
*
*
**********************************************************************************/


module.exports = (function(itineraryTwoWayBusiness) { 
	
	//--------------------------------------ITINERARI NO.1-------------------------------------------------------------------//
	itineraryTwoWayBusiness.flightTwoWayBusiness = function (){
		
		//Click on Round Trip
		itineraryTwoWayBusiness.roundTripButtonClick();
		
		//Select 1 passenger
		itineraryTwoWayBusiness.onePassengerOption();
		
		//Departure - select Paris	
		itineraryTwoWayBusiness.departureFromParisOption();
		
		//From Month - select May	
		itineraryTwoWayBusiness.fromMonthMayOption();
		
		//From Day - select 1st	
		itineraryTwoWayBusiness.fromDayOneOption();
		
		//Arriving In - select Acapulco	
		itineraryTwoWayBusiness.arrivingInAcapulcoOption();
		
		//To Month - select May	
		itineraryTwoWayBusiness.toMonthMayOption();
		
		//To Day - select 1st	
		itineraryTwoWayBusiness.toDaySevenOption();
		
		//Economy class - click 
		itineraryTwoWayBusiness.economyClassButtonClick();
		
		//Airline - select No Preference	
		itineraryTwoWayBusiness.airlineNoPreferenceOption();
		
		//Continue - click 
		itineraryTwoWayBusiness.continueButtonClick();
		
		//Wait 10 sec
		browser.sleep(10000);
		
		
		
		
		
	};//end function

	
	return itineraryTwoWayBusiness;
	
})(require('../02.Functions/basePageObj.js'));