document.getElementById("file-upload").addEventListener("change", function(event) {
    const files = event.target.files;
    const imageGrid = document.querySelector(".image-grid");

    for (let file of files) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const img = document.createElement("img");
            img.src = e.target.result;
            imageGrid.appendChild(img);
        };
        reader.readAsDataURL(file);
    }
});
