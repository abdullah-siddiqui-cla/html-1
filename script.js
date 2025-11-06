let products = [];

const renderProducts = (products) => {
  // 0 - md -> 6 columns
  // md - lg -> 3 columns
  // > lg -> 2 columns

  const productsHtml = products.map((p) => {
    return `
      <div class="col-6 col-md-3 col-lg-2">
        <div class="card">
          <img src="${p.thumbnail}" class="card-img-top" alt="${p.title} image">
          <div class="card-body">
            <h5 class="card-title">${p.title}</h5>
            <p class="card-text">${p.description}</p>
          </div>
        </div>
      </div>`
  });

  const container = document.getElementsByClassName('products-container')[0];

  container.innerHTML = productsHtml.join('');
}

fetch('https://dummyjson.com/products')
  .then((response) => response.json())
  .then((json) => {
    products = json.products;

    const productTitles = products.map((product) => product.title);

    renderProducts(products);
  })

// ----- Filter logic ----
const filterButtons = Array.from(document.getElementsByClassName('filter-button'));

filterButtons.forEach((filterButton) => {
  // Add event listener to each filter button
  filterButton.addEventListener('click', (event) => {
    // `filterButton` is the current button on which the handler is being added.
    // It can also be fetched by using `event.target`

    // If the current button is already selected i.e. it already contains `btn-primary` class,
    // then we don't have to do anything, so, can early return from this function.
    if (filterButton.classList.contains('btn-primary')) return;

    // Add the default styling to all filter buttons
    for (const btn of filterButtons) {
      if (btn.classList.contains('btn-primary')) {
        btn.classList.remove('btn-primary');
        btn.classList.add('btn-secondary');
      }
    }

    // Remove `btn-secondary` and add `btn-primary` to change the background color from gray (secondary) to blue (primary)
    filterButton.classList.remove('btn-secondary');
    filterButton.classList.add('btn-primary');

    // Reading data attributes of an html element using `.dataset`
    const category = filterButton.dataset.category;

    // Filter the products and render them again
    const filteredProducts = products.filter((p) => p.category === category);

    renderProducts(filteredProducts);
  })
})