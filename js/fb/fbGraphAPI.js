//////////////////////////
//
// FQL JS File
// See the "Requests" section on https://developers.facebook.com/mobile
//
//////////////////////////


//Get user name and image
function getUserInfo(uid,callback,data,key,value) {
	console.log("uid:" + uid);
	console.log("data:" + data);
	console.log("key:" + key);
	console.log("value:" + value);
	
	 FB.api('/' + uid, {fields: 'name, picture'},
     function(response) {
		 console.log("name" + response.name);
		callback(false,response,data,key,value);
	});
}

