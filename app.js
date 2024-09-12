const products = [
    {
        id: 1,
        product_name: 'TAS GEMOY CIHUY',
        price: 350000,
        description: 'Tas selebew',
        img_url: 'img/tas.png',
        qty: 10,
    },
    {
        id: 2,
        product_name: 'Mangkok putih',
        price: 20000,
        description: 'Mangkok putih',
        img_url: 'img/mangkok.png',
        qty:10,
    },
    {
        id: 3,
        product_name: 'Jam',
        price: 50000,
        description: 'Jam kring kring',
        img_url: 'img/jam.png',
        qty:10,
    },
]
const listProducts = document.getElementById('list-products')
const productView = products.map(product =>` <div class="col-lg-4 col-12">
                <div class="card" style="width: 18rem;">
                    <img src="${product.img_url}" class="card-img-top" alt="Tas">
                    <div class="card-body">
                      <h5 class="card-title">${product.product_name}</h5>
                      <p class="card-text">Harga:${product.price}</span></p>
                      <p class="card-text">Qty: <span>${product.qty}</span></p>
                      <p class="card-text">Deskripsi: <span>${product.description}</span></p>
                      <a href="#" class="btn btn-primary">
                        <i class="fa-solid fa-cart-shopping text-light"></i>
                        Add to cart
                      </a>
                   </div>
                </div>
            </div>`).join(",").replaceAll(",", " ")
listProducts.innerHTML = productView

          
                  