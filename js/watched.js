let moviesWatchedContainer = []
let imgPath = "https://image.tmdb.org/t/p/w500";

if (window.localStorage.getItem("movie id")) {
   let movieIds = JSON.parse(localStorage.getItem("movie id"));
   for (movieId of movieIds) {
      addWatched(movieId)
   }

}
async function addWatched(movieId) {
   const options = {
      method: 'GET',
      headers: {
         accept: 'application/json',
         Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYTk5MmU0MmVhMmUyZjRjMzEzMzZlZDFhOTliZjJlZSIsInN1YiI6IjYzZmExNDI4NmFhOGUwMDA5NjhmMTM4ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.LUoduMk7hUpr9udybRicycrvMB0SescVzSSemviXAEI'
      }
   };
   let response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?language=en-US`, options);
   let json = await response.json();
   moviesWatchedContainer = json

   displayMovies()
}

async function displayMovies() {
   let container = '';
   let movies = document.getElementById('watched-movies-list');
   let genre = moviesWatchedContainer.genres.slice(0, 2).map(genre => genre.name).join(',');

   container = `
           <div class="movie-card">
                    <div class="movie-image">
                        <img src="${imgPath + moviesWatchedContainer.poster_path}" alt="Movie Poster 1">
                        <div>
                            <a class="remove-from-watched-list" onclick="removeWatched(${moviesWatchedContainer.id});">
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"
                                    fill="white">
                                    <path
                                        d="M35 20C35 11.7188 28.2812 5 20 5C11.7188 5 5 11.7188 5 20C5 28.2812 11.7188 35 20 35C28.2812 35 35 28.2812 35 20Z"
                                        stroke="#03E1F5" stroke-miterlimit="10" />
                                    <path d="M26.25 20H13.75" stroke="#03E1F5" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                </svg>
                            </a>
                        </div>
                    </div>
                    <div class="movie-info">
                        <h2 class="movie-title">${moviesWatchedContainer.title}</h2>
                        <div class="movie-rate-type">
                            <div class="rate">
                                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="13" viewBox="0 0 12 13"
                                    fill="none">
                                    <g clip-path="url(#clip0_561_1115)">
                                        <path
                                            d="M9.23437 11.3138C9.15543 11.3142 9.07842 11.2895 9.01429 11.2435L5.99999 9.05822L2.98569 11.2435C2.9213 11.2902 2.84371 11.3153 2.76416 11.315C2.6846 11.3147 2.6072 11.2891 2.54315 11.2419C2.47909 11.1948 2.43169 11.1284 2.40781 11.0525C2.38393 10.9767 2.38481 10.8951 2.4103 10.8198L3.58593 7.33768L0.539054 5.24822C0.473056 5.20302 0.423245 5.13789 0.396898 5.06235C0.370552 4.98682 0.36905 4.90484 0.392613 4.82839C0.416175 4.75195 0.463567 4.68504 0.527865 4.63744C0.592162 4.58985 0.669995 4.56406 0.749991 4.56385H4.5089L5.64327 1.07283C5.66771 0.997464 5.71539 0.931771 5.77948 0.88518C5.84356 0.838588 5.92076 0.813492 5.99999 0.813492C6.07922 0.813492 6.15642 0.838588 6.22051 0.88518C6.28459 0.931771 6.33227 0.997464 6.35671 1.07283L7.49108 4.56502H11.25C11.3301 4.56498 11.4081 4.59059 11.4726 4.63809C11.5371 4.6856 11.5847 4.7525 11.6084 4.82901C11.6321 4.90551 11.6307 4.9876 11.6044 5.06325C11.578 5.1389 11.5282 5.20413 11.4621 5.2494L8.41405 7.33768L9.58898 10.8188C9.60801 10.8752 9.61337 10.9353 9.6046 10.9941C9.59583 11.053 9.57319 11.1089 9.53854 11.1572C9.5039 11.2056 9.45824 11.245 9.40535 11.2723C9.35246 11.2995 9.29385 11.3137 9.23437 11.3138Z"
                                            fill="#F5D805" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_561_1115">
                                            <rect width="12" height="12" fill="white"
                                                transform="translate(0 0.0638428)" />
                                        </clipPath>
                                    </defs>
                                </svg>
                                <span>${moviesWatchedContainer.vote_average}</span>
                            </div>
                            <h4 class="movie-type">${genre}</h4>
                        </div>
                        <div class="movie-time-year">
                            <div class="time">
                                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="13" viewBox="0 0 12 13"
                                    fill="none">
                                    <path
                                        d="M2.64612 3.06385C1.91843 3.87658 1.51102 4.92614 1.49979 6.01698C1.47213 8.50955 3.50721 10.5592 5.99979 10.5639C8.48885 10.5685 10.4998 8.55221 10.4998 6.06385C10.4998 3.61369 8.54159 1.61987 6.10526 1.56385C6.09155 1.56341 6.07789 1.56573 6.06509 1.57069C6.0523 1.57564 6.04063 1.58312 6.03079 1.59268C6.02094 1.60223 6.01313 1.61368 6.0078 1.62632C6.00248 1.63896 5.99975 1.65255 5.99979 1.66627V3.62635"
                                        stroke="#03E1F5" stroke-linecap="round" stroke-linejoin="round" />
                                    <path
                                        d="M5.46985 6.59423L3.61829 3.9458C3.59267 3.9091 3.58079 3.86456 3.58472 3.81998C3.58865 3.7754 3.60815 3.73363 3.63979 3.70199C3.67144 3.67035 3.71321 3.65085 3.75779 3.64692C3.80237 3.64298 3.84691 3.65487 3.8836 3.68048L6.53204 5.53205C6.69448 5.64904 6.80434 5.82529 6.83785 6.02266C6.87135 6.22003 6.82581 6.42266 6.71107 6.58671C6.59633 6.75076 6.42163 6.86305 6.22474 6.89928C6.02785 6.93551 5.82461 6.89278 5.65899 6.78033C5.58576 6.72958 5.52178 6.66663 5.46985 6.59423Z"
                                        fill="#03E1F5" />
                                </svg>
                                <span>1 hr 56 min</span>
                            </div>
                            <p class="movie-release-year">${moviesWatchedContainer.release_date}</p>
                        </div>
                    </div>
                </div>`;

   movies.innerHTML += container;
}

function removeWatched(movieIdToRemove) {
   // Retrieve the stored movie IDs from localStorage
   let storedMovieIds = localStorage.getItem('movie id');
   if (!storedMovieIds) {
      storedMovieIds = [];
   } else {
      storedMovieIds = JSON.parse(storedMovieIds);
   }
   // Remove the movie ID from the array
   const indexToRemove = storedMovieIds.indexOf(movieIdToRemove);
   if (indexToRemove !== -1) {
      storedMovieIds.splice(indexToRemove, 1);
      localStorage.setItem('movie id', JSON.stringify(storedMovieIds));

      // Clear the moviesWatchedContainer
      let movies = document.getElementById('watched-movies-list');
      movies.innerHTML = "";
      // update the watched list.
      for (movieId of storedMovieIds) {
         addWatched(movieId)
      }
   }
}