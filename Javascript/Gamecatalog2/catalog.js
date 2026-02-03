fetch("games.json")
  .then(response => response.json())
  .then(data => {

    let len = data.length;
    let text = "";

    let output = document.getElementById("output");

    for (let i = 0; i < len; i++) {
      const borderDiv = document.createElement("div");
      borderDiv.classList.add("border");
      
      text =
        data[i].title + ", " +
        "€" + data[i].price + ", ";
        //+ data[i].genre + ", " +
        // data[i].rating + "/5 <br> "

        output.appendChild(borderDiv).innerHTML = text;
    }

    document.getElementById("GenreFltrBtn").addEventListener("click", filterGenre);

    function filterGenre () {

      let text = "";

      let genreF = document.getElementById("genreF").value;
      let filteredGe = data.filter(item => item.genre == genreF);

      for (let i = 0; i < filteredGe.length; i++) {
        text +=
          filteredGe[i].title + ", " +
          filteredGe[i].genre + "<br>"; 
      }

      document.getElementById("output").innerHTML = text;
    }

    
    document.getElementById("PrijsFltrBtn").addEventListener("click", filterPrice);

    function filterPrice () {
      
      let text = "";

      let priceF = document.getElementById("priceF").value;
      let filteredPr = data.filter(item => item.price <= priceF);

      for (let i = 0; i < filteredPr.length; i++) {
        text += 
          filteredPr[i].title + ", " +
          "€" + filteredPr[i].price + "<br>";
      }

      document.getElementById("output").innerHTML = text;
    }
  });