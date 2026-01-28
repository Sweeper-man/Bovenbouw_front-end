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

    document.getElementById("filterBtn").addEventListener("click", filterPrice);

    function filterPrice () {
      
      let text = "";

      let priceF = document.getElementById("priceF").value;
      let filteredP = data.filter(item => item.price <= priceF);

      for (let i = 0; i < filteredP.length; i++) {
        text += 
          filteredP[i].title + ", " +
          "€" + filteredP[i].price + "<br>";
      }

      document.getElementById("output").innerHTML = text;
    }
  });