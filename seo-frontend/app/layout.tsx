import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SuperHeader from "./components/SuperHeader";
{/* <link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
/> */}


export const metadata = {
  title: "Your Website",
  description: "SEO friendly site built with Next.js",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <SuperHeader />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
