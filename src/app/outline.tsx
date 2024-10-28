import { cva } from 'class-variance-authority';

const outlineVariants = cva(
  "before:bg-gradient-to-b before:transition before:duration-500 before:masked-background before:content=[''] shadow-sm before:pointer-events-none before:absolute before:inset-0 before:select-none before:rounded-[inherit] before:p-[1.5px] before:dark:p-[1px] before:transition-with-reduce hover:shadow-md focus-visible:shadow-md has-[:focus]:shadow-lg data-[state=checked]:shadow-lg",
  {
    variants: {
      variant: {
        default:
          'before:from-white/40 before:via-white/20 before:to-white/10 hover:before:from-white/50 hover:before:via-white/50 hover:before:to-white/50',
        primary:
          'before:from-primary/100 before:via-primary/70 before:to-primary/50',
        secondary:
          'before:from-secondary/100 before:via-secondary/70 before:to-secondary/40',
        primarySecondary:
          'before:from-primary/60 before:via-secondary/40 before:to-primary/30',
        destructive:
          'before:from-destructive/100 before:via-destructive/70 before:to-destructive/40',
        none: 'before:hidden',
      },
      stops: {
        default: 'before:from-30% before:to-80%',
        wide: 'before:from-30% before:to-95%',
      },
      opacity: {
        none: 'before:opacity-100',
        low: 'before:opacity-60',
        interactive:
          'before:opacity-80 before:hover:opacity-100 before:group-focus:opacity-100',
        selected: 'before:opacity-0 aria-selected:before:opacity-80',
      },
    },
    defaultVariants: {
      variant: 'default',
      stops: 'default',
      opacity: 'none',
    },
  },
);

const rotatingOutlineVariants = cva(
  "before:masked-background before:content=[''] group absolute inset-0 rounded-[inherit] before:pointer-events-none before:absolute before:-inset-0 before:select-none before:rounded-[inherit] before:bg-[conic-gradient(var(--tw-gradient-stops))] before:shadow-sm before:shadow-primary/30 before:transition-with-reduce",
  {
    variants: {
      variant: {
        roundPrimary:
          'before:from-transparent before:via-primary/70 before:to-transparent',
        roundBackground:
          'before:from-transparent before:via-background/90 before:to-transparent',
      },
      direction: {
        normal: '',
        reverse: 'before:direction-reverse',
      },
      stops: {
        xl: 'before:from-10% before:to-50%',
        lg: 'before:from-30% before:to-50%',
        default: 'before:from-30% before:to-40%',
        sm: 'before:from-30% before:to-35%',
      },
      speed: {
        fast: 'before:sm:animate-[spin_20s_linear_infinite] before:sm:motion-reduce:animate-none',
        slow: 'before:sm:animate-[spin_30s_linear_infinite] before:sm:motion-reduce:animate-none',
        slower:
          'before:sm:animate-[spin_45s_linear_infinite] before:sm:motion-reduce:animate-none',
      },
      width: {
        sm: 'before:p-[0.8px]',
        normal: 'before:p-[1.2px]',
        lg: 'before:p-[2px] ',
      },
    },
    defaultVariants: {
      variant: 'roundPrimary',
      direction: 'normal',
      stops: 'default',
      speed: 'slow',
      width: 'normal',
    },
  },
);

const navigationOutlineVariants = cva(
  [
    'group relative rounded-lg transition-with-reduce bg-gradient-to-br',
    'from-transparent via-transparent to-transparent hover:from-accent/[0.085] hover:via-accent/[0.07] hover:to-accent/[0.03]',
    'aria-selected:backdrop-blur-lg aria-selected:from-accent/[0.085] aria-selected:via-accent/[0.07] aria-selected:to-accent/[0.03] aria-selected:hover:from-accent/[0.12] aria-selected:hover:via-accent/[0.1] aria-selected:hover:to-accent/[0.05]',
    outlineVariants({
      variant: 'default',
      opacity: 'selected',
    }),
    'shadow-none hover:shadow-none',
  ],
  {
    variants: {
      indicator: {
        default:
          'aria-selected:after:absolute aria-selected:after:left-px aria-selected:after:top-1/2 aria-selected:after:bg-primary aria-selected:after:h-4 aria-selected:after:w-0.5 aria-selected:after:-translate-y-1/2 aria-selected:after:rounded-r-full aria-selected:after:animate-in aria-selected:after:fade-in-0',
        none: '',
      },
    },
    defaultVariants: {
      indicator: 'default',
    },
  },
);

export { navigationOutlineVariants, outlineVariants, rotatingOutlineVariants };
