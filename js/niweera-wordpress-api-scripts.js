var repoNamesArray = [];

function mainFunction() {
  repoNamesArray = document.querySelectorAll(".l_blog_item");
  repoNamesArray.forEach(createInnerHTMLFunction);
}

function createInnerHTMLFunction(item) {
  //fetching the GitHub data from the API

  fetch(`https://blog.niweera.gq/wp-json/wp/v2/posts/${item.id}`)
    .then(response => {
      return response.json();
    })
    .then(data => {
      // Work with JSON data here

      var src = data.better_featured_image.source_url;

      //write the API data to the website

      document.getElementById(
        `${item.id}`
      ).innerHTML = `<div class="l_blog_img">
                                                            <a href="${
                                                              data.link
                                                            }" target="_blank"><img
                                                                    class="img-fluid" src="${src}" alt=""></a>
                                                        </div>
                                                        <div class="l_blog_text">
                                                            <div class="date">
                                                                <a href="${
                                                                  data.link
                                                                }" target="_blank">${moment(
        data.date
      ).format("d MMMM, YYYY")} | By Nipuna Weerasekara</a>
                                                            </div>
                                                            <a href="${
                                                              data.link
                                                            }" target="_blank">
                                                                <h4>${
                                                                  data.title
                                                                    .rendered
                                                                }</h4>
                                                            </a>
                                                            <p>${
                                                              data.excerpt
                                                                .rendered
                                                            }</p>
                                                        </div>`;
    })
    .catch(err => {
      // Do something for an error here
      console.log(err);
    });
}

mainFunction();
