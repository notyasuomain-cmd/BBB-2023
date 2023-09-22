window.addEventListener('load', async () => {

    let movies = []; // Declare an empty array to store all movies
    let categories = []; // Declare an empty array to store selected categories

    try {
        const response = await fetch('./assets/js/movies.json');
        const data = await response.json();
        movies = data.items;

        movies = sortMoviesAlphabetically(movies);

        // Populate categories array with all unique categories
        movies.forEach(element => {
            element.categories.forEach(category => {
                if (!categories.includes(category)) {
                    categories.push(category);
                }
            });
        });
        // Initialize the movie list with all movies
        updateMovieList(movies);

        // Populate the categories dropdown with all categories
        categories.forEach(category => {
            html = `
                <li>
                    <label class="label-text">
                    <input class="pipa" type="checkbox" value="${category}" />${category}
                    </label>
                </li>`
            

            document.getElementsByClassName('checkbox-dropdown-list')[0].innerHTML += html
            document.getElementsByClassName('checkbox-dropdown-list')[1].innerHTML += html
        });


    } catch(err) {
        console.log(err);
    }
    
    $(".checkbox-dropdown").click(function () {
        $(this).toggleClass("is-active");
    });
  
    $(".checkbox-dropdown ul").click(function(e) {
        e.stopPropagation();
    });
    
    
    $(".filter").click(function () {
        i = document.getElementsByClassName('checkbox-dropdown-list')[0].children;
        e = document.getElementsByClassName('checkbox-dropdown-list')[1].children;
        console.log(e);
        //console.log(u);
        let selected_categories = [];
        const excluded_categories = [];
        
        Array.from(i).forEach(element => {
            if(element.children[0].children[0].checked) {
                selected_categories.push(element.children[0].children[0].value);
            }
            
        });
        Array.from(e).forEach(element => {
            if(element.children[0].children[0].checked) {
                excluded_categories.push(element.children[0].children[0].value);
            }
            
        });
        


        const filteredMovies = movies.filter(movie => {
            const hasSelectedCategories = selected_categories.some(category => movie.categories.includes(category));
            const hasExcludedCategories = excluded_categories.some(category => movie.categories.includes(category));
            
            return hasSelectedCategories && !hasExcludedCategories;
        });



        updateMovieList(filteredMovies);
        //console.log(selected_categories);


    });

    document.getElementById('alphabetical').addEventListener('click', () => {
        const sortedMovies = sortMoviesAlphabetically(movies);
        updateMovieList(sortedMovies);
    });
    
    document.getElementById('release-date').addEventListener('click', () => {
        const sortedMovies = sortMoviesByReleaseDate(movies);
        updateMovieList(sortedMovies);
    });


    function updateMovieList(filteredMovies) {
        const movieList = document.getElementById('movies'); // Keeping 'movies' as the element id
        const movieHTML = filteredMovies.map(element =>
            `<div class="col-md-3">
                <div><img src="${element.thumbnail}" width="250" height="250" loading="lazy"  class="center"></div>
                    <div>
                        <h1 class="abraka" style="text-align: center;">${element.title}</h1>
                    </div>
            </div>`
        );

        movieList.innerHTML = movieHTML.join('');
    }

    // sort alphabetically by default
    function sortMoviesAlphabetically(movies) {
        return movies.sort((a, b) => {
            const titleA = a.title.toLowerCase();
            const titleB = b.title.toLowerCase();
            if (titleA < titleB) return -1;
            if (titleA > titleB) return 1;
            return 0
        });
    }
    updateMovieList(sortMoviesAlphabetically(movies));

    $('.search').keyup(function() {
        const search = $(this).val().toLowerCase();
        console.log(search);
        const filteredMovies = movies.filter(movie => {
            const hasSearch = movie.title.toLowerCase().includes(search);
            return hasSearch;
        });
        updateMovieList(filteredMovies);
    });

    
})