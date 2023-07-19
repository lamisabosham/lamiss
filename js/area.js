const ctx2 = document.getElementById("bar").getContext("2d");
const bar = new Chart(ctx2, {
	type: "line",
	data: {
		labels: ["الفاعات", "الفاعات", "المواصلات", "التصوير"],
		datasets: [
			{
				label: "# of Votes",
				data: [22, 8, 11, 3, 10, 4, 13],
				backgroundColor: [
					"rgba(209, 61, 209,.7)",
					"rgba(34, 181, 176,.7)",
					"rgba(111, 88, 233,.7)",
					"rgba(128, 36, 174,.7)",
					"rgba(128, 36, 174,.7)",
					"rgba(128, 36, 174,.7)",
					"rgba(128, 36, 174,.7)",
				],
				borderWidth: 1,
			},
		],
	},
	options: {
		scales: {
			y: {
				beginAtZero: true,
			},
		},
	},
});
