// Smooth Scroll Animation for Links
document.querySelectorAll('.link-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        btn.classList.add('animate-ping');
        setTimeout(() => {
            btn.classList.remove('animate-ping');
        }, 500);
    });
});

// Static credentials
const validUsername = 'KING-DASAA';
const validPassword = 'KINGDASAA2007';

// Handle login form submission
document.getElementById('loginForm')?.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();
    const errorElement = document.getElementById('error');

    if (username === validUsername && password === validPassword) {
        // Store authentication status
        sessionStorage.setItem('authenticated', 'true');
        window.location.href = 'index.html';
    } else {
        errorElement.classList.remove('hidden');
    }
});
