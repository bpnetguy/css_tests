      var timer;
      
      function startAnimation(n){
        for(var i=0; i<(5*n); i++) addDiv();
        timer = setInterval(moveContent,500);
      }
      
      function stopAnimation(){
        clearInterval(timer);
      }
            
      function moveContent(){
        var divs= document.getElementById("container").getElementsByTagName("div");
        for (var i=0, l= divs.length; i< l; i++){
          //divs[i].style.left= Math.round((Math.random()*(1280)))+"px";
          divs[i].style.top= Math.round((Math.random()*(720)))+"px";
        }
      }
      function addDiv(){
        var div= document.createElement("div");
        div.style.backgroundColor= "rgba("+Math.round(Math.random()*255)+","+Math.round(Math.random()*255)+","+Math.round(Math.random()*255)+", 0.7)";
        div.style.left= Math.round((Math.random()*(420)))+"px";
        div.style.top= Math.round((Math.random()*(176)))+"px";
        div.className = "movingDiv";
        document.getElementById("container").appendChild(div);
      }
    
    var fps = null;
    
    function coloredFramesTest(n) {
        fps = new Array();
        var averageArray = function(arr) {
            var avg = arr[0];
            for (var i = 1; i < arr.length; i++) {
                avg += arr[i];
            }
            avg = Math.round(avg/arr.length);
            return avg;
        }        
        setTimeout(
            function(){
                stopAnimation();
                var avgfps = averageArray(fps);
                if ((avgfps>=20)){
                    coloredFramesTest(n+1);
                }else{
                    FPSMeter.stop();
                    document.getElementById("results").innerHTML = "Maximum number of frames animated @30fps : " + (n-1)*5;
                    +"<br/>Reload the page to restart the test";
                }
            },5000);
        document.getElementById("results").innerHTML = "Current number of frames: " + n*5;
        startAnimation(n);
    }
