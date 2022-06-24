const bar = document.querySelector('nav ul .bar');
const nav1 =  document.querySelector('.empat');
const nav2 =  document.querySelector('.tiga');
const nav3 =  document.querySelector('.dua');
const nav4 =  document.querySelector('.satu');

bar.addEventListener('click', function() {
	nav1.classList.toggle('slide');
	nav2.classList.toggle('slide');
	nav3.classList.toggle('slide');
	nav4.classList.toggle('slide');
})