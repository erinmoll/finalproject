document.getElementById('favicon').addEventListener('click', sideMenuOpen)

function sideMenuOpen(){
  document.getElementById('side-menu').classList.add('show');
  
}

document.getElementById('menu-close').addEventListener('click', sideMenuClose)

function sideMenuClose (){
  document.getElementById('side-menu').classList.remove('show')
}