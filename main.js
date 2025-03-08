const loading = document.getElementById('loading');
const body = document.getElementById('body');

window.addEventListener('DOMContentLoaded', () => {
    body.style.display='none';
    setTimeout(() => {
        loading.style.display = 'none';
        body.style.display = 'block';
    }, 2000);
})