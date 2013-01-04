/** Functionality to run when page is loaded
 **/
var pageLoaders = {};

var pageUnloaders = {};


store('mileage', 30);	//Hardcode 30mpg

/** This function should include all updates that should occur on any page.
 **/
$(document).bind('pageshow', function(){
	var page = $.mobile.activePage;
	var pageId = page.attr('id');
	console.log('Show page "' + pageId + '"');
	
	
	// Size banner, if any
	$(window).resize(function(){
		var width = $(window).width();
		var height = (width * 0.5625) + ' px';
		
		elem = $('#banner');
		elem.css('width', width).css('height', height);
	});
	
	$(window).resize();
	
	// Update user display, if any
	requireUser();
	//if(retrieve('sessionUserId')===null){
//		console.log("sessionUserId=null ->redirect to login.html ");
//		$.mobile.changePage("login.html");
//		//TODO: redirect to login page
//	}
//	else{
//		$('.user-pic').attr("src",(retrieve('sessionUserPic')));
//		
//	}
	
	if( pageLoaders.hasOwnProperty(pageId) ) pageLoaders[pageId](page);
});

$(document).bind('pagehide', function(e){
	var page = e.target;
	var pageId = page.id;
	console.log('Hide page "' + pageId + '"');
	
	if( pageUnloaders.hasOwnProperty(pageId) ) pageUnloaders[pageId](page);
});

function requireUser()
{
	if(retrieve('sessionUserId')===null){
		console.log("sessionUserId=null ->redirect to login.html ");
		$.mobile.changePage("login.html");
	}
	else{
		$('.user-pic').attr("src",(retrieve('sessionUserPic')));
		$('[data-labeltype="user-name"]').text(retrieve('sessionUserName'));
		$('[data-labeltype="user-email"]').text(retrieve('sessionUserEmail'));
	}	
}

function navigateTo(pageUrl)
	{
		console.log(pageUrl);
		$.mobile.changePage(pageUrl);
	}

function store(key, item){
	localStorage[key] = JSON.stringify(item);
}

function retrieve(key){
	if(!localStorage.hasOwnProperty(key)) return null;
	
	return JSON.parse(localStorage[key]);
}

Array.prototype.move = function(from, to) {
    this.splice(to, 0, this.splice(from, 1)[0]);
};

function pushLocation(location){
	var locations = retrieve('locations');
	if(locations===null) locations = [];
	
	var index = $.inArray(location, locations);
	
	if(index===-1){	
		locations.unshift(location);
		locations.length = Math.min(10, locations.length);
		
		store('locations', locations);
		console.log('Location pushed into recent list.');
	}
	else{
		//TODO: bump location up in the recent list
		locations.move(index, 0);
		store('locations', locations);
		console.log('Location not pushed because it is already in recent list.');
	}
}

function clearRecentLocations(){
	store('locations', []);
}

/** Include files for helper functions and for page-specific scripts
 **/
 
$.scriptPath = '/FaceBookAlbum/js/';

$.require('index.js');
$.require('subpage.js');
$.require('fb/fbGraphAPI.js');
$.require('fb/requests.js');
$.require('fb/newsFeed.js');

