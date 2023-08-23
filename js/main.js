function changeBackground(imageUrl) {
    document.getElementById("trending").style.backgroundImage = `url(${imageUrl})`;

}
$(document).ready(function () {
     $(".custom-carousel").owlCarousel({
                items: 1, // Display one item at a time
                loop: true,
                margin: 10, // Margin between items
                responsiveClass: true,
                responsive: {
                    0: {
                        items: 1
                    },
                    600: {
                        items: 3
                    },
                    1000: {
                        items: 5
                    }
                }
            });

            // Add 'active' class to the clicked item
            $(".custom-carousel .item").click(function () {
                $(".custom-carousel .item").removeClass("active");
                $(this).addClass("active");
                 // Get the movie title and type from the data attributes
        const movieTitle = $(this).find('img').data('movie-title');
        const movieType = $(this).find('img').data('movie-type');

        // Display the movie title and type
        document.getElementById("movie").innerHTML = movieType;
        document.getElementById("movie-name").innerHTML = movieTitle;
            });
        
});

