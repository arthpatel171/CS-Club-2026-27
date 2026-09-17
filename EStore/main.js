function confirmLamboPurchase() {
	q1 = prompt("Are you sure you want to buy this? y/n")
	if (q1 == "y") {
		q2 = prompt("Are you sure you are sure? y/n")
			if (q2 == "y") {
				alert("You brought successfully this item!")
				document.getElementById("lamboBox").style.backgroundColor = "green";
			}
	}
}

function cancelLambo() {
	document.getElementById("lamboBox").style.backgroundColor = "grey";
}