const APILINK = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=a5ef2ffd9aff023ca2fad460ce0b297a&page=1";
const IMG_PATH = "https://image.tmdb.org/t/p/w1280";
const SEARCHAPI = "https://api.themoviedb.org/3/search/movie?&api_key=a5ef2ffd9aff023ca2fad460ce0b297a&query";

//Send query to API and retrieve it.

const main = document.getElementById("section");
const form = document.getElementById("form");
const search = document.getElementById("query");

//Fetch from URL
function returnMovies(url){
    fetch(url).then(res => res.json())
    .then(function(data)){
        console.log(data.results);
        data.results.forEach(element => {
            const div_card = document.createElement('div');
            //create new div element!^^
            const div_row = document.createElement('div');
            const div_column = document.createElement('div');
            const image = document.createElement('img');
            const title = document.createElement('h3');
            const center = document.createElement('center');

            title.innerHTML = `${element.title}`;
            image.src = IMG_PATH + element.poster_path;

            center.appendChild(image);
            div_card.appendChild(center);
            div_card.appendChild(title);
            div_column.appendChild(div_card);
            div_row.appendChild(div_column);

            main.appendChild(div_row);

        });
    });
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    main.innerHTML = "";
    //^^ Remove all initial movies after search

    const searchItem = search.value;

    if (searchItem) {
        returnMovies(SEARCHAPI + searchItem);
        search.value = "";
    }

});