document.addEventListener('DOMContentLoaded', function() {
    let form = document.getElementById('myForm');
    let popup = document.getElementById('myPopup');
    let overlay = document.getElementById('overlay');
    let closeBtn = document.getElementById('closeBtn');
    let body = document.getElementsByTagName('body')[0];

    form.addEventListener('submit', function(event) {
      event.preventDefault(); 
      popup.style.display = 'block';
      overlay.style.display = 'block';
      body.style.overflow = 'hidden';
      popup.focus();
    });

    closeBtn.addEventListener('click', function() {
      popup.style.display = 'none';
      overlay.style.display = 'none';
      body.style.overflow = 'auto';
    });

    overlay.addEventListener('click', function() {
      popup.style.display = 'none';
      overlay.style.display = 'none';
      body.style.overflow = 'auto';
    });
  });

  const burgerMenu = document.querySelector('.burger__menu')
  const menu = document.querySelector('.header__right')
  const body = document.getElementsByTagName('body')[0];

  burgerMenu.addEventListener('click', () => {
    menu.classList.toggle('active')
    burgerMenu.classList.toggle('active')
    body.classList.toggle('overlay')
  })