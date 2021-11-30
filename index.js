function fetchSongs() {
	let artists= ['eminem', 'metallica', 'behemoth'];
    artists.forEach((element) => { fetch("https://deezerdevs-deezer.p.rapidapi.com/search?q="+element, {
    method: "GET",
     headers: {
		"x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
		"x-rapidapi-key": "56c7da9b59msh07dbb3256f67dacp1f2c6cjsn92fc40d6d345",
     },
  })
    .then((response) => response.json())
    .then(data => {
		let obj=data.data
      console.log(obj[0]);

      const row = document.querySelector(".songcontainer");

      for (let i = 0; i < obj.length; i++) {
        const {album:{cover},title} = obj[i];

        const col = document.createElement("div");
        col.className = "col-3";

        col.innerHTML = `
	<div class="card">
	<img src="${cover}" class="card-img-top" alt="...">
		<div class="card-body">
			<h5 class="card-title">${title}</h5>
			<p class="card-text"></p>
			
		</div>
	</div>
	`;
        row.appendChild(col);
      }
    })
    .catch((err) => {
      console.error(err);
    });});

 
}

fetchSongs();