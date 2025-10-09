if (themeToggleBtn) {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') body.classList.add('dark-mode');
  // Load saved theme

  updateToggleIcon();
  // Update icon on load

  themeToggleBtn.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    localStorage.setItem('theme', body.classList.contains('dark-mode') ? 'dark' : 'light');
    updateToggleIcon();
  });
  // Toggle theme on button click

  function updateToggleIcon() {
    const icon = themeToggleBtn.querySelector('i');
    if (body.classList.contains('dark-mode')) {
      icon.classList.remove('fa-sun');
      icon.classList.add('fa-moon');
    } else {
      icon.classList.remove('fa-moon');
      icon.classList.add('fa-sun');
    }
  }
  // Icon transitioning

}