"use client";

import * as Collapsible from "@radix-ui/react-collapsible";
import { Button } from "./button";
import { ChevronDownIcon } from "lucide-react";
import { useState } from "react";
import { noiseVariants } from "./noise";
import { cn } from ".";

export default function Home() {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={cn(
        "grid grid-rows-[20px_1fr_20px] max-w-2xl mx-auto items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]",
        noiseVariants({})
      )}
    >
      <main className="flex flex-col gap-6 row-start-2 items-start transition-all">
        <div className="flex flex-col gap-3">
          <span>
            Chase Adams, founder of{" "}
            <Link href="https://filetransparency.com">Transparency</Link>.
          </span>
        </div>
        <div>
          I have been building software for over a decade and am fascinated by
          Quality in the craft of engineering, product design, local-first
          software, and artificial intelligence. A non-exhaustive list of
          organizations I&apos;ve helped build in the past:
        </div>
        <ol className="list-inside list-decimal text-sm text-left">
          <li className="mb-2">
            <Link href="https://livepeer.org">Livepeer</Link>
          </li>
          <Collapsible.Root open={open} onOpenChange={setOpen}>
            <Collapsible.Content
              data-state={open ? "open" : "closed"}
              className="overflow-hidden duration-500 transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
            >
              <li className="mb-2">
                <Link href="https://zendoor.com">Zendoor</Link>
              </li>
              <li className="mb-2">
                <Link href="https://lieuu.com">Lieuu</Link>
              </li>
              <li className="mb-2">
                <Link href="https://theluminositylab.com">
                  The Luminosity Lab
                </Link>
              </li>
              <li className="mb-2">
                <Link href="https://webpt.com">WebPT</Link>
              </li>
            </Collapsible.Content>

            <Collapsible.Trigger asChild>
              <Button className="mt-1 px-2.5 py-1" size="sm" variant="default">
                <ChevronDownIcon
                  data-state={open ? "open" : "closed"}
                  className="w-4 h-4 transition-all duration-500 data-[state=open]:rotate-180"
                />
              </Button>
            </Collapsible.Trigger>
          </Collapsible.Root>
        </ol>
        <div>
          I love to write useful software, explore new ideas, spend time with my
          family & friends & dogs, travel, ski, run, and read. A few books that
          have influenced my thinking:
        </div>
        <ol className="list-inside list-decimal text-sm text-left">
          <li className="mb-2">
            <Link href="https://www.amazon.com/Zen-Art-Motorcycle-Maintenance-Inquiry/dp/0060589469">
              Zen and the Art of Motorcycle Maintenance
            </Link>
          </li>
          <li className="mb-2">
            <Link href="https://www.amazon.com/dp/0195024028">
              The Timeless Way of Building
            </Link>
          </li>
        </ol>
      </main>
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
        className="absolute right-4 -top-4 overflow-visible pointer-events-none -z-10 blur-lg"
        width="762"
        height="192"
        viewBox="0 0 762 192"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_1_22)">
          <g filter="url(#filter0_f_1_22)">
            <ellipse
              cx="462"
              cy="-3.5"
              rx="136"
              ry="27.5"
              fill="white"
              fill-opacity="0.6"
            />
          </g>
          <g filter="url(#filter1_f_1_22)">
            <ellipse
              cx="299"
              cy="-3.5"
              rx="136"
              ry="27.5"
              fill="white"
              fill-opacity="0.6"
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
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
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
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
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
  );
}

const Link = ({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) => {
  return (
    <a
      className="font-semibold decoration-dotted hover:underline hover:underline-offset-2"
      href={href}
      target="_blank"
    >
      {children}
    </a>
  );
};
