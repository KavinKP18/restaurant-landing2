window.addEventListener('scroll', () => {
const header = document.getElementById('header');
if(window.scrollY > 50){
header.style.background = 'rgba(0,0,0,0.9)';
}else{
header.style.background = 'rgba(0,0,0,0.6)';
}
});
