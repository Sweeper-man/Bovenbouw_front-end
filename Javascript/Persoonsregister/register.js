fetch('opdracht1_bijlage.json')
  .then(res => res.json())
  .then(data => {
    console.log(data);
    document.getElementById("demo").textContent = JSON.stringify(data, null, 2);
  })
  .catch(err => console.error("Error loading JSON:", err));