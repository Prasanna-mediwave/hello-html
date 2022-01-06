const products = [{
    id: 1,
    name: 'Sofa',
    price: 120,
    rating: 3,
}, {
    id: 2,
    name: 'Chair',
    price: 100,
    rating: 4
}, {
    id: 3,
    name: 'Chair',
    price: 90,
    rating: 3
},
{
    id: 4,
    name: 'Recliner',
    price: 390,
    rating: 5
}
]
function buildProductHTML(products) {
    const container = document.getElementById('container');
    container.innerHTML = '';
    for (let product of products) {
         // item div
         const divItem = document.createElement('div')
         divItem.classList.add('item');
 
         // h2
         const h2 = document.createElement('h2')
         h2.textContent = product.name;
         divItem.append(h2)
 
         // p - price
         const pPrice = document.createElement('p');
         pPrice.textContent = 'Rs. ' + product.price;
         divItem.appendChild(pPrice)
 
         // p - rating
         const pRating = document.createElement('p');
         pRating.textContent = `Rating: ${product.rating}`;
         divItem.appendChild(pRating)
 
 
         container.appendChild(divItem)
    }}
    