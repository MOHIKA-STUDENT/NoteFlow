import { writable } from "svelte/store";
import { browser } from "$app/environment";

const theme = writable<"light" | "dark">("light");

if (browser) {
  const savedTheme = localStorage.theme;
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  
  if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
    theme.set("dark");
    document.documentElement.classList.add("dark");
    document.documentElement.style.colorScheme = "dark";
  } else {
    theme.set("light");
    document.documentElement.classList.remove("dark");
    document.documentElement.style.colorScheme = "light";
  }
}

export function toggleTheme() {
  theme.update(current => {
    const next = current === "light" ? "dark" : "light";
    if (browser) {
      const root = document.documentElement;
      if (next === "dark") {
        root.classList.add("dark");
        root.classList.remove("light");
        localStorage.setItem("theme", "dark");
        root.style.colorScheme = "dark";
      } else {
        root.classList.remove("dark");
        root.classList.add("light");
        localStorage.setItem("theme", "light");
        root.style.colorScheme = "light";
      }
    }
    return next;
  });
}

export { theme };
