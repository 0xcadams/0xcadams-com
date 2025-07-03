"use client";

import * as Collapsible from "@radix-ui/react-collapsible";
import { ChevronDownIcon } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { Button } from "./button";
import { cn } from "./cn";
import { linkVariants } from "./link";

export default function Home() {
  const [open, setOpen] = useState(false);

  return (
    <main
      className={cn(
        "flex flex-col gap-6 row-start-2 items-start transition-all"
      )}
    >
      <div className="flex flex-col gap-3">
        <span>
          Chase Adams, co-founder of{" "}
          <a
            className={linkVariants()}
            target="_blank"
            href="https://brief.law"
          >
            Brief
          </a>
          {"."}
        </span>
      </div>
      <div>
        I have been building software for over a decade and am fascinated by
        Quality in the craft of engineering, product design, sync engines, and
        AI. A non-exhaustive list of products I&apos;ve helped build in the
        past:
      </div>
      <Collapsible.Root asChild open={open} onOpenChange={setOpen}>
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

            <Collapsible.Content
              data-state={open ? "open" : "closed"}
              className="overflow-hidden min-h-0 animate-fade-in data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
            >
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
            </Collapsible.Content>
          </ol>

          <Collapsible.Trigger asChild>
            <Button
              className="px-2 py-1.5 mr-2 h-auto"
              size="sm"
              variant="default"
            >
              <ChevronDownIcon
                data-state={open ? "open" : "closed"}
                className="w-3.5 h-3.5 transition-all duration-500 data-[state=open]:rotate-180"
              />
            </Button>
          </Collapsible.Trigger>
        </div>
      </Collapsible.Root>
      <div>
        I love to write useful software, explore new ideas, spend time with my
        family & friends & dogs, travel, ski, run, and read. A few books that
        have influenced my thinking:
      </div>
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
    </main>
  );
}
