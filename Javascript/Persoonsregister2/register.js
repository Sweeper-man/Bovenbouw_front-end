fetch("opdracht2_bijlage.json")
  .then(response => response.json())
  .then(data => {

    let len = data.length;
    let text = "";

    for (let i = 0; i < len; i++) {
      text += 
        data[i].voornaam + " " +
        data[i].achternaam + ", " +
        data[i].nationaliteit + ", " +
        data[i].leeftijd + " jaar, " +
        data[i].gewicht + " kg. <br>";
    }

    document.getElementById("output").innerHTML = text;
});
