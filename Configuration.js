//var Jasmine2HtmlReporter = require('C:/Users/pw02327/eclipse-workspace/Test_Automat_AD/node_modules/protractor-jasmine2-screenshot-reporter');
var Jasmine2HtmlReporter = require('C:/Users/pw02327/eclipse-workspace/Test_Automat_AD/node_modules/protractor-jasmine2-html-reporter');

//definire variabila care se va folosi in functia de on prepare
var timeStamp = new Date().getTime();

exports.config={
		//fisierul este vizibil in momentul cand e apelat
		
	   //seleniumAddress:'http://localhost:4444/wd/hub',	//seteaza conexiunea la server-ul intern
	   directConnect: true, 	//selecteaza driver-ul chrome
	   

	   multiCapabilities: [
    	       	  
    	   {'browserName': 'chrome',
    			'chromeOptions': {
    		    'args': ['disable-infobars']
    		   }
    		  },
    		   /* {'browserName': 'firefox',
    			'moz:firefoxOptions': {
    		    'args': ['--safe-mode']
    		  }
    			}*/
    
    	   

],
       
       
       
       framework:'jasmine',
       
       onPrepare: function() {
       
       		browser.driver.manage().window().maximize(); //maximizeaza fereastra
       	
       		jasmine.getEnv().addReporter(
       				

       				new Jasmine2HtmlReporter ({
       					
       					savePath: 'C:/Users/pw02327/eclipse-workspace/Test_Automat_AD/target/screenshots',
       						showSummary: true,
       						showQuickLinks: true,
       						showConfiguration: true,
       						screenshotsFolder: 'images',
       						takeScreenshots: false,
       						takeScreenshotsOnlyOnFailures: false,
       						fixedScreenshotName: true,
       						ignoreSkippedSpecs: true,
       						cleanDestination: false,
       						consolidate: true,
       						consolidateAll: true,
       						showPassed: true,
       						fileNameSeparator:'_',
       						preserveDirectory: true,
       						fileNameDataSuffix: true,
       						fileName: 'Protractor-Execution-Report-',
       						
       				})
       			/*	new Jasmine2HtmlReporter ({
       					
       					savePath: 'C:\Users\pw02327\eclipse-workspace\Test_Automat_AD\taget\screenshots',
       						showSummary: true,
       						showQuickLinks: true,
       						showConfiguration: true,
       						screenshotsFolder: 'images',
       						takeScreenshots: true,
       						takeScreenshotsOnlyOnFailures: true,
       						fixedScreenshotName: true,
       						ignoreSkippedSpecs: true,
       						consolidate: true,
       						consolidateAll: true,
       						preserveDirectory: true,
       						fileName: 'Protractor-Execution-Report-'+ timeStamp
       						
       				})    */   				
       		);
       },
       
       		jasmineNodeOpts: {
       				showColors: true,
       				isVerbose: true,
       				realtimeFailure: true,
       				includeStackTrace: true,
       				defaultTimeoutInterval: 500000 
       		},
       		
       		//specs: ['../'] //la teste individuale nu se pune virgula, .. - pointeaza in ramura din spate
       		
       		//specs: ['../Test_Automat_AD/01.Scenarios/spec_RegisterPage.js']
       		suites: {
       			suite: [
       				'../Test_Automat_AD/01.Scenarios/spec_RegisterPage.js',
       				'../Test_Automat_AD/01.Scenarios/spec_Itinerary.js'		
       			]
       		},   
       		
}