// ===========================================
// Constants
// ===========================================

// Labels
var s1a_labels =  [
	"Monitoring Services", 
	"Insurance - Terrorism", 
	"Insurance - Estate/Buildings", 
	"Ground Maintenance", 
	"General Maintennace", 
	"Contribution to Reserves", 
	"Management Fees", 
	"Accounts Preparation Fee", 
	"Audit Fees"
];

// Colors
var s1a_backgroundColors = [
	"#ab000d", 
	"#5c007a", 
	"#00227b", 
	"#005b4f", 
	"#4b830d", 
	"#c68400", 
	"#b91400", 
	"#40241a", 
	"#29434e"
];

var s1a_hoverBackgroundColor = [
	"#ff6f60", 
	"#c158dc", 
	"#6f74dd", 
	"#4ebaaa", 
	"#aee571", 
	"#ffe54c", 
	"#ff844c", 
	"#9c786c", 
	"#819ca9"
];

// Line chart border width
var border_width = 2;

var total_background_color =  [ 'rgba(105, 0, 132, .2)' ];
var total_border_color =  ['rgba(200, 99, 132, .7)'];

var estimated_background_color =  [ 'rgba(0, 137, 132, .2)' ];
var estimated_border_color =  [ 'rgba(0, 10, 130, .7)' ];

var labels = ["2016", "2017", "2018", "2019", "2020"];

// ===========================================
// Functions
// ===========================================
function createPieChart(chart, data) {
	new Chart(chart, {
		type: 'pie',
		data: {
			labels: s1a_labels,
			datasets: [{
				data: data,
				backgroundColor: s1a_backgroundColors,
				hoverBackgroundColor: s1a_hoverBackgroundColor
			}]
		},
		options: {
			responsive: true
		}
	});	
};

function  createLineChart(chart, estimated_data, total_data) {
	new Chart(chart, {
		type: 'line',
		data: {
			labels: labels,
			datasets: [
			{
				label: "Total",
				data: total_data,
				backgroundColor: total_background_color,
				borderColor: total_border_color,
				borderWidth: border_width
			},
			{
				label: "Estimated",
				data: estimated_data,
				backgroundColor: estimated_background_color,
				borderColor: estimated_border_color,
				borderWidth: border_width
			}
			]
		},
		options: { responsive: true }
	});
}




//pie estimations
var s1a_2020_budget = document.getElementById("s1a_2020_budget").getContext('2d');
var s1a_2019_budget = document.getElementById("s1a_2019_budget").getContext('2d');
var s1a_2018_budget = document.getElementById("s1a_2018_budget").getContext('2d');
var s1a_2017_budget = document.getElementById("s1a_2017_budget").getContext('2d');
var s1a_2016_budget = document.getElementById("s1a_2016_budget").getContext('2d');


createPieChart(s1a_2020_budget, [826, 30, 1325, 6000, 3000, 1000, 29280, 5200, 846]);
createPieChart(s1a_2019_budget, [470, 40, 1300, 6000, 3000, 1500, 28290, 5000, 755]);
createPieChart(s1a_2018_budget, [470, 40, 1300, 5000, 3000, 1150, 26943, 5004, 638]);
createPieChart(s1a_2017_budget, [275, 40, 785, 6000, 2500, 700, 25660, 4812, 638]);
createPieChart(s1a_2016_budget, [918, 0, 460, 2500, 1500, 200, 24913, 4626, 0]);

// End year
var s1a_2018_end_year = document.getElementById("s1a_2018_end_year").getContext('2d');
var s1a_2017_end_year = document.getElementById("s1a_2017_end_year").getContext('2d');
var s1a_2016_end_year = document.getElementById("s1a_2016_end_year").getContext('2d');

createPieChart(s1a_2018_end_year,[826, 24, 1288, 6724, 3467, 1150, 26943, 4857, 846]);
createPieChart(s1a_2017_end_year, [706, 23, 1259, 8659, 2274, 700, 25660, 4857, 755]);
createPieChart(s1a_2016_end_year, [826, 38, 1219, 6573, 2896, 199, 24913, 4626, 604]);

//line
var s1a_total = document.getElementById("s1a_total").getContext('2d');
var s1a_monitoring = document.getElementById("s1a_monitoring").getContext('2d');
var s1a_terrorism = document.getElementById("s1a_terrorism").getContext('2d');
var s1a_estate = document.getElementById("s1a_estate").getContext('2d');
var s1a_ground = document.getElementById("s1a_ground").getContext('2d');
var s1a_general = document.getElementById("s1a_general").getContext('2d');
var s1a_reserves = document.getElementById("s1a_reserves").getContext('2d');
var s1a_management = document.getElementById("s1a_management").getContext('2d');
var s1a_account = document.getElementById("s1a_account").getContext('2d');
var s1a_audit = document.getElementById("s1a_audit").getContext('2d');

createLineChart(s1a_total, 		[35117, 41410, 43545, 46355, 47507], 	[41894, 44893, 46125, 0, 0]);
createLineChart(s1a_monitoring, [918, 275, 470, 470, 826], 				[826, 706, 826, 0, 0]);
createLineChart(s1a_terrorism, 	[0, 40, 40, 40, 30], 					[38, 23, 24, 0, 0]);
createLineChart(s1a_estate, 	[460, 785, 1300, 1300, 1325], 			[1219, 1259, 1288, 0, 0]);
createLineChart(s1a_ground, 	[2500, 6000, 5000, 6000, 6000], 		[6573, 8659, 6724, 0, 0]);
createLineChart(s1a_general, 	[1500, 2500, 3000, 3000, 3000], 		[2896, 2274, 3467, 0, 0]);
createLineChart(s1a_reserves, 	[200, 700, 1150, 1500, 1000], 			[199, 700, 1150, 0, 0]);
createLineChart(s1a_management, [24913, 25660, 26943, 28290, 29280],	[24913, 25660, 26843, 0, 0]);
createLineChart(s1a_account, 	[4626, 4812, 5004, 5000, 5200], 		[4626, 4859, 4857, 0, 0]);
createLineChart(s1a_audit, 		[0, 638, 638, 755, 846], 				[604, 755, 846, 0, 0]);

var s1a_total_increase = document.getElementById("s1a_total_increase").getContext('2d');
var s1a_monitoring_increase = document.getElementById("s1a_monitoring_increase").getContext('2d');
var s1a_terrorism_increase = document.getElementById("s1a_terrorism_increase").getContext('2d');
var s1a_estate_increase = document.getElementById("s1a_estate_increase").getContext('2d');
var s1a_ground_increase = document.getElementById("s1a_ground_increase").getContext('2d');
var s1a_general_increase = document.getElementById("s1a_general_increase").getContext('2d');
var s1a_reserves_increase = document.getElementById("s1a_reserves_increase").getContext('2d');
var s1a_management_increase = document.getElementById("s1a_management_increase").getContext('2d');
var s1a_account_increase = document.getElementById("s1a_account_increase").getContext('2d');
var s1a_audit_increase = document.getElementById("s1a_audit_increase").getContext('2d');
