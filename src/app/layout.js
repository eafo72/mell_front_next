
import "bootstrap/dist/css/bootstrap.min.css";
import ImportJSFiles from "./importJsFiles";

import "../css/animate.css";
import "../css/fontawesome.css";
import "../css/jquery-ui.css";
import "../css/magnific-popup.css";
import "../css/nice-select.css";
import "../css/style.css";
import "../css/image-gallery.css";

import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { BackToTopButton } from "../components/BackToTopButton";

export const metadata = {
  title: "Mell Fashion Boutique",
  description: "Boutique fashionista",
};

export default function RootLayout({ children }) {

 
  return (
    <html lang="es">
      <body>
        <ImportJSFiles />
        <BackToTopButton />
        <Navbar/>
        {children}
        <Footer /> 
      </body>
    </html>
  );
}
