

const portfolioBtn = document.querySelector('.portfolio-btn');
const portfolioImage = document.querySelectorAll('.portfolio-image');

const portfolioSpr = document.querySelector('.portfolio-spring');
const portfolioFotos = document.querySelectorAll('.portfolio-fotos');

const portfolioSum = document.querySelector('.portfolio-summer');
const portfolioMy = document.querySelectorAll('.my-portfolio');

const portfolioAut = document.querySelector('.portfolio-autumn');
const portfolioImages = document.querySelectorAll('.portfolio-images')

const portfolioBtns = document.querySelectorAll('.portfolio-btns buttons');





portfolioBtn.addEventListener('click', () => {
portfolioImage.forEach((img, index) => img.src = `./image/assets/img/winter/${index + 1}.jpg`);

portfolioSpr.addEventListener('click', () => {
  portfolioFotos.forEach((img, index) => img.src = `./image/assets/img/spring/${index + 1}.jpg`);

  portfolioSum.addEventListener('click', () => {
    portfolioMy.forEach((img, index) => img.src = `./image/assets/img/summer/${index + 1}.jpg`);

    portfolioAut.addEventListener('click', () => {
      portfolioImages.forEach((img, index) => img.src = `./image/assets/img/autumn/${index + 1}.jpg`);
    
    });
  });
});
});


portfolioBtn.addEventListener('click', () => {
  portfolioBtn.classList.add('active');

   portfolioSpr.classList.remove('active');
   portfolioSum.classList.remove('active');
   portfolioAut.classList.remove('active');
   portfolioImage.forEach((img, index) => img.src = `./image/assets/img/winter/${index + 1}.jpg`);
});

portfolioSpr.addEventListener('click', () => {
  portfolioSpr.classList.add('active');

   portfolioBtn.classList.remove('active');
   portfolioSum.classList.remove('active');
   portfolioAut.classList.remove('active');
   portfolioImage.forEach((img, index) => img.src = `./image/assets/img/spring/${index + 1}.jpg`);
});


portfolioSum.addEventListener('click', () => {
  portfolioSum.classList.add('active');

   portfolioSpr.classList.remove('active');
   portfolioBtn.classList.remove('active');
   portfolioAut.classList.remove('active');
   portfolioImage.forEach((img, index) => img.src = `./image/assets/img/summer/${index + 1}.jpg`);
});

portfolioAut.addEventListener('click', () => {
  portfolioAut.classList.add('active');

   portfolioSpr.classList.remove('active');
   portfolioSum.classList.remove('active');
   portfolioBtn.classList.remove('active');
   portfolioImage.forEach((img, index) => img.src = `./image/assets/img/autumn/${index + 1}.jpg`);
});

document.documentElement.style.setProperty('--body-color', '#fff');
document.documentElement.style.setProperty('--text-color', '#000');
document.documentElement.style.setProperty('--hover-color', '#000');