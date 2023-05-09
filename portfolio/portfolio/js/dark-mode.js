const btnDarkMode = document.getElementById("dark__mode--btn");
btnDarkMode.onclick = function() {
  btnDarkMode.classList.toggle("dark__mode-btn-active")
  const isDark = document.body.classList.toggle('dark')

  if (isDark) {
    localStorage.setItem('darkMode', 'dark')
  } else {
    localStorage.setItem('darkMode', 'light');

  }
}

if(localStorage.getItem('darkMode')==='dark'){
  btnDarkMode.classList.add('dark__mode-btn-active')
  document.body.classList.add('dark')
}  