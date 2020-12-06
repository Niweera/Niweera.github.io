var repoNamesArray = [];

function mainFunction() {
  repoNamesArray = document.querySelectorAll(".l_blog_item.medium");
  repoNamesArray.forEach(createInnerHTMLFunction);
}

function createInnerHTMLFunction(item) {
  //fetching the GitHub data from the API

  fetch(`https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@Niweera`)
    .then(response => {
      return response.json();
    })
    .then(data => {
        const {items} = data;
        const main_data = items[parseInt(item.id)];
        const {thumbnail, link,pubDate,title,description} = main_data;

      // Work with JSON data here

      var src = thumbnail;

      //write the API data to the website

      document.getElementById(
        `${item.id}`
      ).innerHTML = `<div class="l_blog_img">
                                                            <a href="${
                                                                link
                                                            }" target="_blank"><img
                                                                    class="img-fluid" src="${src}" alt=""></a>
                                                        </div>
                                                        <div class="l_blog_text">
                                                            <div class="date">
                                                                <a href="${
                                                                    link
                                                                }" target="_blank">${moment(
                                                                    pubDate
      ).format("d MMMM, YYYY")} | By Nipuna Weerasekara</a>
                                                            </div>
                                                            <a href="${
                                                              link
                                                            }" target="_blank">
                                                                <h4>${
                                                                  title
                                                                    
                                                                }</h4>
                                                            </a>
                                                            <p>${
                                                                description
        .replace(/<h3>.*<\/h3>|<figcaption>.*<\/figcaption>|<[^>]*>/gm, '')
        .substring(0, 160) + '...'
                                                            }</p>
                                                        </div>`;
    })
    .catch(err => {
      // Do something for an error here
      console.log(err);
    });
}

mainFunction();
