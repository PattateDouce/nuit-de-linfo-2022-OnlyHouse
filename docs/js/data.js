// Init

let charts = ['transmission', 'line', 'multiple', 'bar', 'pie', 'doughnut'];

function hide_charts(param = charts) {
	param.forEach(function(item) {
		document.getElementById(item).style.display = 'none';
	});
}

function show_chart(param) {
	document.getElementsByClassName("chart-container")[0].style.display = 'block';
	hide_charts();
	document.getElementById(param).style.display = 'block';
}

// hide_charts();

// Scatter

function load_transmission() {
	show_chart('transmission');


}

// Line

function load_line() {
	show_chart('line');

	var xValues = [50,60,70,80,90,100,110,120,130,140,150];
	var yValues = [7,8,8,9,9,9,10,11,14,14,15];

	new Chart("linec", {
	type: "line",
	data: {
		labels: xValues,
		datasets: [{
		backgroundColor: "rgba(0,0,0,1.0)",
		borderColor: "rgba(0,0,0,0.1)",
		data: yValues
		}]
	},
	options:{}
	});
}

// Multiple

function load_multiple() {
	show_chart('multiple');

	var xValues = [1990, 1995, 2000, 2005, 2010, 2015];

	new Chart("multiplec", {
	type: "line",
	data: {
		labels: xValues,
		datasets: [{
			data: [350, 850, 1600, 2000, 1600, 1100],
			borderColor: "purple",
			label: ["Décés"]
		},
		{
			data: [2000, 3250, 3100, 2650, 2300, 1900],
			borderColor: "green",
			label: ["Nouveaux cas"]
		}]
	},
	options: {
		legend: {display: false}
	}
	});
}

// Multiple 2

function load_multiple2() {
	show_chart('multiple');

	var xValues = [1990, 1995, 2000, 2005, 2010, 2015];

	new Chart("multiplec", {
	type: "line",
	data: {
		labels: xValues,
		datasets: [{
			data: [350, 850, 1600, 2000, 1600, 1100],
			borderColor: "purple",
			label: ["Décés"]
		},
		{
			data: [2000, 3250, 3100, 2650, 2300, 1900],
			borderColor: "green",
			label: ["Nouveaux cas"]
		}]
	},
	options: {
		legend: {display: false}
	}
	});
}

// Bar

function load_bar() {
	show_chart('bar');
	document.getElementById('barc').innerHTML = 'vide';

	var xValues = ["Fellation", "Vaginal-pénétrant", "Vaginal-pénétré", "Sodomie-pénétrant", "Sodomie-pénétré"];
	var yValues = [0.01, 0.05, 0.1, 0.62, 1.7];
	var barColors = ["red", "green","#00ff00","orange","#ffb559"];

	new Chart("barc", {
	type: "bar",
	data: {
		labels: xValues,
		datasets: [{
			backgroundColor: barColors,
			data: yValues,
			label: []
		}]
	},
	options: {}
	});
}

// Bar 2

function load_bar2() {
	show_chart('bar');
	document.getElementById('barc').innerHTML = 'vide';

	var xValues = ["Fellation", "Vaginal-pénétrant", "Vaginal-pénétré", "Sodomie-pénétrant", "Sodomie-pénétré"];
	var yValues = [0.01, 0.05, 0.1, 0.62, 1.7];
	var barColors = ["red", "green","#00ff00","orange","#ffb559"];

	new Chart("barc", {
	type: "bar",
	data: {
		labels: xValues,
		datasets: [{
			backgroundColor: barColors,
			data: yValues,
			label: []
		}]
	},
	options: {}
	});
}

// Pie

function load_pie() {
	show_chart('piec');

	var xValues = ["Stérilisation féminine", "Préservatif masculin", "Stérilet", "Pilule", "Injections et implants", "Méthodes traditionnelles"];
	var yValues = [24, 21, 17, 16, 10, 9];
	var barColors = ["red", "green","blue","orange","brown", "black"];


	new Chart("piec", {
		type: "pie",
		data: {
		labels: xValues,
		datasets: [{
			backgroundColor: barColors,
			data: yValues
		}]
		},
		options: {
		title: {
			display: true,
			text: "Contraception les plus utilisés"
		}
		}
	});
}

//   Doughnut

function load_doughnut() {
	show_chart('doughnut');

	var xValues = ["Italy", "France", "Spain", "USA", "Argentina"];
	var yValues = [55, 49, 44, 24, 15];
	var barColors = [
	"#b91d47",
	"#00aba9",
	"#2b5797",
	"#e8c3b9",
	"#1e7145"
	];

	new Chart("doughnutc", {
	type: "doughnut",
	data: {
		labels: xValues,
		datasets: [{
		backgroundColor: barColors,
		data: yValues
		}]
	},
	options: {
		title: {
		display: true,
		text: "World Wide Wine Production 2018"
		}
	}
	});
}
