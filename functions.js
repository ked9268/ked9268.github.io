    function userCustomRandom() {
        var random = document.getElementById("number2").value;
        var print = Math.round(Math.random() * random);
        console.log(print);
        document.getElementById("number2").value = " ";
    }
	function bounce(){
		alert('See me again!');
	}
    function changeTextOperation() {
        document.getElementById("randomGeneratorText").remove();
        var input = document.createElement("input");
        input.setAttribute("type", "number");
        input.setAttribute("min", "0");
        input.setAttribute("max", "100");
        input.setAttribute("id", "number2");

        input.style.position = "absolute";
        input.style.top = "65px";
        input.style.left = "500px";
        document.body.appendChild(input);
        input.setAttribute("onmousedown", "userCustomRandom()");
        input.setAttribute("onkeydown", "userCustomRandom()");
    }
    function trackMouse(event) {
        var x = event.clientX;
        var y = event.clientY;
        var ret = "X coordinate " + x + " Y coordinate " + y
        console.log(ret);
		var edit = document.getElementById("showLocation");
		edit.innerHTML = ret;
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
    function checkSize() {
        var c = window.innerWidth;
        var d = window.innerHeight;
        var e = navigator.platform;
        //document.getElementById("body").setAttribute("max-width", c + "px");
        document.getElementById("width").innerHTML = "width: " + c + "," + "height: " + d + "  " + e;
		showDate();
    }
	function  relocate(){
		var edit = document.getElementById("circle");
		var value = window.getComputedStyle( edit ,null).getPropertyValue('background-color'); 
		console.log("relocate method initiated");
		console.log(value);
		if(value === "rgb(255, 0, 0)"){
			edit.style.backgroundColor = "rgb(0, 255, 0)";
		}
		else{
			edit.style.backgroundColor = "rgb(255, 0, 0)";
		}	
	}