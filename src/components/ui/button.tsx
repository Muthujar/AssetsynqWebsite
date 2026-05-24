import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost" | "gold" | "whatsapp";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  href: string;
}

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-brand-gradient text-white shadow-lg shadow-accent/25 hover:opacity-90 hover:shadow-accent/35",
  secondary:
    "border border-border bg-surface text-foreground hover:border-accent/30 hover:bg-accent-light",
  ghost: "text-muted hover:bg-accent-light/60 hover:text-foreground",
  gold: "bg-gold text-foreground font-semibold shadow-md shadow-gold/25 hover:bg-gold-hover",
  whatsapp:
    "bg-[#25D366] text-white shadow-lg shadow-[#25D366]/30 hover:bg-[#20BD5A]",
};

const sizes: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-5 py-2.5 text-sm font-medium",
  lg: "px-6 py-3 text-base font-medium",
};

export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <a
      className={cn(
        "inline-flex items-center justify-center rounded-lg transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent",
        variants[variant],
        sizes[size],
        className,
      )}
      {...props}
    >
      {children}
    </a>
  );
}
