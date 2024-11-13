// Smooth Scroll Animation for Links
document.querySelectorAll('.link-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        btn.classList.add('animate-ping');
        setTimeout(() => {
            btn.classList.remove('animate-ping');
        }, 500);
    });
});
