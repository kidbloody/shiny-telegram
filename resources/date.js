function startTime()
		{
			var today=new Date();
			var h=today.getHours();
			var m=today.getMinutes();
			var s=today.getSeconds();

// add a zero in front of numbers<10
	m=checkTime(m);
	s=checkTime(s);
		
		document.getElementById('date').innerHTML=h+":"+m;
		t=setTimeout('startTime()',500);
		}

	function checkTime(i)
	{
		if (i<10)
		{
			i="0" + i;
			}
		return i;
		}