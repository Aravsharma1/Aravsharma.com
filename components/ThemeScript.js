const themeScript = `
(() => {
  try {
    const savedTheme = window.localStorage.getItem("portfolio-theme");
    const theme = savedTheme || "light";
    document.documentElement.dataset.theme = theme;
  } catch {
    document.documentElement.dataset.theme = "light";
  }
})();
`;

export default function ThemeScript() {
  return <script dangerouslySetInnerHTML={{ __html: themeScript }} />;
}
