const button = document.querySelector('button')
const input = document.querySelector('.input')

input.addEventListener("input", (e) => {
	const value = e.target.value;
	getValue(value)
 });

async function getValue(searchStr) {
   const finish = document.querySelector('.result-wraper') 
	let url =`http://www.omdbapi.com/?apikey=57fbf30f&s=${input.value}`	
	
	if (searchStr.length) {
		let response = await fetch(url);
		let data = await response.json(); 
		let movie = Object(data);
		finish.innerHTML = '';

	for (i = 0; i < 12; i++) {
		 let div = document.createElement('div');
		 div.id="result-block";
		 div.innerHTML = div.innerHTML +`<img src = "${movie.Search[i].Poster}">`+
		`<p>Title: ${movie.Search[i].Title}</p>`+ `<p>Type: ${movie.Search[i].Type}</p>`+`<p> Year: ${movie.Search[i].Year}</p>`;
		 finish.append(div);	
	}
	}
	if (!response.ok) {
		throw new Error("Error" + response.status);
	}
}

document.getElementById("btn-clear").onclick = function(e) {
	const finish = document.querySelector('.result-wraper') 
	finish.innerHTML = '';
	document.querySelector(".input").value = "";
 }