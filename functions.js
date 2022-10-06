    see = 3;
    currently = 0;
    pause = 1;
    screen_width;
    screen_height;
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
	        //document.getElementById("width").innerHTML = "width: " + c + "," + "height: " + d + "  " + e;
			showDate();
            //whichViewPort();
	    }
    function getValue(value){
            var list = document.querySelectorAll("div");
            var size = list.length;
            var array = [];
            //used to get the media to the front on hover.
        
        
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
    }
    function printRandomNumber(){
        setInterval(function(){
            console.log(randomNumber());
        },1000);
    
    }
    function randomNumber(value) {

        /*
         * randomly generate a number for use on page...
         * 
         * **/
        if(value === null){
            value == 100;
            var randomNumber;
            randomNumber = Math.round(Math.random() * value;
            return randomNumber;
        }
        else{
            
            var randomNumber;
            randomNumber = Math.round(Math.random() * value;
            return randomNumber;
            
        }
    }
    function showDate() {
        /*
         * show the current date and time on the home page of the ComputerIndex.html
         * **/
		setInterval(function(){ 
		document.getElementById("showDate").innerHTML = Date()
		},1000);
    }
    function stopStart(value){
    
        document.getElementById(value).pause();
        console.log(document.getElementById(value).paused);
        if(pause == 1){
            document.getElementById(value).pause();
            pause = 0;
        }
        else{
            document.getElementById(value).play();
            pause = 1;
        }
   
   
   }
     function switchColour() {
        /***
         * 
         *Function to switch the colour of the circle on page .... 
         * 
         * */
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
        /**
         track the location of the mouse within the viewport on page ...
         
         */
        document.getElementById("clickmee").value = "Stop return mouse location";
		var x = event.clientX;
        var y = event.clientY;
        var ret = "X coordinate " + x + " Y coordinate " + y    
        document.getElementById("showLocation").innerHTML = ret;    
     }
  	function userCustomRandom() {
                    //Return
        var random = document.getElementById("number").value;
        var print = randomNumber(random);
		document.getElementById("returnValue").innerHTML = print;
        document.getElementById("number").value = " ";
    }
    function whichViewPort() {
        /**
         * identify which screen the user is viewing the content from
         * 
         * */
    
        var c = window.innerWidth;
        screen_width = window.innerWidth;
        var d = window.innerHeight;
        screen_height = window.innerHeight;
        console.log(screen_width);
        console.log(screen_height);
        var e = navigator.platform;
        let E = e;

        if (E.indexOf("Mac") === 0 || E.indexOf("Win") === 0) {
            window.location.replace("Computerindex.html");

        }
        else {

        }
    }
