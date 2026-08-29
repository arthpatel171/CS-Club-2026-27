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
				document.getElementById("startStop").innerText = "Stop"
				clock.interval = setInterval(function() {
					clock.runClock();
					clock.updateClockDisplay();
				}, 1000);
			} else {
				document.getElementById("startStop").innerText = "Start"
				clearInterval(clock.interval);
			}
		}
	};

function clockOnOff() {
	clock.clockOnOff();
}

