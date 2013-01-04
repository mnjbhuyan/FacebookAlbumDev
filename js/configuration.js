//////////////////////////
//
// Configuration Js File
//
//////////////////////////


//See for reference- https://developers.facebook.com/docs/reference/javascript/
//Initialize the Facebook JS SDK
window.fbAsyncInit = function() {
  FB.init({   
    	
	appId:"145924658893561",//for Facebook Album View
	status: true,
    cookie: true,
    xfbml: true,
    frictionlessRequests: true,
    useCachedDialogs: true,
    oauth: true
  });
 
  authUser();
  };

// Load the FB JS SDK Asynchronously
(function(d){
 var js, id = 'facebook-jssdk', ref = d.getElementsByTagName('script')[0];
 if (d.getElementById(id)) {return;}
 js = d.createElement('script'); js.id = id; js.async = true;
 js.src = "//connect.facebook.net/en_US/all.js";
 ref.parentNode.insertBefore(js, ref);
 }(document));
 
 
 
 