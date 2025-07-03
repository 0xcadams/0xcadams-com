"use client";

import * as Accordion from "@radix-ui/react-accordion";
import { ArrowLeftIcon } from "lucide-react";
import Link from "next/link";
import { Button } from "../button";

export default function Home() {
  return (
    <>
      <Link className="absolute top-4 left-4 items-center gap-2" href="/">
        <Button size="sm" variant="default">
          <ArrowLeftIcon className="w-4 h-4" /> Back
        </Button>
      </Link>

      <main className="flex flex-col gap-6 row-start-2 w-full items-start">
        <div className="flex gap-2 items-center">
          <svg
            className="w-5 h-5"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 256 256"
          >
            <path d="M96,72a8,8,0,0,1,8-8A104.11,104.11,0,0,1,208,168a8,8,0,0,1-16,0,88.1,88.1,0,0,0-88-88A8,8,0,0,1,96,72ZM240,192H80V32a8,8,0,0,0-16,0V64H32a8,8,0,0,0,0,16H64V200a8,8,0,0,0,8,8H240a8,8,0,0,0,0-16Z"></path>
          </svg>
          <span className="font-semibold text-white">Principles</span>
        </div>
        <div>These are some of the values I try to live by:</div>
        <Accordion.Root defaultValue={principles[0].title} type="single">
          <ol className="list-inside list-decimal space-y-3 text-sm text-left w-full">
            {principles.map((principle) => (
              <Accordion.Item key={principle.title} value={principle.title}>
                <Accordion.Trigger
                  asChild
                  className="items-center justify-between w-full mb-2 font-semibold text-white cursor-pointer"
                >
                  <li>{principle.title}</li>
                </Accordion.Trigger>
                <Accordion.Content className="pt-2 data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
                  <div className="flex flex-col gap-1">
                    <span className="text-sm">{principle.description}</span>
                  </div>
                </Accordion.Content>
              </Accordion.Item>
            ))}
          </ol>
        </Accordion.Root>
        <div>These will change over time as I learn more.</div>
      </main>
    </>
  );
}

const principles = [
  {
    title: "Radical responsibility",
    description:
      "Default to taking responsibility for outcomes around you, regardless of the amount of influence you had.",
  },
  {
    title: "Transparency",
    description:
      "Communicate in a clear, honest, and empathetic way. Information should flow freely: give others agency over how they use it.",
  },
  {
    title: "Keep commitments",
    description:
      "Be careful about saying 'yes' or providing an expectation. Once you give expectations, no matter the medium, it is a commitment and should be kept.",
  },
  {
    title: "Embrace reality",
    description:
      "Continue to challenge assumptions behind decisions and make sure they are continuously aligned with the facts available.",
  },
  {
    title: "Localized risk",
    description:
      "Make sure that risk is siloed across all areas of your life. A bad week at work should not mean a bad week at home, and you should push to minimize average risk as much as possible.",
  },
  {
    title: "Meaningful contributions",
    description:
      "The goal is not money - it is first meaningful contributions to the world, which often lead to money. Life is short, and every day contains opportunity.",
  },
  {
    title: "Exponential is incremental",
    description: "See the small wins as building an accelerating foundation.",
  },
  {
    title: "Reduce suffering",
    description:
      "The best long-term outcome in any situation is the one that reduces suffering.",
  },
  {
    title: "Learn every day",
    description:
      "Every day should include learning something that you are passionate about.",
  },
  {
    title: "Feel feelings",
    description:
      "Allow your feelings to pass without judgement and within reason; and allow others the same.",
  },
] as const;
