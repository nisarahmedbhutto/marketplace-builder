import "./globals.css";
import Header2 from "./components/headr/header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="max-w-full overflow-x-hidden">
      <Header2 />
      {children}
    </div>
  );
}
