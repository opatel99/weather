$(window)
	.load(function() {
		$(".se-pre-con")
			.fadeOut("slow");;
	});
$(document)
	.ready(function() {
		$.getJSON("http://ip-api.com/json?callback=?", function(location) {
			var lat = location.lat,
				lon = location.lon;
			document.getElementById("city")
				.innerHTML = location.city + ", " + location.regionName;
			url = "https://api.forecast.io/forecast/68129a9e8ea16d2930d8f92d1a73b013/" + lat + "," + lon;
			console.log(url);
			$.getJSON(url + "?callback=?", function(weather) {
				var tempF = Math.round(weather.currently.temperature) + "°" + "F";
				document.getElementById("summary")
					.innerHTML = weather.currently.summary + " - ";
				document.getElementById("temperature")
					.innerHTML = tempF;
				var d1, d2, d3, d4, d5, d6;
				var notNeeded = new Date();
				notNeeded.setHours(7);
				notNeeded.setMinutes(0);
				notNeeded.setSeconds(0);
				notNeeded.setMilliseconds(0);
				var epoch = notNeeded.getTime() / 1000;
				hours = weather.hourly.data;
				var ind;
				ind = _.findIndex(hours, {
					time: epoch
				});
				if (ind < 0) {
					epoch += 86400;
				}
				ind = _.findIndex(hours, {
					time: epoch
				});
				d1 = (weather.hourly.data[ind]);
				d2 = (weather.hourly.data[ind += 4]);
				d3 = (weather.hourly.data[ind += 4]);
				d4 = (weather.hourly.data[ind += 4]);
				d5 = (weather.hourly.data[ind += 4]);
				d6 = (weather.hourly.data[ind += 4]);
				console.log(d5, d6);
				var arr_d_i = [d1.icon, d2.icon, d3.icon, d4.icon, d5.icon, d6.icon];
				var arr_d_t = [d1.temperature, d2.temperature, d3.temperature, d4.temperature, d5.temperature, d6.temperature];
				var arr_d_s = [d1.summary, d2.summary, d3.summary, d4.summary, d5.summary, d6.summary];
				console.log(d1);
				for (var i = 1; i <= 6; i++) {
					document.getElementById("dt" + i)
						.innerHTML = Math.round(arr_d_t[i - 1]) + "°" + "F";
					console.log(arr_d_i[i]);
				}
				console.log(weather.currently.icon);
				switch (weather.currently.icon) {
					case "clear-day":
						document.getElementById("current-icon")
							.classList.add("wi-day-cloudy");
						break;
					case "clear-night":
						document.getElementById("current-icon")
							.classList.add("wi-night-clear");
						break;
					case "rain":
						document.getElementById("current-icon")
							.classList.add("wi-rain");
						break;
					case "snow":
						document.getElementById("current-icon")
							.classList.add("wi-snow");
						break;
					case "sleet":
						document.getElementById("current-icon")
							.classList.add("wi-sleet");
						break;
					case "wind":
						document.getElementById("current-icon")
							.classList.add("wi-cloudy-windy");
						break;
					case "fog":
						document.getElementById("current-icon")
							.classList.add("wi-fog");
						break;
					case "cloudy":
						document.getElementById("current-icon")
							.classList.add("wi-cloudy");
						break;
					case "partly-cloudy-day":
						document.getElementById("current-icon")
							.classList.add("wi-day-cloudy");
						break;
					case "partly-cloudy-night":
						document.getElementById("current-icon")
							.classList.add("wi-night-cloudy");
						break;
				}
				console.log(arr_d_i[1]);
				console.log(document.getElementsByClassName("hour-icon"));
				for (var j = 0; j < arr_d_i.length; j++) {
					switch (arr_d_i[j]) {
						case "clear-day":
							document.getElementsByClassName("hour-icon")[j].classList.add("wi-day-cloudy");
							break;
						case "clear-night":
							document.getElementsByClassName("hour-icon")[j].classList.add("wi-night-clear");
							break;
						case "rain":
							document.getElementsByClassName("hour-icon")[j].classList.add("wi-rain");
							break;
						case "snow":
							document.getElementsByClassName("hour-icon")[j].classList.add("wi-snow");
							break;
						case "sleet":
							document.getElementsByClassName("hour-icon")[j].classList.add("wi-sleet");
							break;
						case "wind":
							document.getElementsByClassName("hour-icon")[j].classList.add("wi-cloudy-windy");
							break;
						case "fog":
							document.getElementsByClassName("hour-icon")[j].classList.add("wi-fog");
							break;
						case "cloudy":
							document.getElementsByClassName("hour-icon")[j].classList.add("wi-cloudy");
							break;
						case "partly-cloudy-day":
							document.getElementsByClassName("hour-icon")[j].classList.add("wi-day-cloudy");
							break;
						case "partly-cloudy-night":
							document.getElementsByClassName("hour-icon")[j].classList.add("wi-night-cloudy");
							break;
					}
				}
			});
		});
	});
$(".card")
	.click(function() {
		var dt1_f, dt2_f, dt3_f, dt4_f, dt5_f, dt6_f, dt1_c, dt2_c, dt3_c, dt4_c, dt5_c, dt6_c;
		if (document.getElementById("dt1")
			.innerHTML.indexOf("°F") !== -1) {
			dt1_f = parseInt(document.getElementById("dt1")
				.innerHTML.replace(/\D+/g, ""));
			document.getElementById("dt1")
				.innerHTML = Math.round((5 * dt1_f - 160) / 9) + "°C";
			dt2_f = parseInt(document.getElementById("dt2")
				.innerHTML.replace(/\D+/g, ""));
			document.getElementById("dt2")
				.innerHTML = Math.round((5 * dt2_f - 160) / 9) + "°C";
			dt3_f = parseInt(document.getElementById("dt3")
				.innerHTML.replace(/\D+/g, ""));
			document.getElementById("dt3")
				.innerHTML = Math.round((5 * dt3_f - 160) / 9) + "°C";
			dt4_f = parseInt(document.getElementById("dt4")
				.innerHTML.replace(/\D+/g, ""));
			document.getElementById("dt4")
				.innerHTML = Math.round((5 * dt4_f - 160) / 9) + "°C";
			dt5_f = parseInt(document.getElementById("dt5")
				.innerHTML.replace(/\D+/g, ""));
			document.getElementById("dt5")
				.innerHTML = Math.round((5 * dt5_f - 160) / 9) + "°C";
			dt6_f = parseInt(document.getElementById("dt6")
				.innerHTML.replace(/\D+/g, ""));
			document.getElementById("dt6")
				.innerHTML = Math.round((5 * dt6_f - 160) / 9) + "°C";
			dt_f = parseInt(document.getElementById("temperature")
				.innerHTML.replace(/\D+/g, ""));
			document.getElementById("temperature")
				.innerHTML = Math.round((5 * dt_f - 160) / 9) + "°C";
		} else if (document.getElementById("dt1")
			.innerHTML.indexOf("°C") !== -1) {
			dt1_c = parseInt(document.getElementById("dt1")
				.innerHTML.replace(/\D+/g, ""));
			document.getElementById("dt1")
				.innerHTML = Math.round(9 * dt1_c / 5 + 32) + "°F";
			dt2_c = parseInt(document.getElementById("dt2")
				.innerHTML.replace(/\D+/g, ""));
			document.getElementById("dt2")
				.innerHTML = Math.round(9 * dt2_c / 5 + 32) + "°F";
			dt3_c = parseInt(document.getElementById("dt3")
				.innerHTML.replace(/\D+/g, ""));
			document.getElementById("dt3")
				.innerHTML = Math.round(9 * dt3_c / 5 + 32) + "°F";
			dt4_c = parseInt(document.getElementById("dt4")
				.innerHTML.replace(/\D+/g, ""));
			document.getElementById("dt4")
				.innerHTML = Math.round(9 * dt4_c / 5 + 32) + "°F";
			dt5_c = parseInt(document.getElementById("dt5")
				.innerHTML.replace(/\D+/g, ""));
			document.getElementById("dt5")
				.innerHTML = Math.round(9 * dt5_c / 5 + 32) + "°F";
			dt6_c = parseInt(document.getElementById("dt6")
				.innerHTML.replace(/\D+/g, ""));
			document.getElementById("dt6")
				.innerHTML = Math.round(9 * dt6_c / 5 + 32) + "°F";
			dt_c = parseInt(document.getElementById("temperature")
				.innerHTML.replace(/\D+/g, ""));
			document.getElementById("temperature")
				.innerHTML = Math.round(9 * dt_c / 5 + 32) + "°F";
		}
	});
