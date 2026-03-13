// src/app/layout.tsx
import "./globals.css";
import { FloatingDock } from "@/components/ui/floating-dock";
import { Home, FolderOpen, User, BookText } from "lucide-react";
import { Inter } from "next/font/google";
import { Toaster } from "sonner";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const links = [
    { title: "Home", icon: <Home />, href: "/" },
    { title: "Activities", icon: <FolderOpen />, href: "/activities" },
    { title: "Documentation", icon: <BookText />, href: "/docs" },
    { title: "About Me", icon: <User />, href: "/about" },
  ];

  return (
    <html lang="en" className={cn("dark", "font-sans", inter.variable)}>
      <body className="bg-neutral-950 text-neutral-200 antialiased">
        {/* Modern Dot Grid Background */}
        <div className="fixed inset-0 -z-10 h-full w-full bg-[radial-gradient(#262626_1px,transparent_1px)] [background-size:24px_24px]" />

        <main>{children}</main>
        <Toaster position="top-center" richColors />
        {/* Floating Navigation */}
        <div className="fixed bottom-10 left-1/2 -translate-x-1/2 z-50">
          <FloatingDock items={links} />
        </div>
      </body>
    </html>
  );
}
