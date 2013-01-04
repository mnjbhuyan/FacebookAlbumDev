// JavaScript Document
//////////////////////////
//
// Newsfeed JS File
// See the "News Feed" section on https://developers.facebook.com/mobile
//
//////////////////////////
var friendIDs=[];
var randNum;
//Publish a story to the user's own wall
function publishMyWall() {
	console.log("publishMyWall");
  FB.ui({
    method: 'feed',
    name: 'I\'m using Efficient Citizen',
    caption: 'Efficient Citizen',
    description: 'Check out "Efficient Citizen" to know your Carbon Footprint',
  	link: 'http://apps.facebook.com/Reduce[CO2]?page=1',
	picture: '',
    //actions: [{ name: 'Get Started', link: 'http://207.145.109.42:8001/ReduceCO2/' }],
	}, 
  function(response) {
	    console.log('publish to my Wall UI response: ', response);
     });
}

//Publish a story to the user's friend's wall
function publishFriendsWall() {
  randNum = Math.floor ( Math.random() * friendIDs.length ); 

  var friendID = friendIDs[randNum];
  
  console.log('Opening a dialog for friendID: ', friendID);
  
  FB.ui({
    method: 'feed',
    to: friendID,
    name: 'I\'m using Efficient Citizen',
    caption: 'Efficient Citizen',
    description: 'Check out "Efficient Citizen" to know your Carbon Footprint',
  	link: 'http://apps.facebook.com/Reduce[CO2]?page=1',
    picture: '',
    actions: [{ name: 'Get Started', link: 'http://207.145.109.42:8001/poc/poc7.html' }],
    user_message_prompt: ''
  }, 
  function(response) {
	    console.log('sendRequestInvite UI response: ', response);
  });
}