import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary";

const variantStyles: Record<Variant, string> = {
  primary:
    "bg-foreground text-background hover:bg-[#383838] dark:hover:bg-[#ccc]",
  secondary:
    "border border-black/[.12] bg-transparent text-foreground hover:bg-black/[.04] dark:border-white/[.16] dark:hover:bg-white/[.06]",
};

const baseStyles =
  "inline-flex h-11 items-center justify-center rounded-full px-5 text-sm font-medium transition-colors";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
  href?: undefined;
};

type LinkButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: Variant;
  href: string;
};

export function Button(props: ButtonProps | LinkButtonProps) {
  if (typeof props.href === "string") {
    const { variant = "primary", className, href, ...rest } = props;
    return (
      <Link
        href={href}
        className={cn(baseStyles, variantStyles[variant], className)}
        {...rest}
      />
    );
  }

  const { variant = "primary", className, type = "button", ...rest } = props;
  return (
    <button
      type={type}
      className={cn(baseStyles, variantStyles[variant], className)}
      {...rest}
    />
  );
}
