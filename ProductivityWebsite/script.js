function tickerAddOne() {
	var tickerValue = document.getElementById("tickerDisplay").innerText;
	tickerValue++;
	document.getElementById("tickerDisplay").innerHTML = tickerValue;
}
function tickerSubtractOne() {
	var tickerValue = document.getElementById("tickerDisplay").innerText;
	tickerValue--;
	document.getElementById("tickerDisplay").innerHTML = tickerValue;
}
function tickerReset() {
	document.getElementById("tickerDisplay").innerHTML = "0";
}

var clock = {
		secondValue: 0,
		minuteValue: 0,
		hourValue: 0,
		isRunning: false,
		interval: null,
		lapNumber: 0,
		lapOutput: "",
		runClock: function() {
			clock.secondValue++;
			if (clock.secondValue == 60) {
				clock.minuteValue++;
				clock.secondValue = 0;
			}
			if (clock.minuteValue == 60) {
				clock.hourValue++;
				clock.minuteValue = 0;
			}		
		},
		padZero: function(num) {
			if (num == 0) {
				num = "00";
			} else if (num < 10) {
				num = "0" + num;
			}
			return num;		
		},
		updateClockDisplay: function() {
			document.getElementById("clockDisplay").innerText = clock.padZero(clock.hourValue) + ":" + clock.padZero(clock.minuteValue) + ":" + clock.padZero(clock.secondValue);
		},
		clockOnOff: function() {
			clock.isRunning = !clock.isRunning;
			if (clock.isRunning == true) {
				document.getElementById("startStop").innerText = "Stop";
				clock.interval = setInterval(function() {
					clock.runClock();
					clock.updateClockDisplay();
				}, 1000);
			} else {
				document.getElementById("startStop").innerText = "Resume";
				clearInterval(clock.interval);
			}
		},
		reset: function() {
			if (clock.isRunning == true) {
				clearInterval(clock.interval);
				clock.isRunning = false;
			}
			document.getElementById("startStop").innerText = "Start";
			document.getElementById("clockDisplay").innerText = "00:00:00";
			document.getElementById("lapData").innerText = "";
			document.getElementById("lapData").style.display = "none";
			clock.secondValue = 0;
			clock.minuteValue = 0;
			clock.hourValue = 0;
			clock.isRunning = false;
			clock.interval = null;
			clock.lapNumber = 0;
			clock.lapOutput = "";

		},
		lap: function() {
			clock.lapNumber += 1;
			document.getElementById("lapData").style.display = "block";
			clock.lapOutput = clock.lapOutput + "Lap " + clock.lapNumber + ": " + document.getElementById("clockDisplay").innerText + "\n";
			document.getElementById("lapData").innerText = clock.lapOutput; 
			document.getElementById("lapData").scrollTop = document.getElementById("lapData").scrollHeight;
		}
	};

function clockOnOff() {
	clock.clockOnOff();
}

function resetClock() {
	clock.reset();
}

function lapClock() {
	clock.lap();
}