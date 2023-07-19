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
