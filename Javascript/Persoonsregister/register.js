fetch("opdracht1_bijlage.json")
.then(response => response.json())
.then(data => {
    document.getElementById("output").textContent =
    JSON.stringify(data, null, 2);
});