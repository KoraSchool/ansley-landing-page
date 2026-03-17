import "./globals.css";

export const metadata = {
  title: "Ansley | The Back Office for Concrete Cutting Companies",
  description:
    "The automated back office that answers your calls, sends quotes in 60 seconds, and runs your operations.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
