"use client";

import Link from "next/link";
import { cn } from "./cn";
import { linkVariants } from "./link";

export default function Home() {
  return (
    <main className={cn("flex flex-col row-start-2 items-start")}>
      <div className="flex group flex-col gap-6">
        <div className="flex gap-2 items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 group-hover:rotate-45 rotate-0 transition-all duration-200 ease-in"
            fill="currentColor"
            viewBox="0 0 256 256"
          >
            <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm39.2,96a39.77,39.77,0,0,0-5.84-14l34.23-34.24a87.54,87.54,0,0,1,20,48.28ZM152,128a24,24,0,1,1-24-24A24,24,0,0,1,152,128Zm-24,88A88,88,0,1,1,184.28,60.4L150,94.64A40,40,0,1,0,167.2,136h48.43A88.11,88.11,0,0,1,128,216Z"></path>
          </svg>
          <span>
            Chase Adams, founder of{" "}
            <a
              className={linkVariants()}
              target="_blank"
              href="https://filetransparency.com"
            >
              Transparency
            </a>
            {"."}
          </span>
        </div>
        <div className="flex gap-2 items-start">
          <div>
            I have been building software for over a decade and am fascinated by
            Quality in the craft of engineering, product design, sync engines,
            and AI.
          </div>
        </div>

        <div>
          A non-exhaustive list of products I&apos;ve helped build in the past:
        </div>

        <div className="flex items-start justify-between gap-2 w-full">
          <ol className="list-inside list-decimal text-sm text-left">
            <li className="mb-2 mt-1">
              <a
                className={linkVariants()}
                target="_blank"
                href="https://brief.law"
              >
                Brief
              </a>
            </li>

            <li className="mb-2 mt-1">
              <a
                className={linkVariants()}
                target="_blank"
                href="https://filetransparency.com"
              >
                Transparency
              </a>
            </li>

            <li className="mb-2 mt-1">
              <a
                className={linkVariants()}
                target="_blank"
                href="https://livepeer.org"
              >
                Livepeer
              </a>
            </li>

            <li className="mb-2">
              <a
                className={linkVariants()}
                target="_blank"
                href="https://zendoor.com"
              >
                Zendoor
              </a>
            </li>
            <li className="mb-2">
              <a
                className={linkVariants()}
                target="_blank"
                href="https://lieuu.com"
              >
                Lieuu
              </a>
            </li>
            <li className="mb-2">
              <a
                className={linkVariants()}
                target="_blank"
                href="https://theluminositylab.com"
              >
                The Luminosity Lab
              </a>
            </li>
            <li className="mb-2">
              <a
                className={linkVariants()}
                target="_blank"
                href="https://webpt.com"
              >
                WebPT
              </a>
            </li>
          </ol>
        </div>
      </div>

      <div className="relative w-full h-16">
        <svg
          className="hidden sm:flex absolute h-[70px] opacity-70 -translate-x-1/4 -rotate-[16deg] -translate-y-[123%] top-1/2 left-1/2 blur-xl pointer-events-none select-none -z-10"
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

      <div className="flex group flex-col gap-6">
        <div className="flex gap-3 items-start">
          <div className="mt-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 group-hover:rotate-12 rotate-0 transition-all duration-200 ease-in"
              fill="currentColor"
              viewBox="0 0 256 256"
            >
              <path d="M231.65,194.55,198.46,36.75a16,16,0,0,0-19-12.39L132.65,34.42a16.08,16.08,0,0,0-12.3,19l33.19,157.8A16,16,0,0,0,169.16,224a16.25,16.25,0,0,0,3.38-.36l46.81-10.06A16.09,16.09,0,0,0,231.65,194.55ZM136,50.15c0-.06,0-.09,0-.09l46.8-10,3.33,15.87L139.33,66Zm6.62,31.47,46.82-10.05,3.34,15.9L146,97.53Zm6.64,31.57,46.82-10.06,13.3,63.24-46.82,10.06ZM216,197.94l-46.8,10-3.33-15.87L212.67,182,216,197.85C216,197.91,216,197.94,216,197.94ZM104,32H56A16,16,0,0,0,40,48V208a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V48A16,16,0,0,0,104,32ZM56,48h48V64H56Zm0,32h48v96H56Zm48,128H56V192h48v16Z"></path>
            </svg>
          </div>
          <div>
            I love to write useful software, explore new ideas, spend time with
            my family & friends & dogs, travel, ski, run, and read.
          </div>
        </div>

        <div>There are a few books that have influenced how I think:</div>

        <ol className="list-inside  list-decimal text-sm text-left">
          <li className="mb-2">
            Zen and the Art of Motorcycle Maintenance (Robert M. Pirsig)
          </li>
          <li className="mb-2">
            The Timeless Way of Building (Christopher Alexander)
          </li>
          <li className="mb-2">Thinking, Fast and Slow (Daniel Kahneman)</li>
          <li>Waking Up (Sam Harris)</li>
        </ol>
        <div>
          I also have{" "}
          <Link className={linkVariants()} href="/principles">
            a few principles
          </Link>{" "}
          that I&apos;ve learned about myself.
        </div>
      </div>
    </main>
  );
}
