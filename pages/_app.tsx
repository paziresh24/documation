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
      <Script id="clarity">{`(function(c,l,a,r,i,t,y){
            c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
            t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
            y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
        })(window, document, "clarity", "script", "4zn9fqioi8");
            `}</Script>
      <Component {...pageProps} />
    </main>
  );
}
