// Mock Data
const PRODUCTS = [
    // Fruits
    { id: 1, name: 'Fresh Apples', category: 'fruits', price: 180, unit: '1 kg', image: 'https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?auto=format&fit=crop&w=500&q=60' },
    { id: 2, name: 'Bananas', category: 'fruits', price: 60, unit: '1 kg', image: 'https://images.unsplash.com/photo-1528825871115-3581a5387919?auto=format&fit=crop&w=500&q=60' },
    { id: 3, name: 'Oranges', category: 'fruits', price: 120, unit: '1 kg', image: 'https://images.unsplash.com/photo-1547514701-42782101795e?auto=format&fit=crop&w=500&q=60' },
    { id: 4, name: 'Strawberries', category: 'fruits', price: 250, unit: '500 g', image: 'https://images.unsplash.com/photo-1464965911861-746a04b4bca6?auto=format&fit=crop&w=500&q=60' },
    { id: 13, name: 'Green Grapes', category: 'fruits', price: 140, unit: '1 kg', image: 'https://images.unsplash.com/photo-1596363505729-4190a9506133?auto=format&fit=crop&w=500&q=60' },
    { id: 14, name: 'Pineapple', category: 'fruits', price: 90, unit: '1 pc', image: 'https://images.unsplash.com/photo-1550258987-190a2d41a8ba?auto=format&fit=crop&w=500&q=60' },
    { id: 15, name: 'Mango', category: 'fruits', price: 150, unit: '1 kg', image: 'https://images.unsplash.com/photo-1553279768-865429fa0078?auto=format&fit=crop&w=500&q=60' },
    { id: 16, name: 'Watermelon', category: 'fruits', price: 80, unit: '1 pc', image: 'https://images.unsplash.com/photo-1587049352846-4a222e784d38?auto=format&fit=crop&w=500&q=60' },

    // Vegetables
    { id: 5, name: 'Fresh Spinach', category: 'vegetables', price: 40, unit: '1 bunch', image: 'https://images.unsplash.com/photo-1576045057995-568f588f82fb?auto=format&fit=crop&w=500&q=60' },
    { id: 6, name: 'Carrots', category: 'vegetables', price: 60, unit: '1 kg', image: 'https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?auto=format&fit=crop&w=500&q=60' },
    { id: 7, name: 'Broccoli', category: 'vegetables', price: 120, unit: '1 kg', image: 'https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?auto=format&fit=crop&w=500&q=60' },
    { id: 17, name: 'Potatoes', category: 'vegetables', price: 40, unit: '1 kg', image: 'https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&w=500&q=60' },
    { id: 18, name: 'Tomatoes', category: 'vegetables', price: 50, unit: '1 kg', image: 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&w=500&q=60' },
    { id: 19, name: 'Red Onions', category: 'vegetables', price: 60, unit: '1 kg', image: 'https://images.unsplash.com/photo-1618512496248-a07fe83aa8cb?auto=format&fit=crop&w=500&q=60' },
    { id: 20, name: 'Cucumber', category: 'vegetables', price: 40, unit: '1 kg', image: 'https://images.unsplash.com/photo-1449300079323-02e209d9d3a6?auto=format&fit=crop&w=500&q=60' },

    // Dairy
    { id: 9, name: 'Organic Milk', category: 'dairy', price: 70, unit: '1 L', image: 'https://images.unsplash.com/photo-1563636619-e9143da7973b?auto=format&fit=crop&w=500&q=60' },
    { id: 10, name: 'Cheddar Cheese', category: 'dairy', price: 350, unit: '200 g', image: 'https://images.unsplash.com/photo-1618164436241-4473940d1f5c?auto=format&fit=crop&w=500&q=60' },
    { id: 11, name: 'Greek Yogurt', category: 'dairy', price: 120, unit: '400 g', image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=500&q=60' },
    { id: 12, name: 'Butter', category: 'dairy', price: 280, unit: '500 g', image: 'https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?auto=format&fit=crop&w=500&q=60' },
    { id: 21, name: 'Cream Cheese', category: 'dairy', price: 250, unit: '200 g', image: 'https://images.unsplash.com/photo-1559561853-08451507cbe7?auto=format&fit=crop&w=500&q=60' },
    { id: 22, name: 'Heavy Cream', category: 'dairy', price: 180, unit: '500 ml', image: 'https://images.unsplash.com/photo-1559598467-f8b76c8155d0?auto=format&fit=crop&w=500&q=60' },
    { id: 23, name: 'Mozzarella', category: 'dairy', price: 320, unit: '250 g', image: 'https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?auto=format&fit=crop&w=500&q=60' },
    { id: 24, name: 'Eggs', category: 'dairy', price: 90, unit: '1 dozen', image: 'https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?auto=format&fit=crop&w=500&q=60' }
];

// State
const state = {
    user: JSON.parse(localStorage.getItem('freshfarm_user')) || null,
    cart: JSON.parse(localStorage.getItem('freshfarm_cart')) || [],
    view: 'home', // home, cart, checkout, login, signup
    categoryFilter: 'all'
};

// Utils
const formatPrice = (price) => `₹${price.toFixed(2)}`;

const saveState = () => {
    localStorage.setItem('freshfarm_user', JSON.stringify(state.user));
    localStorage.setItem('freshfarm_cart', JSON.stringify(state.cart));
    render();
};

const showToast = (message, type = 'success') => {
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.innerHTML = `
        <i class="ph-fill ${type === 'success' ? 'ph-check-circle' : 'ph-warning-circle'}"></i>
        <span>${message}</span>
    `;
    document.body.appendChild(toast);

    // Trigger animation
    setTimeout(() => toast.classList.add('show'), 10);

    // Remove
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 300);
    }, 3000);
};

// Actions
const actions = {
    signup: async (name, email, password) => {
        if (!name || !email || !password) {
            showToast('Please fill in all fields', 'error');
            return;
        }

        try {
            const response = await fetch('http://localhost:3000/api/signup', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name, email, password })
            });

            const data = await response.json();

            if (response.ok) {
                state.user = data.user;
                state.view = 'home';
                saveState();
                showToast(`Welcome to FreshFarm, ${data.user.name}!`);
            } else {
                showToast(data.message || 'Signup failed', 'error');
            }
        } catch (error) {
            console.error('Signup Error:', error);
            showToast('Could not connect to server. Is it running?', 'error');
        }
    },
    login: async (email, password) => {
        if (!email || !password) {
            showToast('Please enter email and password', 'error');
            return;
        }

        try {
            const response = await fetch('http://localhost:3000/api/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password })
            });

            const data = await response.json();

            if (response.ok) {
                state.user = data.user;
                state.view = 'home';
                saveState();
                showToast(`Welcome back, ${data.user.name}!`);
            } else {
                showToast(data.message || 'Login failed', 'error');
            }
        } catch (error) {
            console.error('Login Error:', error);
            showToast('Could not connect to server. Is it running?', 'error');
        }
    },
    logout: () => {
        state.user = null;
        state.cart = [];
        state.view = 'login';
        saveState();
        showToast('Logged out successfully');
    },
    addToCart: (productId) => {
        if (!state.user) {
            state.view = 'login';
            render();
            showToast('Please login to shop', 'error');
            return;
        }

        const existingItem = state.cart.find(item => item.id === productId);
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            const product = PRODUCTS.find(p => p.id === productId);
            state.cart.push({ ...product, quantity: 1 });
        }
        saveState();
        showToast('Added to cart');
    },
    removeFromCart: (productId) => {
        state.cart = state.cart.filter(item => item.id !== productId);
        saveState();
    },
    updateQuantity: (productId, delta) => {
        const item = state.cart.find(item => item.id === productId);
        if (item) {
            item.quantity += delta;
            if (item.quantity <= 0) {
                actions.removeFromCart(productId);
            } else {
                saveState();
            }
        }
    },
    checkout: () => {
        state.cart = [];
        state.view = 'home';
        saveState();
        showToast('Order placed successfully! Thank you.');
    },
    navigate: (view) => {
        state.view = view;
        render();
        window.scrollTo(0, 0);
    },
    setCategory: (category) => {
        state.categoryFilter = category;
        render();
    }
};

// Components
const Navbar = () => {
    const cartCount = state.cart.reduce((acc, item) => acc + item.quantity, 0);

    return `
        <nav class="navbar">
            <div class="container nav-content">
                <a href="#" class="logo" onclick="actions.navigate('home'); return false;">
                    <i class="ph-fill ph-plant" style="font-size: 2rem;"></i>
                    FreshFarm
                </a>
                <div class="nav-links">
                    ${state.user ? `
                        <a href="#" class="nav-link" onclick="actions.navigate('home'); return false;">Shop</a>
                        <a href="#" class="nav-link cart-badge" onclick="actions.navigate('cart'); return false;">
                            <i class="ph ph-shopping-cart" style="font-size: 1.5rem;"></i>
                            ${cartCount > 0 ? `<span class="badge-count">${cartCount}</span>` : ''}
                        </a>
                        <div style="display: flex; align-items: center; gap: 1rem;">
                            <span style="font-size: 0.875rem; font-weight: 500;">${state.user.name}</span>
                            <button class="btn-icon" onclick="actions.logout()">
                                <i class="ph ph-sign-out" style="font-size: 1.25rem;"></i>
                            </button>
                        </div>
                    ` : `
                        <a href="#" class="nav-link" onclick="actions.navigate('login'); return false;">Login</a>
                        <a href="#" class="btn btn-primary" onclick="actions.navigate('signup'); return false;">Sign Up</a>
                    `}
                </div>
            </div>
        </nav>
    `;
};

const ProductCard = (product) => `
    <div class="product-card">
        <div class="product-image-container">
            <img src="${product.image}" alt="${product.name}" class="product-image">
        </div>
        <div class="product-info">
            <div class="product-category">${product.category}</div>
            <h3 class="product-name">${product.name}</h3>
            <div class="product-footer">
                <div style="display: flex; flex-direction: column;">
                    <span class="product-price">${formatPrice(product.price)}</span>
                    <span style="font-size: 0.875rem; color: var(--text-light);">${product.unit}</span>
                </div>
                <button class="add-btn" onclick="actions.addToCart(${product.id})">
                    <i class="ph-bold ph-plus"></i>
                </button>
            </div>
        </div>
    </div>
`;

const ShopPage = () => {
    const filteredProducts = state.categoryFilter === 'all'
        ? PRODUCTS
        : PRODUCTS.filter(p => p.category === state.categoryFilter);

    return `
        <div class="shop-header">
            <div class="container">
                <h1 class="shop-title">Fresh from the Farm</h1>
                <p style="color: var(--text-light); font-size: 1.125rem;">Premium quality fruits, vegetables, and dairy delivered to your door.</p>
                
                <div class="category-filters">
                    <button class="filter-btn ${state.categoryFilter === 'all' ? 'active' : ''}" 
                        onclick="actions.setCategory('all')">All</button>
                    <button class="filter-btn ${state.categoryFilter === 'fruits' ? 'active' : ''}" 
                        onclick="actions.setCategory('fruits')">Fruits</button>
                    <button class="filter-btn ${state.categoryFilter === 'vegetables' ? 'active' : ''}" 
                        onclick="actions.setCategory('vegetables')">Vegetables</button>
                    <button class="filter-btn ${state.categoryFilter === 'dairy' ? 'active' : ''}" 
                        onclick="actions.setCategory('dairy')">Dairy</button>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="products-grid">
                ${filteredProducts.map(ProductCard).join('')}
            </div>
        </div>
    `;
};

const CartPage = () => {
    if (state.cart.length === 0) {
        return `
            <div class="container empty-state">
                <i class="ph ph-shopping-cart empty-icon"></i>
                <h2>Your cart is empty</h2>
                <p style="color: var(--text-light); margin: 1rem 0;">Looks like you haven't added anything yet.</p>
                <button class="btn btn-primary" onclick="actions.navigate('home')">Start Shopping</button>
            </div>
        `;
    }

    const subtotal = state.cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
    const tax = subtotal * 0.05;
    const total = subtotal + tax;

    return `
        <div class="container cart-page">
            <h1 style="margin-bottom: 2rem;">Shopping Cart</h1>
            <div class="cart-layout">
                <div class="cart-items">
                    ${state.cart.map(item => `
                        <div class="cart-item">
                            <img src="${item.image}" alt="${item.name}" class="cart-item-image">
                            <div class="cart-item-details">
                                <h3 class="cart-item-name">${item.name}</h3>
                                <div class="cart-item-price">
                                    ${formatPrice(item.price)}
                                    <span style="font-size: 0.875rem; color: var(--text-light); margin-left: 0.5rem;">/ ${item.unit}</span>
                                </div>
                            </div>
                            <div class="cart-controls">
                                <button class="qty-btn" onclick="actions.updateQuantity(${item.id}, -1)">
                                    <i class="ph-bold ph-minus"></i>
                                </button>
                                <span style="font-weight: 600; width: 1.5rem; text-align: center;">${item.quantity}</span>
                                <button class="qty-btn" onclick="actions.updateQuantity(${item.id}, 1)">
                                    <i class="ph-bold ph-plus"></i>
                                </button>
                                <button class="remove-btn" onclick="actions.removeFromCart(${item.id})">
                                    <i class="ph-fill ph-trash"></i>
                                </button>
                            </div>
                        </div>
                    `).join('')}
                </div>
                
                <div class="cart-summary">
                    <h3 style="margin-bottom: 1.5rem;">Order Summary</h3>
                    <div class="summary-row">
                        <span>Subtotal</span>
                        <span>${formatPrice(subtotal)}</span>
                    </div>
                    <div class="summary-row">
                        <span>Tax (5%)</span>
                        <span>${formatPrice(tax)}</span>
                    </div>
                    <div class="summary-total">
                        <span>Total</span>
                        <span>${formatPrice(total)}</span>
                    </div>
                    <button class="btn btn-primary" style="width: 100%; margin-top: 1.5rem;" onclick="actions.navigate('checkout')">
                        Proceed to Checkout
                    </button>
                </div>
            </div>
        </div>
    `;
};

const CheckoutPage = () => {
    const subtotal = state.cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
    const tax = subtotal * 0.05;
    const total = subtotal + tax;

    return `
        <div class="container" style="padding: 2rem 0;">
            <div class="cart-layout">
                <div>
                    <h2 style="margin-bottom: 1.5rem;">Checkout</h2>
                    <form class="checkout-form" onsubmit="event.preventDefault(); actions.checkout();">
                        <h3 style="margin-bottom: 1.5rem; font-size: 1.25rem;">Shipping Information</h3>
                        <div class="grid-2">
                            <div class="form-group">
                                <label class="form-label">First Name</label>
                                <input type="text" class="form-input" required>
                            </div>
                            <div class="form-group">
                                <label class="form-label">Last Name</label>
                                <input type="text" class="form-input" required>
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="form-label">Address</label>
                            <input type="text" class="form-input" required>
                        </div>
                        <div class="grid-2">
                            <div class="form-group">
                                <label class="form-label">City</label>
                                <input type="text" class="form-input" required>
                            </div>
                            <div class="form-group">
                                <label class="form-label">Postal Code</label>
                                <input type="text" class="form-input" required>
                            </div>
                        </div>
                        
                        <h3 style="margin: 2rem 0 1.5rem; font-size: 1.25rem;">Payment Details</h3>
                        <div class="form-group">
                            <label class="form-label">Card Number</label>
                            <input type="text" class="form-input" placeholder="0000 0000 0000 0000" required>
                        </div>
                        <div class="grid-2">
                            <div class="form-group">
                                <label class="form-label">Expiry Date</label>
                                <input type="text" class="form-input" placeholder="MM/YY" required>
                            </div>
                            <div class="form-group">
                                <label class="form-label">CVC</label>
                                <input type="text" class="form-input" placeholder="123" required>
                            </div>
                        </div>
                        
                        <button type="submit" class="btn btn-primary" style="width: 100%; margin-top: 1.5rem;">
                            Pay ${formatPrice(total)}
                        </button>
                    </form>
                </div>
                
                <div class="cart-summary">
                    <h3 style="margin-bottom: 1.5rem;">Order Items</h3>
                    ${state.cart.map(item => `
                        <div style="display: flex; justify-content: space-between; margin-bottom: 1rem; font-size: 0.875rem;">
                            <span>${item.quantity}x ${item.name} (${item.unit})</span>
                            <span>${formatPrice(item.price * item.quantity)}</span>
                        </div>
                    `).join('')}
                    <div class="summary-total">
                        <span>Total</span>
                        <span>${formatPrice(total)}</span>
                    </div>
                </div>
            </div>
        </div>
    `;
};

const AuthPage = (type) => {
    const isLogin = type === 'login';
    return `
        <div class="auth-container">
            <div class="auth-card">
                <h1 class="auth-title">${isLogin ? 'Welcome Back' : 'Create Account'}</h1>
                <p class="auth-subtitle">${isLogin ? 'Enter your credentials to access your account' : 'Sign up to start shopping fresh'}</p>
                
                <form onsubmit="event.preventDefault(); ${isLogin
            ? 'actions.login(this.email.value, this.password.value)'
            : 'actions.signup(this.name.value, this.email.value, this.password.value)'}">
                    ${!isLogin ? `
                        <div class="form-group">
                            <label class="form-label">Full Name</label>
                            <input type="text" name="name" class="form-input" required>
                        </div>
                    ` : ''}
                    <div class="form-group">
                        <label class="form-label">Email Address</label>
                        <input type="email" name="email" class="form-input" required>
                    </div>
                    <div class="form-group">
                        <label class="form-label">Password</label>
                        <input type="password" name="password" class="form-input" required>
                    </div>
                    
                    <button type="submit" class="btn btn-primary" style="width: 100%;">
                        ${isLogin ? 'Sign In' : 'Create Account'}
                    </button>
                </form>
                
                <div class="auth-footer">
                    ${isLogin ? "Don't have an account?" : "Already have an account?"} 
                    <a href="#" class="auth-link" onclick="actions.navigate('${isLogin ? 'signup' : 'login'}'); return false;">
                        ${isLogin ? 'Sign Up' : 'Log In'}
                    </a>
                </div>
            </div>
        </div>
    `;
};

// Main Render Function
const render = () => {
    const app = document.getElementById('app');

    // Check auth for protected routes
    if (!state.user && (state.view === 'cart' || state.view === 'checkout')) {
        state.view = 'login';
    }

    // If user is logged in, they shouldn't see auth pages
    if (state.user && (state.view === 'login' || state.view === 'signup')) {
        state.view = 'home';
    }

    let content = Navbar();

    switch (state.view) {
        case 'home':
            content += ShopPage();
            break;
        case 'cart':
            content += CartPage();
            break;
        case 'checkout':
            content += CheckoutPage();
            break;
        case 'login':
            content += AuthPage('login');
            break;
        case 'signup':
            content += AuthPage('signup');
            break;
        default:
            content += ShopPage();
    }

    app.innerHTML = content;
};

// Check Server Status
const checkServerStatus = async () => {
    try {
        // We'll try to hit the login endpoint with dummy data just to see if server responds
        const response = await fetch('http://localhost:3000/api/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email: 'ping', password: 'ping' })
        });

        // If we get a response (even 400), the server is running
        if (response.status !== 500 && response.status !== 404) {
            showToast('Connected to Backend Server', 'success');
        }
    } catch (error) {
        console.error('Server Check Failed:', error);
        showToast('Backend Server Disconnected. Please run "node server.js"', 'error');
    }
};

// Initialize
window.actions = actions; // Expose actions to global scope for inline onclick handlers
render();
checkServerStatus();
