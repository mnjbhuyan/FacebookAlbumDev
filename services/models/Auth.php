<?php

try{
	require('fb-php-sdk/facebook.php');
}catch(Exception $e){
	echo $e;
}

class Auth
{ 
	//---for the test App in My Account
	Protected static $id='145924658893561';
	Protected static $secret='69b7c6ad4d2fc83bf6b838b9e253ace7';
	
		
	private $tokenUrl;
	
 	protected Static function getAppAccessToken()
	{		
	$tokenUrl = 'https://graph.facebook.com/oauth/access_token?'.'client_id='.self::$id.'&client_secret='.self::$secret. '&grant_type=client_credentials';
	$ch = curl_init($tokenUrl);
	curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
	curl_setopt($ch, CURLOPT_BINARYTRANSFER, true);
	curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, FALSE);
	curl_setopt($ch, CURLOPT_HTTPHEADER, array('Host: graph.facebook.com'));
	$tokenResponse = curl_exec($ch);
	curl_close($ch); 
	$params = null;
  	parse_str($tokenResponse, $params);
  	$appAccessToken = $params['access_token'];
	return $appAccessToken;
	}
	
	
	protected Static function getAppId()
	{
		return 	self::$id;
	}
	
	protected Static function getAppSecret()
	{
		return 	self::$secret;
	}
	
	
}
?>