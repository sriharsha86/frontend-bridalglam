// Handle login form submission
document.getElementById('loginForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Simple validation
    const email = this.querySelector('input[type="email"]').value;
    const password = this.querySelector('input[type="password"]').value;
    
    if(email && password) {
        // Simulate auth - replace with real API call
        localStorage.setItem('bridalglam-auth', 'true');
        window.location.href = 'index.html';
    }
});

// Handle signup form submission
document.getElementById('signupForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const formData = {
        name: this.querySelector('input[type="text"]').value,
        email: this.querySelector('input[type="email"]').value,
        password: this.querySelectorAll('input[type="password"]')[0].value,
        confirmPassword: this.querySelectorAll('input[type="password"]')[1].value
    };
    
    if(formData.password !== formData.confirmPassword) {
        alert('Passwords do not match!');
        return;
    }
    
    // Simulate signup - replace with real API call
    localStorage.setItem('bridalglam-auth', 'true');
    localStorage.setItem('bridalglam-user', JSON.stringify({
        name: formData.name,
        email: formData.email
    }));
    
    window.location.href = 'index.html';
});