const darkModeToggle = document.getElementById("dark-mode-toggle");
const sun = document.getElementById("sun");
const moon = document.getElementById("moon");
const body = document.body;

// Apply saved theme on page load
const savedTheme = localStorage.getItem("theme");
if (savedTheme === "dark") {
  body.classList.add("dark-mode");
  moon.classList.remove("hidden");
  sun.classList.add("hidden");
} else {
  // Optional: default to light mode visuals
  moon.classList.add("hidden");
  sun.classList.remove("hidden");
}

darkModeToggle.addEventListener("click", () => {
  const isDark = body.classList.toggle("dark-mode");

  moon.classList.toggle("hidden");
  sun.classList.toggle("hidden");

  // Save preference
  localStorage.setItem("theme", isDark ? "dark" : "light");
});
