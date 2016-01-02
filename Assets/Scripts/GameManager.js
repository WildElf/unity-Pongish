#pragma strict

static var playerScore01 : int = 0;
static var playerScore02 : int = 0;

var theSkin : GUISkin;
var theBall : Transform;

function Start()
{
	theBall = GameObject.FindGameObjectWithTag ("Ball").transform;
 
}

static function Score (wallName : String) {
	if(wallName == "RightWall")
	{
		playerScore01 += 1;
	}
	else
	{
		playerScore02 += 1;
	}
}

function OnGUI ()
{
	GUI.skin = theSkin;
	GUI.Label (new Rect (Screen.width/2-170, 20, 400, 100), 
	"" + playerScore01 + " :P1  | SCORES |  " + "P2: " + playerScore02);
//	GUI.Label (new Rect (Screen.width/2-250, 20, 200, 100), );
//	GUI.Label (new Rect (Screen.width/2+50, 20, 200, 100), );

	if (GUI.Button (new Rect (Screen.width/2-66, 20, 121, 53), "SCORE" + "\n" + "RESET"))
	{
		playerScore01 = 0;
		playerScore02 = 0;
		
		theBall.gameObject.SendMessage ("ResetBall");
	}

}