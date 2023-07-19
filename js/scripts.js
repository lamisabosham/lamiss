// SIDEBAR TOGGLE
let mainLink = document.querySelector(".drop-category");
let sublinks = document.querySelector(".sublinks");

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
		deleteBtn.style.cssText = "display:block; transition: all 0.3s; position: relative;";
	} else {
		deleteBtn.style.cssText = "display:none ; transition: all 0.3s";
	}
});

// ---------- CHARTS ----------

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
const inputImage = document.getElementById("input-image");
const imageBox = document.getElementById("image-box");

inputImage.addEventListener("change", function () {
	const file = inputImage.files[0];
	const reader = new FileReader();
	reader.onload = function () {
		const image = new Image();
		image.onload = function () {
			imageBox.style.backgroundImage = `url(${reader.result})`;
			localStorage.setItem("image", reader.result);
		};
		image.src = reader.result;
	};
	reader.readAsDataURL(file);
});

// Function to load the saved image from local storage
function loadSavedImage() {
	const savedImage = localStorage.getItem("image");

	if (savedImage) {
		imageBox.style.backgroundImage = `url(${savedImage})`;
	}
}
loadSavedImage();
