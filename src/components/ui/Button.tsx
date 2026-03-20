import Link from "next/link";
import { ReactNode } from "react";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "ghost";
  className?: string;
  external?: boolean;
};

export default function Button({
  href,
  children,
  variant = "primary",
  className = "",
  external = false,
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-all duration-300";

  const variants = {
    primary:
      "bg-purple text-white shadow-[0_0_24px_rgba(123,94,167,0.4)] hover:shadow-[0_0_32px_rgba(123,94,167,0.6)] hover:-translate-y-0.5",
    ghost:
      "border border-white/10 text-soft-white hover:border-purple/40 hover:bg-white/5",
  };

  const props = external
    ? { href, target: "_blank", rel: "noopener noreferrer" }
    : { href };

  if (external) {
    return (
      <a {...props} className={`${base} ${variants[variant]} ${className}`}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </Link>
  );
}
