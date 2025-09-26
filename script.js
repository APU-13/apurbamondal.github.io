// Smooth scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor=>{
  anchor.addEventListener('click', function(e){
    e.preventDefault();
    const el = document.querySelector(this.getAttribute('href'));
    if (el) el.scrollIntoView({behavior:'smooth', block:'start'});
  });
});

// Theme toggle with saving preference
const themeToggle = document.getElementById('theme-toggle');
function applyTheme(dark){
  if (dark){
    document.documentElement.classList.add('dark');
    themeToggle.textContent = '☀️';
  } else {
    document.documentElement.classList.remove('dark');
    themeToggle.textContent = '🌙';
  }
}
const saved = localStorage.getItem('theme');
if (saved === null){
  // use system preference
  applyTheme(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches);
} else {
  applyTheme(saved === 'dark');
}
themeToggle.addEventListener('click', ()=>{
  const isDark = document.documentElement.classList.toggle('dark');
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
  applyTheme(isDark);
});
