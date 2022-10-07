const main = document.getElementById("albuns-list-box");

function eventFilter() {
  const filterButtons = document.querySelectorAll(".genre-buton");
 

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      main.innerHTML = "";
      const filter = button.innerText;
      console.log(filter);

      if (filter == "Todos") {
        renderCards(products);
      }
      const filteredAlbuns = filterAlbum(filter);
      renderCards(filteredAlbuns);
    });
  });
}

function filterAlbum(text) {
  const albunsFiltered = products.filter((element) =>
    element.category.includes(text)
  );

  console.log();
  return albunsFiltered;
}

eventFilter();

let range = document.querySelector("input");
let value = document.querySelector(".spanValue");
let especificValue = 0;

range.addEventListener("input", function () {
  value.textContent =  "Até R$ "+ this.value;
  especificValue = this.value
  filterPrice(especificValue)
})

    function filterPrice (value){
     main.innerHTML = ""
     let filterPrice = value
    const filteredAlbumPrice = filterAlbumPrice(filterPrice)
    renderCards(filteredAlbumPrice);
}

function filterAlbumPrice(value) {
  const albunsFilteredPrice = products.filter((element) =>
    element.price <= value)

  return albunsFilteredPrice;
}
