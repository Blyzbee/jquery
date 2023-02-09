$(document).ready((e) => {
  e.preventDefault;

  let items = [];
  fetch("../data/data.json")
    .then((res) => res.json())
    .then((res) => {
      res.forEach((data) => {
        items.push(`<li id="${data.id_voitures}">
        <h2>${data.marque}</h2>
        <figure>
          <img src="${data.image}" >
          <figcaption>${data.description}</figcaption>
        </figure>
      </li>`);
      });

      $("<ul/>", {
        class: "data-list",
        html: items.join(""),
      }).appendTo("main");
    })
    .catch((err) => console.log(err));
});
