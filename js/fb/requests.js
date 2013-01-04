//////////////////////////
//
// Requests JS File
// See the "Requests" section on https://developers.facebook.com/mobile
//
//////////////////////////

var friendIDs=[];
var nonAppFriendIDs = [];
var appFriendIDs = [];
//Send a request to friends have have logged into the app in the past, as well as friends that haven't
//function sendRequestBoth() {
//  FB.ui({
//    method: 'apprequests',
//    message: 'Check out Efficient Citizen !!',
//	link: 'http://207.145.109.42:8001/poc/poc9.html',
//	redirect_uri:'http://207.145.109.42:8001/poc/poc9.html',
//  }, 
//  function(response) {
//    console.log('sendRequestBoth response: ', response);
//  });
//}

//Send an invite to friends that haven't logged into the app yet
function sendAppInviteRequest() {
	console.log("sendAppInviteRequset");
  FB.ui({
    method: 'apprequests',
    suggestions: nonAppFriendIDs,
    message: 'Check out Efficient Citizen',
	link: 'http://localhost:8000/ReduceCO2/index.html',
	
  }, function(response) {
    console.log('sendInviteRequest UI response: ', response);
  });
}

////Send a request to friends that are already using the app
//function sendRequest() {
//  FB.ui({
//    method: 'apprequests',
//    suggestions: appFriendIDs,
//    message: 'Check out CarbonApp',
//  }, function(response) {
//    console.log('sendRequest UI response: ', response);
//  });
//}
//
////Send a request to a single friend that is using the app
//function sendRequestSingle() {
//  randNum = Math.floor ( Math.random() * friendIDs.length ); 
//
//  var friendID = friendIDs[randNum];
//  
//  FB.ui({
//    method: 'apprequests',
//    //Use the first friend returned
//    to: friendID,
//    message: 'Check out CarbonApp',
//  }, function(response) {
//    console.log('sendRequestSingle UI response: ', response);
//  });
//}