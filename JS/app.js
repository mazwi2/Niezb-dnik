const sidebar = document.querySelector('.sidebar');
const openBtn = document.querySelector('.open-btn');
const leftIcon = document.querySelector('#left');
const rightIcon = document.querySelector('#right');

// open sidebar addEventListener
openBtn.addEventListener('click', openSidebar);

// functions

function openSidebar() {
  if (sidebar.classList.contains('sidebar-close')) {
    sidebar.classList.remove('sidebar-close');
    leftIcon.classList.remove('invisible');
    leftIcon.classList.add('visible');
    rightIcon.classList.remove('visible');
    rightIcon.classList.add('invisible');
  } else {
    sidebar.classList.add('sidebar-close');
    leftIcon.classList.add('invisible');
    leftIcon.classList.remove('visible');
    rightIcon.classList.add('visible');
    rightIcon.classList.remove('invisible');
  }
}
