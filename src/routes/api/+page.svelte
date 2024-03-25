<h1>API</h1>

<div class="submenu">
  <p><b>Example of working API with the server (calculating values)</b></p>  
  <ul>
    <li><a href="/api/add-form">Get the sum of two digits (HTTP method: POST for form)</a></li>
    <li><a href="/api/add-form_actions">Get the sum of two digits (HTTP method: POST for form actions)</a></li>
    <li><a href="/api/calc-form_actions">Get the result of the calculation (HTTP method: POST for form actions)</a></li>
  </ul>

  <p><b>Example of working API with the <a href="https://api.openbrewerydb.org">OpenBreweryDB</a> (public API for brewery-related data)</b></p>  
  <ul>
    <li><a href="/api/openbrewerydb/b54b16e1-ac3b-4bff-a11f-f7ae9ddc27e0">Get a single brewery (HTTP method: GET for server)</a></li>
    <li><a href="/api/openbrewerydb/list?per_page=5">Returns a list of breweries (HTTP method: GET for server)</a></li>
    <li><a href="/api/openbrewerydb/list?by_city=san_diego&per_page=3">Filter breweries by city (HTTP method: GET for server)</a></li>
    <li><a href="/api/openbrewerydb/random">Get a random brewery (HTTP method: GET for server)</a></li>
    <li><a href="/api/openbrewerydb/random?size=3">Number of breweries to return each call (HTTP method: GET for server)</a></li>
    <li><a href="/api/openbrewerydb/search?query=san%20diego&per_page=3">Search for breweries based on a search term (HTTP method: GET for server)</a></li>
    <li><a href="/api/openbrewerydb/autocomplete?query=san%20diego">Return a list of names and ids of breweries based on a search term (HTTP method: GET for server)</a></li>
    <li><a href="/api/openbrewerydb/meta">Show all breweries meta data (HTTP method: GET for server)</a></li>
    <li><a href="/api/openbrewerydb/meta?by_country=south_korea">Show South Korean breweries meta data (HTTP method: GET for server)</a></li>
    <li><a href="/api/openbrewerydb/meta?by_type=micro">Show micro breweries meta data (HTTP method: GET for server)</a></li>
  </ul>

  <p><b>Example of working API with the server (get fake-data)</b></p>  
  <ul>
    <li><a href="/api/fake-data/openbrewerydb/b54b16e1-ac3b-4bff-a11f-f7ae9ddc27e0">Get a single brewery</a></li>
  </ul>
</div>