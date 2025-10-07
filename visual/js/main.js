// DOM elements
const themeToggleBtn = document.getElementById('themeToggle');
const body = document.body;

if (themeToggleBtn) {
  // Load saved theme
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') body.classList.add('dark-mode');

  // Update icon on load
  updateToggleIcon();

  // Toggle theme on button click
  themeToggleBtn.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    localStorage.setItem('theme', body.classList.contains('dark-mode') ? 'dark' : 'light');
    updateToggleIcon();
  });

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
}

const themeToggle = document.getElementById('themeToggle');
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});
