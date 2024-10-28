"use client";

import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";
import { outlineVariants } from "./outline";
import { cn } from ".";
import { useFormStatus } from "react-dom";
import { useHotkeys } from "./use-hotkeys";

const buttonVariants = cva(
  "group relative inline-flex line-clamp-1 backdrop-blur-sm items-center justify-center whitespace-nowrap transition hover:opacity-95 active:scale-[0.97] rounded-xl text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none data-[disabled]:opacity-50",
  {
    variants: {
      variant: {
        default: "text-white bg-black/10 hover:bg-black/20",
        primary: "text-white bg-white/5 hover:bg-white/10",
        destructive: "text-white bg-input/10 hover:bg-input/20",
        outline:
          "ring-1 ring-inset ring-foreground/20 hover:bg-input/5 hover:text-accent-foreground",
        secondary: "bg-input/10 hover:bg-input/20",
        ghost: "bg-accent/[0.01] hover:bg-accent/5",
        link: "bg-transparent underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 px-3 text-sm",
        lg: "h-10 px-8 text-base",
        xl: "h-12 px-10 text-base",
        "2xl": "h-14 px-12 text-base",
      },
      loading: {
        true: "cursor-not-allowed opacity-60",
        false: "",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      loading: false,
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  rightComponent?: React.ReactNode | null | undefined;
  leftComponent?: React.ReactNode | null | undefined;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "default",
      size,

      disabled,

      children,

      ...props
    },
    ref
  ) => {
    const { pending: formPending } = useFormStatus();

    const localRef = React.useRef<HTMLButtonElement | null>(null);
    const mergedRef = mergeRefs([ref, localRef]);
    useHotkeys(localRef.current);

    const isDisabled = Boolean(formPending || disabled);

    return (
      <button
        className={cn(
          "disabled:cursor-not-allowed",
          buttonVariants({
            variant,
            size,
            loading: isDisabled,
            className,
          }),
          variant !== "link"
            ? outlineVariants({
                variant:
                  variant === "primary"
                    ? "primary"
                    : variant === "secondary"
                    ? "secondary"
                    : variant === "destructive"
                    ? "destructive"
                    : variant === "default"
                    ? "default"
                    : "none",
                opacity: "interactive",
              })
            : "",
          "inline-flex gap-2"
        )}
        disabled={isDisabled}
        aria-disabled={isDisabled}
        ref={mergedRef}
        type="button"
        {...props}
      >
        {children}
      </button>
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };

function mergeRefs<T = unknown>(
  refs: Array<React.MutableRefObject<T> | React.LegacyRef<T>>
): React.RefCallback<T> {
  return (value) => {
    // biome-ignore lint/complexity/noForEach: <explanation>
    refs.forEach((ref) => {
      if (typeof ref === "function") {
        ref(value);
      } else if (ref != null) {
        (ref as React.MutableRefObject<T | null>).current = value;
      }
    });
  };
}
