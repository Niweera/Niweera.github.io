var repoNamesArray = [];

function mainFunction() {
  repoNamesArray = document.querySelectorAll(".projects_text");
  repoNamesArray.forEach(createInnerHTMLFunction);
}

function createInnerHTMLFunction(item) {
  //fetching the GitHub data from the API

  fetch(
    `https://api.github.com/repos/Niweera/${
      item.id
    }?client_id=e2d4fdb72beea4cfcc5e&client_secret=d14f469e6ee49e8555b1fdebe3593b12e258ee2c`
  )
    .then(response => {
      return response.json();
    })
    .then(data => {
      // Work with JSON data here

      //write the API data to the website
      document.getElementById(`${item.id}p`).innerHTML = `<a href="${
        data.html_url
      }" target="_blank"><i class="fab fa-github"></i> ${data.full_name}</a>`;
    })
    .catch(err => {
      // Do something for an error here
      console.log(err);
    });
}

mainFunction();
