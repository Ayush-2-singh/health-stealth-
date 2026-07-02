import Link from "next/link";
  import { motion } from "framer-motion";
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
    const baseStyles = "inline-flex items-center justify-center gap-2 font-medium rounded-lg transition-all duration-300 relative overflow-hidden group";
    const variants = {
      primary: "bg-primary hover:bg-primary-light text-white shadow-sm hover:shadow-navy",
      secondary: "bg-secondary hover:bg-secondary-dark text-white shadow-sm hover:shadow-blue",
      ghost: "bg-white hover:bg-gray-50 text-heading border border-border hover:border-primary/30",
      outline: "border-2 border-secondary text-secondary hover:bg-secondary hover:text-white",
    };
    const sizes = { sm: "px-4 py-2 text-sm", md: "px-6 py-3 text-sm", lg: "px-8 py-4 text-base" };
    const classes = clsx(baseStyles, variants[variant], sizes[size], className);

    const content = (
      <>
        <span className="relative z-10">{children}</span>
        {(variant === "primary" || variant === "secondary") && (
          <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
        )}
      </>
    );

    if (href) {
      return (
        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
          <Link href={href} className={classes}>{content}</Link>
        </motion.div>
      );
    }
    return (
      <motion.button type={type} onClick={onClick} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className={classes}>
        {content}
      </motion.button>
    );
  }
  