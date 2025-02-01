document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    const sections = document.querySelectorAll('section');
    const cartModal = document.getElementById('cart-modal');
    const closeButton = document.querySelector('.close-button');
    const chatButton = document.getElementById('chat-button');
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    const cartItems = document.querySelector('.cart-items');
    const checkoutButton = document.getElementById('checkout');
    
    // Theme Toggle
    themeToggle.addEventListener('click', () => {
        body.classList.toggle('dark');
        themeToggle.classList.toggle('fa-sun');
        themeToggle.classList.toggle('fa-moon');
    });

    // Scroll Animation
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    sections.forEach(section => observer.observe(section));

    // Smooth Scroll
    document.querySelectorAll('nav ul li a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Cart Modal
    addToCartButtons.forEach(button => {
        button.addEventListener('click', () => {
            const product = button.closest('.product');
            const productName = product.querySelector('h3').textContent;
            const productPrice = product.querySelector('p').textContent;
            const cartItem = document.createElement('div');
            cartItem.textContent = `${productName} - ${productPrice}`;
            cartItems.appendChild(cartItem);
            cartModal.style.display = 'flex';
        });
    });

    closeButton.addEventListener('click', () => {
        cartModal.style.display = 'none';
    });

    window.addEventListener('click', (e) => {
        if (e.target === cartModal) {
            cartModal.style.display = 'none';
        }
    });

    // Live Chat Button
    chatButton.addEventListener('click', () => {
        window.open('https://livechat.example.com', '_blank'); // Replace with your live chat URL
    });

    // Checkout
    checkoutButton.addEventListener('click', () => {
        alert('Proceed to checkout');
        cartModal.style.display = 'none';
    });
});
