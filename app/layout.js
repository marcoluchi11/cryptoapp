import "./globals.css";
import { Roboto } from "@next/font/google";
import Header from "@/components/Header";
import { CryptoProvider } from "@/context/CryptoContext";
const roboto = Roboto({
  weight: ["400", "300", "700"],
  subsets: ["latin"],
  variable: "--font-opensans",
});
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body className={`${roboto.className} bg-gray-700 text-white`}>
        <CryptoProvider>
          <Header />
          {children}
        </CryptoProvider>
      </body>
    </html>
  );
}
