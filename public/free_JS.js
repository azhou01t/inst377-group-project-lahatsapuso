function loadTable() {
    const sortby2 = document.getElementById('sortby2').value

    const fetchPromise = fetch(`https://www.freetogame.com/api/games?sort-by=${sortby2}`)

  
    let table = "<table style='width:100%'><tr><th>Game Title</th><th>Game Developer</th></tr>";
  
    fetchPromise
      .then((res) => res.json())
      .then((res) => {
    console.log(res) 
        // let i = 1;
        for (const [key, value] of Object.entries(res)) {
  
        const resValueObject = value
          let gameName = "GAMENAME-Placeholder";
          let developerName = "DEVELOPERNAME Placeholder";

          for (const [key, value] of Object.entries(resValueObject)) {
             console.log('inside loop Key:', key)
            console.log('inside loop Value:', value)
             if (key == "title") {
              gameName = value;
            }
            if (key == "developer") {
              developerName = value;
            }
         } table += "<tr><td>" + gameName + "</td> <td>" + developerName + "</td> </tr><br>"
 
                              }      gamesInfoTable.innerHTML = table;
 } )
}
