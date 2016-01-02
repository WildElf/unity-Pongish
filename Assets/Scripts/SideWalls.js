#pragma strict

function OnTriggerEnter2D (hitInfo : Collider2D) {
	if (hitInfo.name == "Ball")
	{
		var wallName = transform.name;
		if(wallName == "RightWall")
		{
			GetComponent.<AudioSource>().pitch = 0.9f;
		}
		else
		{
			GetComponent.<AudioSource>().pitch = 1.1f;
		}
		GetComponent.<AudioSource>().Play();

		GameManager.Score (wallName);
		hitInfo.gameObject.SendMessage ("ResetBall");
	}
}