const slots = {
	"Dr. Amit Sharma": ["10:00 AM", "11:00 AM", "12:00 PM"],
	"Dr. Arthur Concepion": ["01:00 PM", "02:00 PM", "03:00 PM"],
	"Dr. Rahul Roy": ["04:00 PM", "05:00 PM"],
	"Dr. Herman Garter": ["10:00 AM", "02:00 PM"],
	"Dr. Arjun Ghosh": ["12:00 PM", "03:00 PM", "06:00 PM"],
};

function loadSlots() {
	const doctor = document.getElementById("doctor").value;
	const timeSelect = document.getElementById("time");
	timeSelect.innerHTML = "";
	slots[doctor].forEach((t) => {
		let opt = document.createElement("option");
		opt.text = t;
		timeSelect.add(opt);
	});
}
const print = document
	.getElementById("admission-form")
	.addEventListener("submit", function (e) {
		e.preventDefault();
		const name = document.getElementById("name").value;
		const email = document.getElementById("email").value;
		const phone = document.getElementById("phone").value;
		const time = document.getElementById("time");
		const doctor = document.getElementById("doctor").value;
	});
console.log(print);
