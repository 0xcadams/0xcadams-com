import { cva } from 'class-variance-authority';

const noiseVariants = cva(
  'before:transition-with-reduce before:rounded-[inherit] before:touch-none before:-z-10 before:pointer-events-none before:select-none before:bg-[length:610px] before:content-[""] before:absolute before:inset-0 before:w-full before:h-full before:bg-repeat before:bg-[url("https://cdn.filetransparency.com/images/noise.png")]',
  {
    variants: {
      variant: {
        dim: 'before:opacity-60 before:dark:opacity-50',
        default: 'before:opacity-90 before:dark:opacity-80',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
);

export { noiseVariants };
