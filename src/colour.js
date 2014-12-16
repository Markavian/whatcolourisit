(function() {
	
	var hours;
	var minutes;
	var seconds;
	
	function pad10(value)
	{
		if(value < 10)
			return "0" + value;
		return value;
	}
	
	function updateScene()
	{
		updateTime();
		updateText();

		setTimeout(updateScene, 500);
	}
	
	function updateTime()
	{
		var date = new Date();
		hours = date.getHours();
		minutes = date.getMinutes();
		seconds = date.getSeconds();
	}
	
	function updateText()
	{
		var timeBox = document.getElementById("now");
		timeBox.innerHTML = pad10(hours) + ":" + pad10(minutes) + ":" + pad10(seconds);
	}
	
	updateScene();
})();
