// ক্যাটেগরি সিলেক্ট করার লজিক
const categoryButtons = document.querySelectorAll('.category-btn');

categoryButtons.forEach(button => {
    button.addEventListener('click', () => {
        categoryButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        
        const categoryName = button.innerText;
        filterProductsByCategory(categoryName);
    });
});

// সার্চ করার লজিক
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');

searchBtn.addEventListener('click', performSearch);
searchInput.addEventListener('keyup', (e) => {
    if (e.key === 'Enter') {
        performSearch();
    }
});

function performSearch() {
    const query = searchInput.value.toLowerCase().trim();
    const products = document.querySelectorAll('.product-card');

    products.forEach(product => {
        const title = product.querySelector('.product-title').innerText.toLowerCase();
        if (title.includes(query)) {
            product.style.display = 'flex';
        } else {
            product.style.display = 'none';
        }
    });
}

function filterProductsByCategory(category) {
    const products = document.querySelectorAll('.product-card');
    
    products.forEach(product => {
        if (category === 'সকল পন্য') {
            product.style.display = 'flex';
        } else {
            const title = product.querySelector('.product-title').innerText;
            // আপাতত প্রোডাক্টের নামের সাথে মিলিয়ে ফিল্টার হবে
            if (title.toLowerCase().includes(category.toLowerCase())) {
                product.style.display = 'flex';
            } else {
                product.style.display = 'none';
            }
        }
    });
}
