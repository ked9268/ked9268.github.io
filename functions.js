    see = 3;
    currently = 0;

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
            whichViewPort();
	    }
    function whichViewPort(){
        var c = window.innerWidth;
        var d = window.innerHeight;
        var e = navigator.platform;
        
        if(e === "iPhone"){
            //Remove lines of code removeChild method
            console.log("iPhone viewport")
        }
        else {
            //Remove lines of codee
            console.log("computer or Samsung viewport")
        }
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
	function switchColour(){
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
        document.getElementById("clickmee").value = "Stop return mouse location";
		var x = event.clientX;
        var y = event.clientY;
        var ret = "X coordinate " + x + " Y coordinate " + y    
        document.getElementById("showLocation").innerHTML = ret;    
     }
	function getValue(value){	
		var list = document.querySelectorAll("div");
		var size = list.length;
		var array = [];
		/**for(let i = 0;i < size;i++){
			var cid = document.getElementById(list.item(i).id);
		
			if(window.getComputedStyle(cid,null).getPropertyValue('z-index') === 'auto'){
				array.push(' ');
			}
			else{
				array[i] = window.getComputedStyle(cid,null).getPropertyValue('z-index');
			}
		}**/
		//console.log(array);
        //console.log(value);
        window.getComputedStyle(document.getElementById(value),null).getPropertyValue('z-index');
        document.getElementById(value).style.zIndex = see;
        see = see+1;
		//Set to Two
		//document.getElementById("kim_kardashian_twitter").style.setProperty("z-index","2")
		//console.log("Play:  "+window.getComputedStyle(document.getElementById("kim_kardashian_twitter",null)).getPropertyValue('z-index'));
	}
    function getAllZIndex(){
        var list = document.querySelectorAll("div");
        //console.log(list);
        size = list.length;
        console.log(size);
        
        for(let i = 0; i < size;i++){
            //console.log(max);
            
            //var cid = document.getElementById(list.item(i).id);
            //console.log(list.item(i).id);
            //console.log(cid);
            //var value = window.getComputedStyle(cid,null).getPropertyValue('z-index');
            //if(value != 'auto'){
             //   if(value > max){
              //      max = value;
             //   }
            //}
        }max = 1;
        console.log(max);
    }
  	function userCustomRandom() {
	//Return
        var random = document.getElementById("number").value;
        var print = Math.round(Math.random() * random);
		document.getElementById("returnValue").innerHTML = print;
        console.log(print);
        document.getElementById("number").value = " ";
    }
