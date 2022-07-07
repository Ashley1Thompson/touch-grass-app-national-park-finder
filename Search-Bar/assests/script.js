var resultTextEl = document.getElementById('result-text');
var searchResultsEl = document.getElementById('search-results');
var searchInputEl = document.getElementById('search-input');
var searchButtonEl = document.getElementById('submit-button');
var resultCardEl = document.createElement('div');
var resultMainEl = document.createElement('div');
var resultTitleEl = document.createElement('h4');
var resultContentEl = document.createElement('p');


// function to loop information from API to search in JS

function showResults(pikachu) {
  console.log(pikachu);

  var input = searchInputEl.value;

  resultTextEl.textContent = input;

  resultTitleEl.textContent = pikachu;
  resultContentEl.textContent = pikachu;

  // .data[0].parks.fullName
  // .data[0].parks.url
  searchResultsEl.appendChild(resultCardEl);
  resultCardEl.appendChild(resultMainEl);
  resultMainEl.appendChild(resultTextEl);
  resultMainEl.appendChild(resultContentEl);
}

searchButtonEl.addEventListener('click',function(){
    var input = searchInputEl.value;
    console.log(input);

    fetch("https://developer.nps.gov/api/v1/activities/parks?id=BFF8C027-7C8F-480B-A5F8-CD8CE490BFBA,GA&api_key=M6zybiN7mrDQd0ocy5tTpMmFxZQmFdHcHCZZ1X0M", {  headers: {
      Accept: "application/json",
    }
  })
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
    // console.log(dataStuff);
    // call function getData(data)
    var pikachu = data.data[0].parks.filter(function(park){
      return park.states.includes(input.toUpperCase())
    })
    console.log(pikachu);

  showResults(pikachu)
  });




})

