import localFont from "next/font/local";
import "../globals.css";
import "swagger-ui-react/swagger-ui.css";
import "components/swagger/swagger-dark.css";
import Script from "next/script";

const yekanBakhFont = localFont({
  src: "../public/fonts/Estedad-FD[KSHD,wght].ttf",
  display: "swap",
  preload: true,
  variable: "--yekan-bakh-font",
});
export default function MyApp({ Component, pageProps }) {
  return (
    <main className={`${yekanBakhFont.variable} font-sans`}>
      <Script id="ms_clarity">{`(function (a, e, b, f, g, c, d) {
  a[b] =
    a[b] ||
    function () {
      (a[b].q = a[b].q || []).push(arguments);
    };
  c = e.createElement(f);
  c.async = 1;
  c.src = "https://www.clarity.ms/tag/" + g;
  d = e.getElementsByTagName(f)[0];
  d.parentNode.insertBefore(c, d);
})(window, document, "clarity", "script", "4zn9fqioi8");
`}</Script>
      <Component {...pageProps} />
    </main>
  );
}
