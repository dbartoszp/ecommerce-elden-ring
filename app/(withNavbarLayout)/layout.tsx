import "../globals.css";
import type { Metadata } from "next";
import { Inter, Roboto } from "next/font/google";
import { Header } from "@/modules/Header/Header";
import { ReactQueryProvider } from "../ReactQueryProvider";
import { Footer } from "@/modules/Footer/Footer";
import { Toaster } from "react-hot-toast";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { SkeletonTheme } from "react-loading-skeleton";
import { CartProvider } from "../cartContext/providers/cartContext/CartContext";

const inter = Inter({ subsets: ["latin"] });
const roboto = Roboto({ weight: "300", subsets: ["cyrillic"] });

export const metadata: Metadata = {
  title: "Elden Ring Ecommerce",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <ReactQueryProvider>
          <CartProvider>
            <SkeletonTheme baseColor="#466748" highlightColor="#6aa56e">
              <Header />
              {children}
              <Footer />
              <Toaster
                position="top-center"
                gutter={12}
                containerStyle={{ margin: "8px" }}
                toastOptions={{
                  success: {
                    duration: 3000,
                  },
                  error: {
                    duration: 5000,
                  },
                  style: {
                    fontSize: "16px",
                    maxWidth: "500px",
                    padding: "16px 24px",
                    backgroundColor: " rgb(250, 246, 227)",
                    color: "var(--dark-green)",
                  },
                }}
              />
            </SkeletonTheme>
            <ReactQueryDevtools initialIsOpen={false} />
          </CartProvider>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
