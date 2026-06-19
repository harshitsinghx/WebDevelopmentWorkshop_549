let count = 0;
const cartCountElement = document.getElementById('cart-count');
const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');
const backTopButton = document.getElementById('backTop');
const searchForm = document.querySelector('.search-bar');
const searchInput = document.querySelector('.search-input');
const cartButton = document.getElementById('cart-btn');

addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
        count++;
        cartCountElement.textContent = count;
        
        const productName = button.getAttribute('data-product');
        alert(`${productName} added to cart!`);
    });
});

backTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const query = searchInput.value.trim();
    if (query) {
        alert(`Searching for: ${query}`);
    }
});

cartButton.addEventListener('click', () => {
    alert(`You have ${count} item(s) in your cart.`);
});