(function() {
	
	function pad10(value)
	{
		if(value < 10)
			return "0" + value;
		return value;
	}
	
	function updateColours()
	{
		var date = new Date();
		var hours = date.getHours();
		var minutes = date.getMinutes();
		var seconds = date.getSeconds();
		
		var timeBox = document.getElementById("now");
		timeBox.innerHTML = pad10(hours) + ":" + pad10(minutes) + ":" + pad10(seconds);

		setTimeout(updateColours, 500);
	}
	
	updateColours();
})();
