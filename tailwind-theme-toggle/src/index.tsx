let isDark = localStorage.getItem("theme") === "dark" ? true : false;
isDark && document.documentElement.classList.add("dark");

export function toggleTheme() {
  isDark = localStorage.getItem("theme") === "dark" ? true : false;
  isDark && document.documentElement.classList.add("dark");

  if (isDark) {
    document.documentElement.classList.remove("dark");
    localStorage.removeItem("theme");
  } else {
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
  }
  isDark = !isDark;
}

export default toggleTheme;
