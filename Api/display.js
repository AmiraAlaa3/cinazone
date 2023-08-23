let imgPath = "https://image.tmdb.org/t/p/w500";
let movieContainer=[];
async function getData(){
    let response=await fetch(`https://api.themoviedb.org/3/trending/movie/week?api_key=1a992e42ea2e2f4c31336ed1a99bf2ee`);
    let json=await response.json();
    movieContainer=json.results;
    displayMovies();
}
getData();

function displayMovies(){
    let container=``;
    document.getElementById('tranding-movie').innerHTML =""
    for(let i=0; i < 5 && i<movieContainer.length;i++ ){
        container +=`
         <div class="item">
                <img src="${imgPath+movieContainer[i].poster_path}" alt="tranding">
         </div>`
    }
    document.getElementById('tranding-movie').innerHTML =container;
}
    