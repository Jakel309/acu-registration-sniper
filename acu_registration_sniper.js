// ==UserScript==
// @name       Registration Sniper
// @namespace  http://use.i.E.your.homepage/
// @version    2.0
// @description  Registers user for classes in under a second
// @include https://jada.acu.edu:4445/pls/ssbprod/*
// @copyright  2012+, Evan Hopkins, Antony Liang, Travis Cramer
// ==/UserScript==

//INSTALLATION: Use either Greasemonkey for Firefox or Tampermonkey for Chrome to run the script.
//Click new script. Copy and paste the entire text of this document. 

//USAGE: Add in the CRN numbers of your classes starting on line 24. Replace the 'XXXXX'
//with your classes CRN. Load script on the 'Student' tab of the 'Banner Self Service' tab
//of My Marist. The script will launch upon clicking the 'add or drop classes' option.
//After clicking on that link, submit your registration code, then go back to menu then go back to
//'add or drop classes' and it will start running.

//verifies user is on pre-registration page and then adds CRN's then submits form
//console.log(window.location.href);
if(window.location.href == 'https://jada.acu.edu:4445/pls/ssbprod/bwskfreg.P_AltPin'){
    //enter the hour and minute of your registration
    var registrationHour = 15;
    
    //gets the current system hour and minute
    var currentDate = new Date();
    var currentHour = currentDate.getHours();
        
    //continuously refreshes the page until the it is time
    if((currentHour <= registrationHour)){
        //console.log("Current time: " + currentHour);
        //console.log("Registration time: " + registrationHour);
        location.reload();
        }
    else{
                //Comment out the lines you are not using.
                document.getElementById('crn_id1').value = "XXXXX";
                document.getElementById('crn_id2').value = "XXXXX";
                document.getElementById('crn_id3').value = "XXXXX";
                document.getElementById('crn_id4').value = "XXXXX";
                document.getElementById('crn_id5').value = "XXXXX";
                document.getElementById('crn_id6').value = "XXXXX";
                //document.getElementById('crn_id7').value = "XXXXX";
                //document.getElementById('crn_id8').value = "XXXXX";
                //document.getElementById('crn_id9').value = "XXXXX";
                //document.getElementById('crn_id10').value = "XXXXX";
                //Change the CRN numbers to desired classes
    
                document.getElementsByName('REG_BTN')[0].click();
                //submits form        
    }

        //verifies user is on post-registration page and alerts completion
}else if(window.location == 'https://jada.acu.edu:4445/pls/ssbprod/bwckcoms.P_Regs'){
        alert("Success!");
}
