import localFont from "next/font/local";
import "../globals.css";
import "swagger-ui-react/swagger-ui.css";
import "components/swagger/swagger-dark.css";

const yekanBakhFont = localFont({
  src: "../public/fonts/Estedad-FD[KSHD,wght].ttf",
  display: "swap",
  preload: true,
  variable: "--yekan-bakh-font",
});
export default function MyApp({ Component, pageProps }) {
  return (
    <main className={`${yekanBakhFont.variable} font-sans`}>
      <Component {...pageProps} />
    </main>
  );
}
