<h1>API</h1>

<div class="submenu">
  <p><b>Example of working API with the server (calculating values)</b></p>  
  <ul>
    <li><a href="/api/add-form">01. Get the sum of two digits (HTTP method: POST for form)</a></li>
    <li><a href="/api/add-form_actions">02. Get the sum of two digits (HTTP method: POST for form actions)</a></li>
    <li><a href="/api/calc-form_actions">03. Get the result of the calculation (HTTP method: POST for form actions)</a></li>
  </ul>

  <p><b>Example of working API with the <a href="https://api.openbrewerydb.org">OpenBreweryDB</a> (public API for brewery-related data)</b></p>  
  <ul>
    <li><a href="/api/fake-data/openbrewerydb/single/b54b16e1-ac3b-4bff-a11f-f7ae9ddc27e0">01. Get a single brewery (HTTP method: GET for server)</a></li>
    <li><a href="/api/fake-data/openbrewerydb/list/per_page/5">02. Returns a list of breweries (HTTP method: GET for server)</a></li>
    <li><a href="/api/fake-data/openbrewerydb/list/by_city/san_diego/per_page/3">03. Filter breweries by city (HTTP method: GET for server)</a></li>
    <li><a href="/api/fake-data/openbrewerydb/random">04. Get a random brewery (HTTP method: GET for server)</a></li>
    <li><a href="/api/fake-data/openbrewerydb/random/size/3">05. Number of breweries to return each call (HTTP method: GET for server)</a></li>
    <li><a href="/api/fake-data/openbrewerydb/search/query/san%20diego/per_page/3">06. Search for breweries based on a search term (HTTP method: GET for server)</a></li>
    <li><a href="/api/fake-data/openbrewerydb/autocomplete/query/san%20diego">07. Return a list of names and ids of breweries based on a search term (HTTP method: GET for server)</a></li>
    <li><a href="/api/fake-data/openbrewerydb/meta">08. Show all breweries meta data (HTTP method: GET for server)</a></li>
    <li><a href="/api/fake-data/openbrewerydb/meta/by_country/south_korea">09. Show South Korean breweries meta data (HTTP method: GET for server)</a></li>
    <li><a href="/api/fake-data/openbrewerydb/meta/by_type/micro">10. Show micro breweries meta data (HTTP method: GET for server)</a></li>
    <li><a href="/api/fake-data/openbrewerydb/single/b54b16e1-ac3b-4bff-a11f-f7ae9ddc27e0_">11. Get an <span class="error">ERROR</span> when accessing a non-existent brewery (HTTP method: GET for server)</a></li>
  </ul>

  <p><b>Example of working API with the fake-data service (Get fake-data)</b></p>  
  <ul>
    <li><a href="/api/fake-form_actions">An example of receiving fake data (HTTP method: POST for form actions)</a></li>
  </ul>

  <p><b>Example of working handlers API with the server</b></p>  
  <ul>
    <li><a href="/api/server-handlers/get-handler">An example of receiving random number (HTTP method: GET for calculating of random number)</a></li>
    <li><a href="/api/server-handlers/post-handler">An example of Todo list (HTTP method: POST for Todo list)</a></li>
    <li><a href="/api/server-handlers/put-delete-handler">An example of Todo list (HTTP methods: POST, PUT, DELETE for Todo list)</a></li>
  </ul>
  <br/>
</div>
