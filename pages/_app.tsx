import { Vazirmatn } from "next/font/google";
import "../globals.css";
import "swagger-ui-react/swagger-ui.css";
import "components/swagger/swagger-dark.css";

const vazir = Vazirmatn({ subsets: ["latin"] });

export default function MyApp({ Component, pageProps }) {
  return (
    <main className={vazir.className}>
      <Component {...pageProps} />
    </main>
  );
}
