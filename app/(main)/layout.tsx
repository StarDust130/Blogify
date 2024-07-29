import Header from "@/components/elements/Header";
import Footer from "@/components/elements/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex flex-col min-h-screen bg-white dark:bg-black">
      <Header />
      <div className="flex-grow">{children}</div>

      <Footer />
    </main>
  );
}
