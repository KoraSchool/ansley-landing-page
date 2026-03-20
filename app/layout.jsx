export const metadata = {
  title: "Ansley | AI Back Office for Concrete Cutting Companies",
  description: "Ansley answers your calls, sends quotes in minutes, invoices the same day, chases payments, dispatches crews, and tracks your margins — automatically. Built exclusively for concrete cutting and coring companies.",
  openGraph: {
    title: "Ansley | AI Back Office for Concrete Cutting Companies",
    description: "Stop doing paperwork at 9pm. Let Ansley run your back office.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
