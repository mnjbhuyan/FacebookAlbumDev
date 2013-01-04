//////////////////////////
//
// Authentication JS File
// See "Logging the user in" on https://developers.facebook.com/mobile
//
//////////////////////////

//Detect when Facebook tells us that the user's session has been returned
//Link for Reference -http://developers.facebook.com/docs/howtos/login/getting-started/#prereqs

function authUser() {
  var user='';
  FB.Event.subscribe('auth.statusChange', function(session) {
	  console.log('user session status:' + session.status);
      if (session && session.status != 'not_authorized') 
	  {
			if (session.authResponse['accessToken']) {
             	FB.api('/me', {fields: 'id,name,picture,email'},
				function(response) {
				  if (!response.error) {
					user = response;
					getSessionUserInfo(user);
					navigateTo('index.html');
					}
				 
				});
    		  }
	  }
      else if (session === undefined) {
			navigateTo("login.html");
      }
   	  else if (session && session.status == 'not_authorized') {
       		navigateTo("login.html");
      }
  	});
}



//Prompt the user to login and ask for the 'email' permission
function promptLogin() {
  FB.login(null, {scope: 'email,publish_actions'});
}



//See https://developers.facebook.com/docs/reference/javascript/FB.logout/
function logout() {
  FB.logout(function(response) {
	store('sessionUserId', null);
	navigateTo("login.html");
    });
}



function getSessionUserInfo(user)
{
	
	if(user)
	{
		store('sessionUserId', user.id);
		store('sessionUserName', user.name);
		store('sessionUserEmail', user.email);
		store('sessionUserPic', user.picture.data.url);	
		//sessionUserId = user.id;
			
		console.log('User id is: ' + retrieve('sessionUserId'));
		console.log('User Name is: ' + retrieve('sessionUserName'));
		console.log('User Name is: ' + retrieve('sessionUserEmail'));
		console.log('User image is: ' + retrieve('sessionUserPic'));
	}
	else{
		//sessionUserId = null;
		console.log('Login failed.');
	}
}



//var user = [];

function checkAuthResposeChange() {
  var user='';
  FB.Event.subscribe('auth.authResponseChange', function(response) {
   
	if (response.status === 'connected')
	{
			 if (response.authResponse['accessToken']) 
			 {
       	 	
      		  FB.api('/me', {fields: 'id,name, picture,email'},
      	  		function(response) {
        	  	if (!response.error)
				{
           			user = response;
					getUserInfo(user);
					console.log('connected');
					navigateTo('index.html');
               }
         		
       			});
      		  }
	
 		} 
	 else if (response.status === 'not_authorized')
	 	{
   	 	
		alert("not_authorised");
		console.log('not authorised')
 	 	}
	 else 
	 	{
	 	
		alert("not_connected");
		console.log('not connected');
		
		} 
	  
  });
}

