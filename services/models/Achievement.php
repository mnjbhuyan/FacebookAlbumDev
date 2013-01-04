<?php


class Achievement extends Auth{
	private $appId;
	private $appSecret;
	public  $userUid;
	private $appAccessToken;
	public  $facebook;
	
		
	function __construct() {
        $this->appId = Auth::$id;
		$this->appSecret= Auth::$secret;
		$config = array('appId' =>$this->appId,'secret' => $this->appSecret);
		$this->facebook = new Facebook($config);
		$this->userUid=$this->facebook->getUser();
		$this->appAccessToken=auth::getAppAccessToken();
		
		 }
	
	
	public  function RegisterAchievement($achievementUrl,$displayOrder){
		try{
			 	
			$this->facebook ->setAccessToken($this->appAccessToken);
 			$response = $this->facebook->api('/' . $this->appId . '/achievements', 'post',
							array('achievement' => $achievementUrl,'display_order'=>$displayOrder,'access_token'=>$this->appAccessToken));
			return  $response;
			}
			catch(Exception $e)
			{
			 echo $e;
			}
	}
	
	public function PostAchievement($userId,$userAccessToken,$achievementUrl){
		try{
			$this->facebook ->setAccessToken($userAccessToken);
 			$response = $this->facebook->api('/' . $userId . '/achievements', 'post',
						array('achievement' => $achievementUrl,'access_token'=>$userAccessToken));
			return $response;
			
			}
			catch(Exception $e)
			{
				 echo $e;			 
			}
	}
	
	public function ReadAchievement($userId,$userAccessToken){
		try{
		
			$this->facebook ->setAccessToken($userAccessToken);
 			$response = $this->facebook->api('/' . $userId . '/achievements', 'get',
						array('access_token'=>$userAccessToken));
			return $response;
			return $this->appAccessToken;
			
			}
			catch(Exception $e)
			{
				 echo $e;			 
			}
	}
	
}
?>