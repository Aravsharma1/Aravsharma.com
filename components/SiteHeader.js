"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight, Moon, Sun } from "lucide-react";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Work", href: "#work" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const applyTheme = (nextTheme) => {
  document.documentElement.dataset.theme = nextTheme;
  window.localStorage.setItem("portfolio-theme", nextTheme);
};

export default function SiteHeader() {
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const sections = navItems
      .map((item) => document.querySelector(item.href))
      .filter(Boolean);

    const onScroll = () => setIsScrolled(window.scrollY > 16);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-32% 0px -58% 0px", threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    const savedTheme = window.localStorage.getItem("portfolio-theme");
    const preferredTheme = window.matchMedia("(prefers-color-scheme: light)").matches
      ? "light"
      : "dark";
    const initialTheme = savedTheme || preferredTheme;

    setTheme(initialTheme);
    applyTheme(initialTheme);
  }, []);

  const toggleTheme = () => {
    setTheme((currentTheme) => {
      const nextTheme = currentTheme === "dark" ? "light" : "dark";

      applyTheme(nextTheme);
      return nextTheme;
    });
  };

  return (
    <header className={`site-header ${isScrolled ? "is-scrolled" : ""}`}>
      <a className="brand" href="#home" aria-label="Arav Sharma home">
        <span>AS</span>
        Arav Sharma
      </a>

      <nav className="nav-links" aria-label="Primary navigation">
        {navItems.map((item) => (
          <a
            key={item.href}
            className={activeSection === item.href.slice(1) ? "is-active" : ""}
            href={item.href}
          >
            {item.label}
          </a>
        ))}
      </nav>

      <div className="header-actions">
        <button
          className="theme-toggle"
          type="button"
          onClick={toggleTheme}
          aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
          title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
        >
          <span className="theme-toggle-track" aria-hidden="true">
            <span className="theme-toggle-thumb">
              {theme === "dark" ? <Moon size={15} /> : <Sun size={15} />}
            </span>
          </span>
        </button>

        <a className="header-cta" href="mailto:your.email@example.com">
          Contact
          <ArrowUpRight size={16} strokeWidth={2} aria-hidden="true" />
        </a>
      </div>
    </header>
  );
}
