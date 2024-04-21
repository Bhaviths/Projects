let hours = document.getElementById("hours");
let minutes = document.getElementById("minutes");
let seconds = document.getElementById("seconds");

const interval = setInterval(()=>
{
	let date = new Date();
	let hour,minute,second;
	if(date.getHours()>=0&&date.getHours()<=24)
	{
		switch(date.getHours())
		{
			case 0:
				hour = 12;
				break;
			case 1:
				hour = "01";
				break;
			case 2:
				hour = "02";
				break;
			case 3:
				hour = "03";
				break;
			case 4:
				hour = "04";
				break;
			case 5:
				hour = "05";
				break;
			case 6:
				hour = "06";
				break;
			case 7:
				hour = "07";
				break;
			case 8:
				hour = "08";
				break;
			case 9:
				hour = "09";
				break;
			case 13:
				hour = "01";
				break;
			case 14:
				hour = "02";
				break;
			case 15:
				hour = "03";
				break;
			case 16:
				hour = "04";
				break;
			case 17:
				hour = "05";
				break;
			case 18:
				hour = "06";
				break;
			case 19:
				hour = "07";
				break;
			case 20:
				hour = "08";
				break;
			case 21:
				hour = "09";
				break;
			case 22:
				hour = "10";
				break;
			default:
				hour = date.getHours();
		}
	}
	hours.innerText = hour;
	if(date.getMinutes()>=0&&date.getMinutes()<=60)
	{
		switch(date.getMinutes())
		{
			case 0:
				minute = "00";
				break;
			case 1:
				minute = "01";
				break;
			case 2:
				minute = "02";
				break;
			case 3:
				minute = "03";
				break;
			case 4:
				minute = "04";
				break;
			case 5:
				minute = "05";
				break;
			case 6:
				minute = "06";
				break;
			case 7:
				minute = "07";
				break;
			case 8:
				minute = "08";
				break;
			case 9:
				minute = "09";
				break;
			default:
				minute = date.getMinutes();
		}
	}
	minutes.innerText = minute;
	if(date.getSeconds()>=0&&date.getSeconds()<=60)
	{
		switch(date.getSeconds())
		{
			case 0:
				second = "00";
				break;
			case 1:
				second = "01";
				break;
			case 2:
				second = "02";
				break;
			case 3:
				second = "03";
				break;
			case 4:
				second = "04";
				break;
			case 5:
				second = "05";
				break;
			case 6:
				second = "06";
				break;
			case 7:
				second = "07";
				break;
			case 8:
				second = "08";
				break;
			case 9:
				second = "09";
				break;
			default:
				second = date.getSeconds();
		}
	}
	seconds.innerText = second;

	if(date.getHours() >=0 && date.getHours() <=12)
	{
		document.querySelector('#AP').innerText = "AM"
	}
	else {
		if(date.getHours() >12 && date.getHours() <=24)
		{
			document.querySelector('#AP').innerText = "PM"
		}
	}
	let ap = document.getElementById("AP");

	if(document.querySelector('#AP').innerText=="AM")
	{
		ap.style.backgroundColor = "white";
		ap.style.color = "blue";
	}
	else{
		ap.style.backgroundColor = "blue";
		ap.style.color = "white";
	}
},1000);
