function time() {
	var today = new Date();

	var day = today.getDate();
	var year = today.getFullYear();
	
	var month;

	switch (today.getMonth()) {
		case 0:
			month = "Jan";
			break;
		case 1:
			month = "Feb";
			break;
		case 2:
			month = "Mar";
			break;
		case 3:
			month = "Apr";
			break;
		case 4:
			month = "May";
			break;
		case 5:
			month = "Jun";
			break;
		case 6:
			month = "Jul";
			break;
		case 7:
			month = "Aug";
			break;
		case 8:
			month = "Sep";
			break;
		case 9:
			month = "Oct";
			break;
		case 10:
			month = "Nov";
			break;
		case 11:
			month = "Dec";
			break;
		default:
			month = "Wrong entry data";
	}

	var hour = today.getHours();
	if (hour < 10) hour = "0" + hour;

	var minute = today.getMinutes();
	if (minute < 10) minute = "0" + minute;

	var second = today.getSeconds();
	if (second < 10) second = "0" + second;

	document.getElementById("clock_data_bar").innerHTML = year + " " + month + " " + day + " | " + hour + ":" + minute + ":" + second;

	setTimeout("time()", 1000);
}