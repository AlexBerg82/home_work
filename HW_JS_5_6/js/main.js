var time = 0;
var msec = 0;
var secr = 0;
var running = 0;
	
function startPause(){
	if(running == 0){
		running = 1;
		increment();
		document.getElementById("startPause").innerHTML = "Pause";
	}else{
		running = 0;
		document.getElementById("startPause").innerHTML = "Resume";
	}
}

function reset(){
	running = 0;
	msec = -1;
	time = 0;
	secr = 0;
	document.getElementById("startPause").innerHTML = "Start";
	document.getElementById("output").innerHTML = "00:00:00";
	document.getElementById("output2").innerHTML = "0";
}

function increment(){
	if(running == 1){
		setTimeout(function(){
			time++;
			msec++;
			secr++;
			
			var hours = Math.floor(time/10/60/60);
			var mins = Math.floor(time/10/60);
			var secs = Math.floor(secr/10);
			var tenths = Math.floor(((msec*59)*59)/36);
			
			if(hours<10){
				hours="0"+hours;
			}
			if(mins<10){
				mins="0"+mins;
			}
			if(secs<10){
				secs="0"+secs;
			}
			if(secs==59){
				secs=0;
				secr=0;
			}
			if(tenths>0 && tenths<10){
				tenths="00"+tenths;
			}
			if(tenths>10 && tenths<100){
				tenths="0"+tenths;
			}
			if(tenths >= 999){
				tenths = 0;
				msec = 0;
			}
			
			document.getElementById("output").innerHTML = hours+":"+mins+":"+secs;
			document.getElementById("output2").innerHTML = tenths;
			increment();
		}, 100);
	}
}