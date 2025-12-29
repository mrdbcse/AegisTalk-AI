import type { ReactNode } from "react";

export interface AuthCardProps {
  children: ReactNode;
}

export interface AuthHeaderProps {
  title: string;
  subtitle?: string;
}

export interface AuthFooterProps {
  text: string;
  linkText: string;
  to: string;
}
