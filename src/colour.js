(function() {
	
	var hours;
	var minutes;
	var seconds;
	
	var colourStyle;
	var colourCode;
	
	
	function updateScene()
	{
		updateTime();
		updateColours();
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
		var timeBox = getFirstElementByTagName("time");
		timeBox.innerHTML = pad10(hours) + ":" + pad10(minutes) + ":" + pad10(seconds);
		
		var colourBox = getFirstElementByTagName("colourCode");
		colourBox.innerHTML = colourCode;
	}
	
	function updateColours()
	{
		var red = hours * (248 / 24);
		var green = minutes * (240 / 60);
		var blue = seconds * (240 / 60);
		
		colourCode = rgbToHex(red, green, blue);
		
		var body = getFirstElementByTagName("body");
		background = body.style.background = colourCode;
	}
	
	function getFirstElementByTagName(name)
	{
		return document.getElementsByTagName(name)[0];
	}
	
	function pad10(value)
	{
		return value.length == 1 ? "0" + value : value;
	}
	
	function componentToHex(component)
	{
		var hex = component.toString(16);
		return pad10(hex);
	}

	function rgbToHex(r, g, b)
	{
		return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
	}
	
	updateScene();
})();
