import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Bratva - Armamentos",
  description: "Organização responsável pela venda de armamentos bélicos"
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>
        <Navbar />
        <main style={{ paddingTop: "100px" }}>{children}</main>
      </body>
    </html>
  );
}
