#pragma strict

var ballSpeed : float = 100;

function Start () {
	yield WaitForSeconds (2);
	GoBall();
}

function Update ()
{
	var xVel : float = GetComponent.<Rigidbody2D>().velocity.x;
	Debug.Log("Velocity: " +xVel);
}

function OnCollisionEnter2D (colInfo : Collision2D) {
	if (colInfo.collider.tag == "Player")
	{
		var velY = GetComponent.<Rigidbody2D>().velocity.y;
		velY = velY/2 + colInfo.collider.GetComponent.<Rigidbody2D>().velocity.y/3;
		GetComponent.<Rigidbody2D>().velocity.y = velY;
		
		if (colInfo.collider.gameObject.name == "Player01")
		{
		GetComponent.<AudioSource>().pitch = 1.0f + Mathf.Abs(velY/30);
		GetComponent.<AudioSource>().Play();
		}
		else
		{
		GetComponent.<AudioSource>().pitch = 1.0f - Mathf.Abs(velY/30);
		GetComponent.<AudioSource>().Play();
		}
	}
	
}

function ResetBall ()
{
	GetComponent.<Rigidbody2D>().velocity.x = 0;
	GetComponent.<Rigidbody2D>().velocity.y = 0;
	transform.position.x = 0;
	transform.position.y = 0;
	
	yield WaitForSeconds(0.5);
	GoBall();
}

function GoBall ()
{
	var ballStart = Random.Range(0, 2);
	if (ballStart <= 0.5)
	{
		GetComponent.<Rigidbody2D>().AddForce (new Vector2 (ballSpeed, -10));
	}
	else
	{
		GetComponent.<Rigidbody2D>().AddForce (new Vector2 (-ballSpeed, -10));
	}
}