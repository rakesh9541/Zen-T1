window.onload = function() 
{
    fetch('/products')
        .then(response => response.json())
        .then(products => {
            const container = document.getElementById('product-container');
            products.forEach(product => {
                const productDiv = document.createElement('div');
                productDiv.className = 'product';
                productDiv.innerHTML = `
                    <div class="title">${product.title}</div>
                    <div class="price">$${product.price}</div>
                `;
                container.appendChild(productDiv);
            });
        })
        .catch(error => {
            console.error('Error fetching products:', error);
        });
};
