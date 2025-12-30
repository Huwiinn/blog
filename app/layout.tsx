import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Pretendard } from "@/local-fonts/fonts";
import { Header } from "@/components/header/Header";
import Wrapper from "@/components/Wrapper";

export const metadata: Metadata = {
  title: "Hwui's Blog",
  description: "Hwui's Blog desc",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head />
      <body
        className={`${Pretendard.variable} antialiased bg-neutral-50 dark:bg-stone-900 text-black dark:text-white`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Wrapper>
            <Header />
            <main className="p-4">{children}</main>
            {/* Footer */}
          </Wrapper>
        </ThemeProvider>
      </body>
    </html>
  );
}
