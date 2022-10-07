function renderCategories(array) {
  const genreNav = document.querySelector(".genre-list-box");


  categories.forEach((element) => {
    const iconNav = createIconNav(element);
    genreNav.appendChild(iconNav);
  });

  function createIconNav (element){
    const button = document.createElement("button")
    button.classList.add("grey-button","genre-buton")
    button.innerText = element

    return button
  }
//    <button class="grey-button">Todos</button>
}

renderCategories(categories);



function renderCards(array) {
  const main = document.getElementById("albuns-list-box");

  array.forEach((product) => {
    const card = createCard(product);
    main.appendChild(card);
  });
  
  function createCard(element) {
    const li = document.createElement("li");
    li.classList.add("card-album");

    const div = document.createElement("div");

    const img = document.createElement("img");
    img.src = element.img;
    img.alt = element.title;

    const span1 = document.createElement("span");
    span1.classList.add("band-year");

    const p1 = document.createElement("p");
    p1.innerText = element.band;

    const p2 = document.createElement("p");
    p2.innerText = element.year;

    span1.append(p1, p2);

    const h2 = document.createElement("h2");
    h2.innerText = element.title;

    const span2 = document.createElement("span");
    span2.classList.add("price-buybtn");

    const p3 = document.createElement("p");
    p3.innerText = "R$ " + element.price;

    const button = document.createElement("button");
    button.classList.add("grey-button");
    button.innerText = "Comprar";

    span2.append(p3, button);

    div.append(span1, h2, span2);
    li.append(img, div);

    return li;
  }
}



renderCards(products);

