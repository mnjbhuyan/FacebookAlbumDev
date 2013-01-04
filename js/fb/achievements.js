// JavaScript Document

//////////////////////////
//
// Achievement JS File
// //See for reference- http://developers.facebook.com/docs/scores/
//
//////////////////////////
var isTopCyclist=false;
var isCleanAir=false;
var isDailyCyclist=false;
var	isForestDefender=false;


function getUserAchievements(callback) {
  FB.api('/me/achievements', function(response) {
	  if(response)
   	  {
		callback(response);
	  }
  });
}
//
//function postUserAchievements(achievement) {
//
//	$.ajax({
//					url: 'services/Achievement.php',
//					type: 'PUT',
//					data: 'achievement=' + achievement + '&action=post',
//					contentType: 'application/x-www-form-urlencoded',
//					processData: false,
//					error: function(XMLHttpRequest, textStatus, errorThrown){
//						alert(JSON.stringify(XMLHttpRequest.responseText));
//					}, 
//					success: function(data, textStatus, XMLHttpRequest){
//						console.log("achievement");
//						alert("You have earned an achievement" + achievement);					
//					}
//				});
//
//
//}



function checkAndPostUserAchievements(userId) {

	$.ajax({
					url: 'services/Achievement.php',
					type: 'PUT',
					data: 'userId=' + userId,
					contentType: 'application/x-www-form-urlencoded',
					processData: false,
					error: function(XMLHttpRequest, textStatus, errorThrown){
						alert(JSON.stringify(XMLHttpRequest.responseText));
					}, 
					success: function(data, textStatus, XMLHttpRequest){
						console.log("achievement");
						alert("You have earned an achievement" + achievement);					
					}
				});


}





function setUserAchievement(userId)
{
	checkUserAchievement(userId);// Check if the user earned any achievement after he finishes trip

	var achievementAlreadyEarned = function(data)
		{
			console.log("Check:"+ data.data)
			//var achievement=checkUserAchievement(userId); 
		
			if(data.data.length>0)
			{ 	
			for(var i = 0; i < data.data.length; i++) 
			{				
				switch (data.data[i].achievement.title)
				{
				 					
				case 'Top Cyclist':
				  if(isTopCyclist)
				  {
				 	 postUserAchievements("TopCyclist")
				  }
				  break;
				case 'Mr. Clean Air':
				 if(isCleanAir)
				  {
					 postUserAchievements("CleanAir")
				  }
				break;
				  case 'Defender of the Forest':
				  if(isForestDefender)
				  {
					 postUserAchievements("ForestDefender")
				  }
				  break;
				case 'Daily Cyclist':
				  if(isDailyCyclist)
				  {
					postUserAchievements("DailyCyclist")
				  }
				  break;
				}
			}
			}
			
		}
	
	getUserAchievements(achievementAlreadyEarned); 



}

function checkUserAchievement(userId)
{
				$.ajax({
					url: 'services/UserAchievement.php',
					type: 'GET',
					data: 'userId=' + userId,
					contentType: 'application/x-www-form-urlencoded',
					processData: false,
					error: function(XMLHttpRequest, textStatus, errorThrown){
						alert(JSON.stringify(XMLHttpRequest.responseText));
					}, 
					success: function(data, textStatus, XMLHttpRequest){
						
						console.log(JSON.stringify(data.data));
						isTopCyclist=data.data.topCyclist;
						console.log(isTopCyclist);
						isCleanAir=data.data.cleanAir;
						console.log(isCleanAir);
						isDailyCyclist=data.data.dailyCyclist;
						console.log(isDailyCyclist);
						isForestDefender=data.data.forestDefender;
						console.log(isForestDefender);
						
						
					}
				});
}