    function changeTextOperation() {
        document.getElementById("randomGeneratorText").remove();
        var input = document.createElement("input");
        input.setAttribute("type", "number");
        input.setAttribute("min", "0");
        input.setAttribute("max", "100");
		input.setAttribute("value","10");
        input.setAttribute("id", "number");

        input.style.position = "absolute";
        input.style.top = "35%";
        input.style.left = "50%";
		input.style.width = "50px";
		input.style.height = "25px";
        document.body.appendChild(input);
        input.setAttribute("onmousedown", "userCustomRandom()");
        input.setAttribute("onkeydown", "if(event.keyCode === 13){userCustomRandom()}");
    }
	 function checkSize() {
	        var c = window.innerWidth;
	        var d = window.innerHeight;
	        var e = navigator.platform;
	        //document.getElementById("body").setAttribute("max-width", c + "px");
	        document.getElementById("width").innerHTML = "width: " + c + "," + "height: " + d + "  " + e;
			showDate();
	    }
    function randomNumber() {
        randomNumber = Math.round(Math.random()*100);
        return randomNumber;
    }
    function showDate() {
		setInterval(function(){ 
		document.getElementById("showDate").innerHTML = Date()
		},1000);
    }
	function  switchColour(){
		var edit = document.getElementById("circle");
		var value = window.getComputedStyle( edit ,null).getPropertyValue('background-color'); 
		if(value === "rgb(255, 0, 0)"){
			edit.style.backgroundColor = "rgb(0, 255, 0)";
		}
		else{
			edit.style.backgroundColor = "rgb(255, 0, 0)";
		}	
	}
	function trackMouse(event) {
        var x = event.clientX;
        var y = event.clientY;
        var ret = "X coordinate " + x + " Y coordinate " + y
        console.log(ret);
		var edit = document.getElementById("showLocation");
		edit.innerHTML = ret;
     }
  	function userCustomRandom() {
	//Return
        var random = document.getElementById("number").value;
        var print = Math.round(Math.random() * random);
		document.getElementById("returnValue").innerHTML = print;
        console.log(print);
        document.getElementById("number").value = " ";
    }