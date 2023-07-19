// SIDEBAR TOGGLE
let mainLink = document.querySelector(".drop-category");
let sublinks = document.querySelector(".sublinks");
let arrowLink = document.querySelector(".ri-arrow-down-s-line");
mainLink.addEventListener("click", () => {
	sublinks.classList.toggle("show-sublink");
	arrowLink.classList.toggle("top-arrow");
});

var sidebarOpen = false;
var sidebar = document.getElementById("sidebar");
let body = document.querySelector("body");

function openSidebar() {
	if (!sidebarOpen) {
		sidebar.classList.add("sidebar-responsive");
		sidebarOpen = true;
	}
}

function closeSidebar() {
	if (sidebarOpen) {
		sidebar.classList.remove("sidebar-responsive");
		sidebarOpen = false;
	}
}

// ---------- CHARTS ----------

// BAR CHART

// AREA CHART
var areaChartOptions = {
	series: [
		{
			name: "Purchase Orders",
			data: [31, 40, 28, 51, 42, 109, 100],
		},
		{
			name: "Sales Orders",
			data: [11, 32, 45, 32, 34, 52, 41],
		},
	],
	chart: {
		height: 350,
		type: "area",
		toolbar: {
			show: false,
		},
	},
	colors: ["#4f35a1", "#246dec"],
	dataLabels: {
		enabled: false,
	},
	stroke: {
		curve: "smooth",
	},
	labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
	markers: {
		size: 0,
	},
	yaxis: [
		{
			title: {
				text: "Purchase Orders",
			},
		},
		{
			opposite: true,
			title: {
				text: "Sales Orders",
			},
		},
	],
	tooltip: {
		shared: true,
		intersect: false,
	},
};

var areaChart = new ApexCharts(document.querySelector("#area-chart"), areaChartOptions);
areaChart.render();
var isAdvancedUpload = (function () {
	var div = document.createElement("div");
	return (
		("draggable" in div || ("ondragstart" in div && "ondrop" in div)) &&
		"FormData" in window &&
		"FileReader" in window
	);
})();
// ************ check all input type check box
var checkboxes = document.querySelectorAll("input[type ='checkbox']");
function checkAll(myCheckbox) {
	if (myCheckbox.checked == true) {
		checkboxes.forEach(function (checkbox) {
			checkbox.checked = true;
		});
	} else {
		checkboxes.forEach(function (checkbox) {
			checkbox.checked = false;
		});
	}
}
// ******************** show delete button when click check box **********************//

const checkbox = document.getElementById("checkAll");
const deleteBtn = document.getElementById("delete-btn");

checkbox.addEventListener("click", () => {
	if (checkbox.checked) {
		deleteBtn.style.cssText = "display:block; transition: all 0.3s";
	} else {
		deleteBtn.style.cssText = "display:none ; transition: all 0.3s";
	}
});
function fav(icon) {
	if (icon.classList.contains("ri-heart-line")) {
		icon.classList.remove("ri-heart-line");
		icon.classList.add("ri-heart-fill");
		icon.style.cssText = "color:red; transition: all 0.3s";
	} else {
		icon.classList.remove("ri-heart-fill");
		icon.classList.add("ri-heart-line");
		icon.style.cssText = "color:currentColor; transition: all 0.3s";
	}
}
// *****************************
