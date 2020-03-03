var repoNamesArray = [];

function mainFunction() {
  repoNamesArray = document.querySelectorAll(".projects_text");
  repoNamesArray.forEach(createInnerHTMLFunction);
}

function createInnerHTMLFunction(item) {
  //fetching the GitHub data from the API

  fetch(
    `https://api.github.com/repos/Niweera/${item.id}?client_id=abcedfghijk&client_secret=abcedfghijk`
  )
    .then(response => {
      return response.json();
    })
    .then(data => {
      // Work with JSON data here

      //write the API data to the website
      document.getElementById(
        `${item.id}p`
      ).innerHTML = `<a href="${data.html_url}" target="_blank"><i class="fab fa-github"></i> ${data.full_name}</a>`;
    })
    .catch(err => {
      // Do something for an error here
      console.log(err);
    });
}

mainFunction();
