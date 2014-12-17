(function() {
	
	var hours;
	var minutes;
	var seconds;
	
	var currentElement;
	var colourStyle;
	var colourCode;
	
	function setup()
	{
		var elements = document.getElementsByTagName("whatcolourisit");
		for(var i=0; i<elements.length; i++)
		{
			var element = elements[i];
			createFor(element);
		}
		
		createStyleSheet("colour.css");
	}
	
	function createStyleSheet(filename)
	{
		var cssLink = document.createElement("link");
		cssLink.setAttribute("rel", "stylesheet")
		cssLink.setAttribute("type", "text/css")
		cssLink.setAttribute("href", filename)
		
		getFirstElementByTagName("head").appendChild(cssLink);
	}
	
	function createFor(element)
	{
		var box = document.createElement("box");
		var time = document.createElement("time");
		var colourCode = document.createElement("colourCode");
		var label = document.createElement("label");
		
		element.appendChild(box);
		box.appendChild(time);
		box.appendChild(colourCode);
		box.appendChild(label);
		
		updateScene(element);
	}
	
	function updateScene(element)
	{
		currentElement = element;
		
		updateTime();
		updateColours();
		updateText();

		setTimeout(updateScene, 100, element);
	}
	
	function updateTime()
	{
		var timeOffsetHours = parseInt(currentElement.getAttribute("timeOffsetHours"));
		timeOffsetHours = timeOffsetHours ? timeOffsetHours : 0;
		
		var timeOffsetMinutes = parseInt(currentElement.getAttribute("timeOffsetMinutes"));
		timeOffsetMinutes = timeOffsetMinutes ? timeOffsetMinutes : 0;
		
		var date = new Date();
		date.setHours(date.getHours() + timeOffsetHours);
		date.setMinutes(date.getMinutes() + timeOffsetMinutes);
		
		hours = date.getHours();
		minutes = date.getMinutes();
		seconds = date.getSeconds();
	}
	
	function updateText()
	{
		var timeBox = getFirstElementByTagName("time", currentElement);
		timeBox.innerHTML = pad10(hours) + ":" + pad10(minutes) + ":" + pad10(seconds);
		
		var colourCodeBox = getFirstElementByTagName("colourCode",  currentElement);
		colourCodeBox.innerHTML = colourCode;
		
		var labelBox = getFirstElementByTagName("label",  currentElement);
		labelBox.innerHTML = currentElement.getAttribute("label");
	}
	
	function updateColours()
	{
		var red = Math.round(hours * (248 / 24));
		var green = Math.round(minutes * (240 / 60));
		var blue = Math.round(seconds * (240 / 60));
		
		colourCode = rgbToHex(red, green, blue);
		
		var background = currentElement;
		background.style.background = colourCode;
	}
	
	function getFirstElementByTagName(name, context)
	{
		if(!context)
			context = document;
			
		return context.getElementsByTagName(name)[0];
	}
	
	function pad10(value)
	{
		return value < 10 ? "0" + value : value;
	}
	
	function componentToHex(component)
	{
		var hex = component.toString(16);
		return hex.length == 1 ? "0" + hex : hex;
	}

	function rgbToHex(r, g, b)
	{
		return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
	}
	
	setup();
})();
