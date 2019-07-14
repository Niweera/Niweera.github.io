function createInnerHTMLFunction() {
  //fetching the GitHub data from the API

  fetch(`https://favqs.com/api/qotd`)
    .then(response => {
      return response.json();
    })
    .then(data => {
      // Work with JSON data here

      //write the API data to the website
      document.getElementById("quote").innerHTML =
        '"' + data.quote.body.trim() + '"' + "<br>- " + data.quote.author;
    })
    .catch(err => {
      // Do something for an error here
      console.log(err);
    });
}

createInnerHTMLFunction();
