import "./globals.css";

export const metadata = {
  title: "Ansley | AI for Concrete Cutting Companies",
  description:
    "The AI operating system that answers your calls, sends quotes in 60 seconds, and runs your back office.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
