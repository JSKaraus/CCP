

$(document).ready(function () { 
    /* Replace the REPLACE-ME below with your instance alias */
    connect.core.initCCP(containerDiv, {
        ccpUrl:"https://test-jskaraus.awsapps.com/connect/ccp#/",
        loginPopup: false,
        softphone: {
            allowFramedSoftphone: true
        }
    });


});

