    function userCustomRandom() {
        var random = document.getElementById("number2").value;
        var print = Math.round(Math.random() * random);
        console.log(print);
        document.getElementById("number2").value = " ";
    }
   
    function print() {
        console.log("Hello World!");
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
        
        console.log("X coordinate " + x + " Y coordinate " + y);
        }
    function randomNumber() {
        randomNumber = Math.round(Math.random()*100);
        return randomNumber;
    }
    function showDate() {
        console.log(Date());
        document.getElementById("showDate").innerHTML = Date();
    }
    function checkSize() {
        var c = window.innerWidth;
        var d = window.innerHeight;
        var e = navigator.platform;
        //document.getElementById("body").setAttribute("max-width", c + "px");
         document.getElementById("width").innerHTML = "width: " + c + "," + "height: " + d + "  " + e;
    }
    function loadGallery() {
        //document.getElementById("body").innerHTML = '';
    }
   function loadContactForm() {
        // Remove Tags!
        // document.getElementById("image_1").remove();
        goHome();

        //Add tags!
        var insert = document.createElement('form');
        insert.style.position = "relative";
        insert.style.top = "400px";
        // var insertnode = document.createTextNode("E");
        // insert.appendChild(insertnode);
        var new_line = document.createElement('br');
        insert.appendChild(new_line);
        var label = document.createElement('label');
        label.innerHTML = "First Name";
        insert.appendChild(label);
        var text_area = document.createElement('textarea');
        insert.appendChild(text_area);
        insert.appendChild(new_line);
        var label_lastName = document.createElement('label');
        label_lastName.innerHTML = "Last Name";
        insert.appendChild(label_lastName);
        var text_area_last_name = document.createElement('textarea');
        insert.appendChild(text_area_last_name);
        document.getElementById("body").appendChild(insert);
    }
    function loadMenuBar() {
        document.getElementById("body");
        var home = document.createElement('input');
        home.setAttribute("type", "button");
        home.setAttribute("value", "Home");
        home.setAttribute("onclick", "landingpage.html");
        document.getElementById("body").appendChild(home);
        var removeImages = document.createElement('input');
        removeImages.setAttribute("type", "button");
        removeImages.setAttribute("value", "RemoveImages");
        home.setAttribute("onclick", "removeImages()");
        document.getElementById("body").appendChild(removeImages);
        var contact = document.createElement('input');
        contact.setAttribute("type", "button");
        contact.setAttribute("value", "Contact");
        contact.setAttribute("onclick", "loadContactForm()");
        document.getElementById("body").appendChild(contact);
        var gallery = document.createElement('input');
        gallery.setAttribute("type", "button");
        gallery.setAttribute("value", "Gallery");
        gallery.setAttribute("onclick", "loadGallery()");
        document.getElementById("body").appendChild(gallery);
        var games = document.createElement('input');
        games.setAttribute("type", "button");
        games.setAttribute("value", "Games");
        games.setAttribute("onclick", "  ");
        document.getElementById("body").appendChild(games);
        var pictures = document.createElement('input');
        pictures.setAttribute("type", "button");
        pictures.setAttribute("value", "Pictures");
        pictures.setAttribute("onclick", "   ");
        document.getElementById("body").appendChild(pictures);
        var videos = document.createElement('input');
        videos.setAttribute("type", "button");
        videos.setAttribute("value", "videos");
        videos.setAttribute("onclick", "   ");
        document.getElementById("body").appendChild(videos);

    }
    function goHome() {
        document.getElementById("body").innerHTML = '';
        loadMenuBar();
     }