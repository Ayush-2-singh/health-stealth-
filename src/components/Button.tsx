import Link from "next/link";
  import { ReactNode } from "react";
  import clsx from "clsx";

  interface ButtonProps {
    href?: string;
    onClick?: () => void;
    variant?: "primary" | "secondary" | "ghost" | "outline";
    size?: "sm" | "md" | "lg";
    children: ReactNode;
    className?: string;
    type?: "button" | "submit";
  }

  export default function Button({ href, onClick, variant = "primary", size = "md", children, className, type = "button" }: ButtonProps) {
    const base = "inline-flex items-center justify-center gap-2 font-medium rounded-xl transition-all duration-150 select-none";
    const variants = {
      primary: "bg-primary hover:bg-primary-light text-white shadow-xs hover:shadow-navy active:scale-[0.98]",
      secondary: "bg-secondary hover:bg-secondary-dark text-white shadow-xs hover:shadow-blue active:scale-[0.98]",
      ghost: "bg-white hover:bg-gray-50 text-heading border border-border hover:border-gray-300 active:scale-[0.98]",
      outline: "border-2 border-secondary text-secondary hover:bg-secondary hover:text-white active:scale-[0.98]",
    };
    const sizes = {
      sm: "px-4 py-2 text-sm",
      md: "px-5 py-2.5 text-sm",
      lg: "px-7 py-3 text-sm",
    };
    const classes = clsx(base, variants[variant], sizes[size], className);

    if (href) return <Link href={href} className={classes}>{children}</Link>;
    return <button type={type} onClick={onClick} className={classes}>{children}</button>;
  }
  