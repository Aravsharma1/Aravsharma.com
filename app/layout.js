import "./globals.css";
import ThemeScript from "@/components/ThemeScript";

export const metadata = {
  title: "Arav Sharma | Software Developer",
  description:
    "Arav Sharma's personal portfolio: software work, co-op experience, projects, and contact links.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeScript />
        {children}
      </body>
    </html>
  );
}
