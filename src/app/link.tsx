import { cva } from "class-variance-authority";

const linkVariants = cva(
  "font-medium text-white decoration-dotted hover:underline hover:underline-offset-2",
  {
    variants: {
      variant: {
        default: "",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export { linkVariants };
