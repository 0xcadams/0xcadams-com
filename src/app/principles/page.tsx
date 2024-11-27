"use client";

import { ArrowLeftIcon } from "lucide-react";
import { Button } from "../button";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Link className="absolute top-4 left-4 items-center gap-2" href="/">
        <Button size="sm" variant="default">
          <ArrowLeftIcon className="w-4 h-4" /> Back
        </Button>
      </Link>

      <main className="flex flex-col gap-6 row-start-2 items-start transition-all">
        <div className="flex flex-col gap-3">
          <span className="font-semibold text-white">Principles</span>
        </div>
        <div>I have a few guiding values which I try to live by:</div>
        <ol className="list-inside list-decimal space-y-3 text-sm text-left">
          {principles.map((principle) => (
            <li className="mb-2" key={principle.title}>
              <span className="font-semibold text-white">{principle.title}</span>
              <div className="flex flex-col gap-1 mt-0.5">
                <span className="text-sm">{principle.description}</span>
              </div>
            </li>
          ))}
        </ol>
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
      "The goal is not money - it is first meaningful contributions to the world, which often lead to money. Life is short, and every day provides an opportunity to contribute.",
  },
  {
    title: "Exponential is incremental",
    description:
      "See the small wins as building a foundation that accelerate as they grow.",
  },
  {
    title: "Reduce suffering",
    description:
      "The best long-term outcome in any situation is the one that reduces suffering. This applies to people and to animals.",
  },
  {
    title: "Learn every day",
    description:
      "Every day should come with learning something that you are passionate about.",
  },
  {
    title: "Feel feelings",
    description:
      "Allow your feelings to pass without judgement and within reason; and allow others the same.",
  },
] as const;
