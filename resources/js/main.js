$(function () {

	var config = {
		apiKey: "AIzaSyCGAenW5nk1F3Ziz92RbyNVudBNdk30gQU",
		authDomain: "todolist-5b9d5.firebaseapp.com",
		databaseURL: "https://todolist-5b9d5.firebaseio.com",
		projectId: "todolist-5b9d5",
		storageBucket: "todolist-5b9d5.appspot.com",
		messagingSenderId: "624340658529"
	};
	firebase.initializeApp(config);

	var dbRefSurvey = firebase.database().ref().child("survey2");
	var answerA = 0;
	var answerB = 0;
	var answerC = 0;
	var answerD = 0;
	var answerE = 0;
	var answerF = 0;
	var answerG = 0;
	var answerAlready = 0;

	document.getElementById("bouncingInfo").addEventListener("click", function () {
		// window.open("http://www.situmorang.com/jabiren/index.php","_self"); //must be single quote
		window.location = "http://www.situmorang.com/resources/";
	});

	$(".btnA").on("click", function () {
		var tzoffset = (new Date()).getTimezoneOffset() * 60000; //offset in milliseconds
		var tzone = new Date().toLocaleTimeString("en-us", { timeZoneName: "short" }).split(" ")[2];
		var timestamp = (new Date(Date.now() - tzoffset)).toISOString().slice(0, -1).concat(tzone);
		if (!answerAlready){
			dbRefSurvey.push({
				userID: timestamp,
				userclick: "A"
			});
			answerAlready = 1;
			$(".pointB").css("pointer-events", "none");
		}
	});
	$(".btnB").on("click", function () {
		var tzoffset = (new Date()).getTimezoneOffset() * 60000; //offset in milliseconds
		var tzone = new Date().toLocaleTimeString("en-us", { timeZoneName: "short" }).split(" ")[2];
		var timestamp = (new Date(Date.now() - tzoffset)).toISOString().slice(0, -1).concat(tzone);
		if (!answerAlready){
			dbRefSurvey.push({
				userID: timestamp,
				userclick: "B"
			});
			answerAlready = 1;
			// $(".pointB").css("background-color", "#515676");
			$(".pointA").css("pointer-events", "none");
		}
	});

	$(".btnC").on("click", function () {
		var tzoffset = (new Date()).getTimezoneOffset() * 60000; //offset in milliseconds
		var tzone = new Date().toLocaleTimeString("en-us", { timeZoneName: "short" }).split(" ")[2];
		var timestamp = (new Date(Date.now() - tzoffset)).toISOString().slice(0, -1).concat(tzone);
		if (!answerAlready){
			dbRefSurvey.push({
				userID: timestamp,
				userclick: "C"
			});
			answerAlready = 1;
			$(".pointC").css("pointer-events", "none");
		}
	});

	$(".btnD").on("click", function () {
		var tzoffset = (new Date()).getTimezoneOffset() * 60000; //offset in milliseconds
		var tzone = new Date().toLocaleTimeString("en-us", { timeZoneName: "short" }).split(" ")[2];
		var timestamp = (new Date(Date.now() - tzoffset)).toISOString().slice(0, -1).concat(tzone);
		if (!answerAlready){
			dbRefSurvey.push({
				userID: timestamp,
				userclick: "D"
			});
			answerAlready = 1;
			$(".pointD").css("pointer-events", "none");
		}
	});

	$(".btnE").on("click", function () {
		var tzoffset = (new Date()).getTimezoneOffset() * 60000; //offset in milliseconds
		var tzone = new Date().toLocaleTimeString("en-us", { timeZoneName: "short" }).split(" ")[2];
		var timestamp = (new Date(Date.now() - tzoffset)).toISOString().slice(0, -1).concat(tzone);
		if (!answerAlready){
			dbRefSurvey.push({
				userID: timestamp,
				userclick: "E"
			});
			answerAlready = 1;
			$(".pointE").css("pointer-events", "none");
		}
	});

	$(".btnF").on("click", function () {
		var tzoffset = (new Date()).getTimezoneOffset() * 60000; //offset in milliseconds
		var tzone = new Date().toLocaleTimeString("en-us", { timeZoneName: "short" }).split(" ")[2];
		var timestamp = (new Date(Date.now() - tzoffset)).toISOString().slice(0, -1).concat(tzone);
		if (!answerAlready){
			dbRefSurvey.push({
				userID: timestamp,
				userclick: "F"
			});
			answerAlready = 1;
			$(".pointF").css("pointer-events", "none");
		}
	});

	$(".btnG").on("click", function () {
		var tzoffset = (new Date()).getTimezoneOffset() * 60000; //offset in milliseconds
		var tzone = new Date().toLocaleTimeString("en-us", { timeZoneName: "short" }).split(" ")[2];
		var timestamp = (new Date(Date.now() - tzoffset)).toISOString().slice(0, -1).concat(tzone);
		if (!answerAlready){
			dbRefSurvey.push({
				userID: timestamp,
				userclick: "G"
			});
			answerAlready = 1;
			$(".pointG").css("pointer-events", "none");
		}
	});


	$(".cancel a").on("click", function () {
		dbRefSurvey.remove();

	});

	dbRefSurvey.on("child_added", snap => {        
		if (snap.child("userclick").val() === "A") {
			answerA += 1;
			var pointa = document.getElementById("pointA");
			pointa.innerText = answerA;
		} else if (snap.child("userclick").val() === "B") {
			answerB += 1;
			var pointb = document.getElementById("pointB");
			pointb.innerText = answerB;
		} else if (snap.child("userclick").val() === "C") {
			answerC += 1;
			var pointc = document.getElementById("pointC");
			pointc.innerText = answerC;
		} else if (snap.child("userclick").val() === "D") {
			answerD += 1;
			var pointd = document.getElementById("pointD");
			pointd.innerText = answerD;
		} else if (snap.child("userclick").val() === "E") {
			answerE += 1;
			var pointe = document.getElementById("pointE");
			pointe.innerText = answerE;
		} else if (snap.child("userclick").val() === "F") {
			answerF += 1;
			var pointf = document.getElementById("pointF");
			pointf.innerText = answerF;
		} else 
		// if (snap.child("userclick").val() === "G") 
		{
			answerG += 1;
			var pointg = document.getElementById("pointG");
			pointg.innerText = answerG;
		}
	});
	dbRefSurvey.on("child_removed", snap => { 
		answerA = 0;
		answerB = 0;
		answerC = 0;
		answerD = 0;
		answerE = 0;
		answerF = 0;
		answerG = 0;
		var pointa = document.getElementById("pointA");
		pointa.innerText = answerA;
		var pointb = document.getElementById("PointB");
		pointb.innerText = answerB;
		var pointc = document.getElementById("pointC");
		pointc.innerText = answerC;
		var pointd = document.getElementById("PointD");
		pointd.innerText = answerD;
		var pointe = document.getElementById("pointE");
		pointe.innerText = answerE;
		var pointf = document.getElementById("PointF");
		pointf.innerText = answerF;
		var pointg = document.getElementById("PointG");
		pointg.innerText = answerG;
		answerAlready = 0;
		location.href = "#clear";
		$(".btnA").css("pointer-events", "auto");
		$(".btnB").css("pointer-events", "auto");
		$(".btnC").css("pointer-events", "auto");	
		$(".btnD").css("pointer-events", "auto");	
		$(".btnE").css("pointer-events", "auto");	
		$(".btnF").css("pointer-events", "auto");	
		$(".btnG").css("pointer-events", "auto");	

	
		
	});



});