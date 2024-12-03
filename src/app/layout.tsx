import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

import { Button } from "./button";
import { cn } from ".";
import { noiseVariants } from "./noise";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Chase Adams",
  description: "Chase Adams",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          type="image/png"
          href="/favicon-96x96.png"
          sizes="96x96"
        />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.ico" />
      </head>
      <body
        className={cn(
          `${geistSans.variable} ${geistMono.variable} antialiased`,
          `transition-with-reduce bg-[length:610px] bg-repeat bg-[url("https://cdn.filetransparency.com/images/noise.png")]`
        )}
      >
        <div
          className={cn(
            "grid grid-rows-[20px_1fr_20px] max-w-2xl mx-auto items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]",
            "text-white/90"
          )}
        >
          {children}
          <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
            <a
              className="flex items-center gap-2"
              href="https://github.com/0xcadams"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="sm" variant="default">
                Github
              </Button>
            </a>
            <a
              className="flex items-center gap-2"
              href="https://x.com/0xcadams"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="sm" variant="default">
                X
              </Button>
            </a>
            <a
              className="flex items-center gap-2"
              href="https://www.linkedin.com/in/0xcadams/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="sm" variant="default">
                LinkedIn
              </Button>
            </a>
          </footer>

          <svg
            className="absolute right-4 -top-4 overflow-visible blur-lg pointer-events-none select-none -z-10"
            width="762"
            height="192"
            viewBox="0 0 762 192"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_1_22)">
              <g filter="url(#filter0_f_1_22)">
                <ellipse
                  cx="462"
                  cy="-3.5"
                  rx="136"
                  ry="27.5"
                  fill="white"
                  fillOpacity="0.6"
                />
              </g>
              <g filter="url(#filter1_f_1_22)">
                <ellipse
                  cx="299"
                  cy="-3.5"
                  rx="136"
                  ry="27.5"
                  fill="white"
                  fillOpacity="0.6"
                />
              </g>
            </g>
            <defs>
              <filter
                id="filter0_f_1_22"
                x="171"
                y="-186"
                width="582"
                height="365"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feGaussianBlur
                  stdDeviation="77.5"
                  result="effect1_foregroundBlur_1_22"
                />
              </filter>
              <filter
                id="filter1_f_1_22"
                x="8"
                y="-186"
                width="582"
                height="365"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feGaussianBlur
                  stdDeviation="77.5"
                  result="effect1_foregroundBlur_1_22"
                />
              </filter>
              <clipPath id="clip0_1_22">
                <rect width="762" height="192" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>
      </body>
    </html>
  );
}
