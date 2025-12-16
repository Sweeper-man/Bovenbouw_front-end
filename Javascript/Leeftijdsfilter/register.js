fetch("opdracht2_bijlage.json")
  .then(response => response.json())
  .then(data => {

    //onClick vs EventListener

    document.getElementById("filterButn").addEventListener("click", filterAge);

    function filterAge() {

      let text = "";

      let ageFilter = document.getElementById("ageFilter").value;
      let minAge = data.filter(person => person.leeftijd > ageFilter);

      for (let i = 0; i < minAge.length; i++) {
        text +=
          minAge[i].voornaam + " " +
          minAge[i].leeftijd + " jaar. <br>";
      }

      document.getElementById("filter").innerHTML = text;
    }
});
