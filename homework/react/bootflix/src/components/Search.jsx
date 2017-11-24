import React from 'react'

// Update the forms to utilize methods being passed down from App.js,
// along with the Handle Change Functions to update state
const Search = (props) => {
  const { searchByTitle, handleSearchTitle, searchById, handleSearchId } = props;
  return (
    <section id="movie-search">
      <strong>Search by:</strong> Title <em>or</em> ID
        <div className="search">
        <form id="title-search-form" method="get" onClick={searchByTitle}>
          /* Use "Value" to make the Title input update as state updates*/
          <input type="text" name="title" placeholder="Enter movie title" onChange={handleSearchTitle} />
          <input type="submit" value="Search for this title" />
        </form>
      </div>
      <div className="search">
        <form id="id-search-form" method="get" onClick={searchById}>
          /* Use "Value" to make the ID input update as state updates*/
          <input type="text" name="id" placeholder="Enter omdb movie ID" onChange={handleSearchId} />
          <input type="submit" value="Search by ID" />
        </form>
      </div>
    </section>
  );
}

export default Search;
