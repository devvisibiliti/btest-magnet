import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SuperHeader from "./components/SuperHeader";
import { Poppins, Roboto } from "next/font/google";
{ <link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
/> }
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--heading-font",
});
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--header-font",
});

export const metadata = {
  title: "Magnetronix Website",
  description: "Magnetronix",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${poppins.variable} ${roboto.variable}`}>
      <body>
        <SuperHeader />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
