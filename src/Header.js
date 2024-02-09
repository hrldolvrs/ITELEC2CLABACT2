function Header() {
  return (
    <div>
      <nav class = "navbar">
        <div class = "container-xxxl">
          <a class = "navbar-brand">
            <div class = "logo-image">
              <img src = "logo-fmovies.png" alt = "FMovies Logo" class = "header-logo" />
            </div>
          </a>
          <a href = "#">Home</a>
          <a href = "#">Genres</a>
          <a href = "#">Country</a>
          <a href = "#">Movies</a>
          <a href = "#">TV Series</a>
          <a href = "#">TOP IDMP</a>
          <input type = "text" placeholder = "Search..." class = "search-sidebar" />
        </div>
      </nav>
    </div>
  );
}

export default Header;
