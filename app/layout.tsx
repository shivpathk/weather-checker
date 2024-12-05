import "weather-icons/css/weather-icons.min.css";
import "./globals.css";

import { GeistSans } from "geist/font/sans";
import { BookMarkedIcon } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { ThemeProvider } from "next-themes";

import { LocationDialog } from "@/components/location-dialog";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/ui/mode-toggle";

export const metadata: Metadata = {
  title: "Weather Checker",
  description: "Weather app with Next.js and OpenWeather API created by Shivam Kumar Pathak",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={GeistSans.variable} suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <header className="sticky top-0 border-b z-50 bg-background/90 backdrop-blur">
            <div className="container max-w-screen-lg flex items-center h-14">
              <div className="flex gap-2 ml-auto">
                <ModeToggle />
                <LocationDialog />
                <Button className="font-semibold" asChild>
                  <Link href="https://github.com/shivpathk/weather-checker" target="_blank">
                    <BookMarkedIcon size={18} className="md:mr-2" />
                    <span className="sr-only md:not-sr-only">Source Code</span>
                  </Link>
                </Button>
              </div>
            </div>
          </header>
          <main className="py-4">{children}</main>
          <footer className="text-center m-3">Created with ❤️ by <span className="text-blue-700 hover:underline"><a href="https://shivpathk-portfolio.netlify.app/">Shivpathk</a></span></footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
