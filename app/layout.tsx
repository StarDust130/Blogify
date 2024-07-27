import type { Metadata } from "next";
import { Merriweather } from "next/font/google";
import "./globals.css";
import Header from "@/components/elements/Header";
import Footer from "@/components/elements/Footer";
import { ThemeProvider } from "@/components/elements/theme-provider";
import { Toaster } from "@/components/ui/toaster";

const inter = Merriweather({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata: Metadata = {
  title: "Blogify",
  description: "A cool Blog  platform. Start writing today.",
  icons: {
    icon: "./logo.jpeg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning={true}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <main className="flex flex-col min-h-screen bg-white dark:bg-black">
            <Header />
            <div className="flex-grow">{children}</div>
            <Toaster />
            <Footer />
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
