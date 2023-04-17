const toggle = document.getElementById('toggle');
const menu = document.getElementById('menu');
const wrapper = document.getElementById('wrapper');
const navItem = document.querySelectorAll('.nav-item');
const closeBtn = document.querySelector('.menu-close');

function toggleMenu() {
  if (menu.className === 'menu-inactive') {
    menu.className = ('menu-active');
    toggle.className = ('toggle-active');
    closeBtn.style.display = 'block';
  } else {
    menu.className = ('menu-inactive');
    toggle.className = ('');
    closeBtn.style.display = 'none';
  }
}

closeBtn.addEventListener('click', () => {
  toggleMenu();
});

toggle.addEventListener('click', () => {
  toggleMenu();
});

wrapper.addEventListener('click', () => {
  if (menu.className === 'menu-active') {
    menu.className = ('menu-inactive');
  }
});

navItem.forEach((navItem) => {
  navItem.addEventListener('click', () => {
    toggleMenu();
  });
});
