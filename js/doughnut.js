const ctx = document.getElementById("doughnut").getContext("2d");
const doughnut = new Chart(ctx, {
	type: "doughnut",
	data: {
		labels: ["الفاعات", "المواصلات", "التصوير", "الطعام"],
		datasets: [
			{
				label: "# of Votes",
				data: [22, 8, 11, 3],
				backgroundColor: [
					"rgba(209, 61, 209,.7)",
					"rgba(34, 181, 176,.7)",
					"rgba(111, 88, 233,.7)",
					"rgba(128, 36, 174,.7)",
				],
				// borderColor: [
				// 	"rgba(255, 206, 86, 1)",
				// 	"rgba(75, 192, 192, 1)",
				// 	"rgba(153, 102, 255, 1)",
				// 	"rgba(255, 159, 64, 1)",
				// ],
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
