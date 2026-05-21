document.getElementById('show-register').addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector('.login').style.display = 'none';
    document.querySelector('.register').style.display = 'block';
});

document.getElementById('show-login').addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector('.login').style.display = 'block';
    document.querySelector('.register').style.display = 'none';
});
document.querySelector('.login form').addEventListener('submit', function (e) {
    e.preventDefault();
    window.location.href = 'Farm.html';
});