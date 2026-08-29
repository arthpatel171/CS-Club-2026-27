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
		runClock: function() {
			if (clock.isRunning == true) {
			clock.secondValue++;
			}
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
			document.getElementById("clockDisplay").innerHTML = clock.padZero(clock.hourValue) + ":" + clock.padZero(clock.minuteValue) + ":" + clock.padZero(clock.secondValue);
		},
		clockOnOff: function() {
			
		}
		};

function clockOnOff() {
	clock.isRunning = !clock.isRunning;
	setInterval(function() {
		clock.runClock();
		clock.updateClockDisplay();
	}, 1000);
}

function pausePlayClock() {
	clock.pausePlayClock();
}
