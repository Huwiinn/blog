import localFont from "next/font/local";

// SUIT 가변 폰트 - 로컬 파일 사용
export const Pretendard = localFont({
  src: [
    {
      path: "../public/fonts/PretendardStdVariable.woff2",
      style: "normal",
      weight: "100 900",
    },
  ],
  variable: "--font-pretendard",
  display: "swap",
  preload: true,
  fallback: ["sans-serif"],
});
